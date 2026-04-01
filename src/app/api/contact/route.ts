import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // ── IONOS SMTP ──────────────────────────────────────────────────────────
    // Requires: npm install nodemailer @types/nodemailer
    // Add to .env.local:
    //   SMTP_USER=bobby@etdatasolutions.com
    //   SMTP_PASS=your_ionos_webmail_password
    //
    // IONOS SMTP settings (standard for all IONOS email accounts):
    //   Host: smtp.ionos.com
    //   Port: 587  (STARTTLS)
    //   Security: STARTTLS
    // ────────────────────────────────────────────────────────────────────────

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (smtpUser && smtpPass) {
      const nodemailer = (await import('nodemailer')).default

      const transporter = nodemailer.createTransport({
        host:   'smtp.ionos.com',
        port:   587,
        secure: false, // STARTTLS
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false,
        },
      })

      await transporter.sendMail({
        from:    `"ET Data Solutions" <${smtpUser}>`,
        to:      smtpUser, // sends to yourself
        replyTo: email,
        subject: `New enquiry${service ? ` — ${service}` : ''} from ${name}`,
        html:    buildEmailHtml({ name, email, company, phone, service, message }),
      })
    } else {
      // No SMTP configured — log to console (remove in production)
      console.log('📬 Contact form submission (SMTP not configured):', {
        name, email, company, phone, service, message,
      })
      console.log('👉 Add SMTP_USER and SMTP_PASS to .env.local to enable email sending.')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please email us directly at bobby@etdatasolutions.com' },
      { status: 500 }
    )
  }
}

function buildEmailHtml(data: {
  name: string; email: string; company: string
  phone: string; service: string; message: string
}) {
  const { name, email, company, phone, service, message } = data
  const row = (label: string, value: string, link?: string) =>
    value ? `
      <tr>
        <td style="padding:10px 0;color:#8c897f;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;width:110px;vertical-align:top">${label}</td>
        <td style="padding:10px 0;color:#111110;font-size:14px">${link ? `<a href="${link}" style="color:#e8440a;text-decoration:none">${esc(value)}</a>` : esc(value)}</td>
      </tr>` : ''

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:32px 16px;background:#f5f3f0;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif">
  <div style="max-width:580px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e8e4de">
    <div style="background:#e8440a;padding:28px 32px">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600;letter-spacing:-0.02em">New Enquiry — ET Data Solutions</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px">Submitted via etdatasolutions.com</p>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">
        ${row('Name',    name,    '')}
        ${row('Email',   email,   `mailto:${email}`)}
        ${row('Company', company, '')}
        ${row('Phone',   phone,   `tel:${phone.replace(/\s/g,'')}`)}
        ${row('Service', service, '')}
      </table>
      <div style="margin-top:16px">
        <p style="color:#8c897f;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px">Message</p>
        <div style="background:#fafaf9;border:1px solid #e8e4de;border-radius:8px;padding:16px;font-size:14px;color:#111110;line-height:1.7;white-space:pre-wrap">${esc(message)}</div>
      </div>
    </div>
    <div style="border-top:1px solid #e8e4de;padding:14px 32px;background:#f5f3f0;text-align:center;font-size:12px;color:#8c897f">
      ET Data Solutions · etdatasolutions.com · bobby@etdatasolutions.com
    </div>
  </div>
</body></html>`
}

function esc(s: string): string {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}
