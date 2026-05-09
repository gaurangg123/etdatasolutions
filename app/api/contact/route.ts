import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    if (message.trim().length < 20) {
      return NextResponse.json({ error: 'Message too short' }, { status: 400 });
    }

    // ── Resend email delivery ──────────────────────────────────
    // Uncomment after: npm install resend  +  set RESEND_API_KEY in .env.local
    //
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'ET Data Solutions <noreply@etdatasolutions.com>',
    //   to: ['bobby@etdatasolutions.com'],
    //   replyTo: email,
    //   subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
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
    // ──────────────────────────────────────────────────────────

    // Simulated success while Resend is not yet wired up
    console.log('Contact form submission:', { name, email, company, service, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
