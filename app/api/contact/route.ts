import { NextRequest, NextResponse } from 'next/server';

// ── Simple in-memory rate limiter ─────────────────────────────────────────
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT = 5;          // max 5 submissions per IP per minute

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

// ── Input length limits ───────────────────────────────────────────────────
const LIMITS = { name: 100, email: 254, company: 200, service: 100, message: 5000 };

function sanitize(str: string, max: number): string {
  return String(str ?? '').trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    // Sanitise + enforce length limits
    const name    = sanitize(body.name,    LIMITS.name);
    const email   = sanitize(body.email,   LIMITS.email);
    const company = sanitize(body.company, LIMITS.company);
    const service = sanitize(body.service, LIMITS.service);
    const message = sanitize(body.message, LIMITS.message);

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: 'Message too short' }, { status: 400 });
    }

    // ── Resend email delivery ─────────────────────────────────────────────
    // 1. Sign up at resend.com (free — 3,000 emails/month)
    // 2. Add & verify etdatasolutions.com domain
    // 3. Set RESEND_API_KEY in Vercel → Settings → Environment Variables
    // 4. Uncomment the block below + run: npm install resend
    //
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'ET Data Solutions <noreply@etdatasolutions.com>',
    //   to: ['bobby@etdatasolutions.com'],
    //   replyTo: email,
    //   subject: `New enquiry from ${name}${company ? ` — ${company}` : ''}`,
    //   text: [
    //     `Name:    ${name}`,
    //     `Email:   ${email}`,
    //     `Company: ${company || '—'}`,
    //     `Service: ${service || '—'}`,
    //     ``,
    //     `Message:`,
    //     message,
    //   ].join('\n'),
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
