import { NextRequest, NextResponse } from 'next/server';

// ── Simple in-memory rate limiter ─────────────────────────
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const LIMITS = { name: 100, email: 254, company: 200, service: 100, message: 5000 };
function sanitize(str: unknown, max: number): string {
  return String(str ?? '').trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again in a minute.' }, { status: 429 });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const b = body as Record<string, unknown>;
    const name    = sanitize(b.name,    LIMITS.name);
    const email   = sanitize(b.email,   LIMITS.email);
    const company = sanitize(b.company, LIMITS.company);
    const service = sanitize(b.service, LIMITS.service);
    const message = sanitize(b.message, LIMITS.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: 'Message is too short (minimum 20 characters).' }, { status: 400 });
    }

    // ── Resend delivery ───────────────────────────────────
    const apiKey = process.env.RESEND_API_KEY;
    const toAddress = process.env.CONTACT_TO_EMAIL || 'hello@etdatasolutions.com';
    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'ET Data Solutions <noreply@etdatasolutions.com>';

    if (apiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        replyTo: email,
        subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
        text: [
          `Name:    ${name}`,
          `Email:   ${email}`,
          `Company: ${company || '—'}`,
          `Service: ${service || '—'}`,
          ``,
          `Message:`,
          message,
        ].join('\n'),
      });
      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Failed to deliver message. Please try again.' }, { status: 502 });
      }
    } else {
      // No API key: log and accept (dev mode).
      console.warn('[contact] RESEND_API_KEY not set — message accepted but not delivered.', { name, email, company, service });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] internal error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
