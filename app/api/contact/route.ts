import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact form delivery endpoint — hardened.
 */

const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
    if (rateMap.size > 500) {
      const keys = Array.from(rateMap.keys()).slice(0, 100);
      keys.forEach((k) => rateMap.delete(k));
    }
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const LIMITS = { name: 100, email: 254, company: 200, service: 100, message: 5000 };
const MAX_BODY_BYTES = 20_000;

// Strip control chars (except \n \r \t), trim, length-cap
function sanitize(str: unknown, max: number): string {
  // eslint-disable-next-line no-control-regex
  return String(str ?? '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim().slice(0, max);
}

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const DEFAULT_RECIPIENTS = [
  'bobby@etdatasolutions.com',
  'gaurang@etdatasolutions.com',
];
function getRecipients(): string[] {
  const env = process.env.CONTACT_TO_EMAILS || process.env.CONTACT_TO_EMAIL;
  if (!env) return DEFAULT_RECIPIENTS;
  return env.split(',').map((s) => s.trim()).filter(Boolean);
}

export async function GET()    { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export async function PUT()    { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }
export async function DELETE() { return NextResponse.json({ error: 'Method not allowed' }, { status: 405 }); }

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }

    const lenHeader = req.headers.get('content-length');
    if (lenHeader && Number(lenHeader) > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip')?.trim() ??
      'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 },
      );
    }

    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
    }
    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const b = body as Record<string, unknown>;

    // Honeypot — silently accept bots that fill the "website" field
    if (sanitize(b.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name    = sanitize(b.name,    LIMITS.name);
    const email   = sanitize(b.email,   LIMITS.email).toLowerCase();
    const company = sanitize(b.company, LIMITS.company);
    const service = sanitize(b.service, LIMITS.service);
    const message = sanitize(b.message, LIMITS.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (name.length < 2) {
      return NextResponse.json({ error: 'Name too short' }, { status: 400 });
    }
    if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: 'Message is too short (minimum 20 characters).' }, { status: 400 });
    }
    // Block header-injection attempts in single-line fields
    if (/[\r\n]/.test(name) || /[\r\n]/.test(email) || /[\r\n]/.test(service)) {
      return NextResponse.json({ error: 'Invalid characters' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || 'ET Data Solutions <noreply@etdatasolutions.com>';
    const to = getRecipients();

    if (apiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromAddress,
        to,
        reply_to: email,
        subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
        text: [
          `Name:    ${name}`,
          `Email:   ${email}`,
          `Company: ${company || '—'}`,
          `Service: ${service || '—'}`,
          `IP:      ${ip}`,
          ``,
          `Message:`,
          message,
        ].join('\n'),
      });
      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to deliver message. Please try again.' },
          { status: 502 },
        );
      }
    } else {
      console.warn('[contact] RESEND_API_KEY not set — accepted but not delivered.', {
        ip, name, email, company, service, to,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] internal error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
