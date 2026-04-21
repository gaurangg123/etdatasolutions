/**
 * Email module — singleton Nodemailer transporter.
 *
 * FIX: Previous version had no transporter health check.
 * A dropped SMTP connection would cause silent failures until
 * the process restarted. Added verify() + reset on failure.
 */

import { env } from '@/lib/env'
import type { ContactInput } from '@/lib/validation'

let _transporter: import('nodemailer').Transporter | null = null

async function getTransporter(): Promise<import('nodemailer').Transporter> {
  if (_transporter) {
    // Verify the connection is still alive; reset if not
    try {
      await _transporter.verify()
    } catch {
      console.warn('[email] Transporter connection lost — resetting.')
      _transporter = null
    }
  }

  if (!_transporter) {
    const nodemailer = (await import('nodemailer')).default
    _transporter = nodemailer.createTransport({
      host:   env.SMTP_HOST,
      port:   env.SMTP_PORT,
      secure: false, // STARTTLS on 587
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
      pool:           true,
      maxConnections: 5,
      maxMessages:    100,
    })
    console.info('[email] Transporter created.')
  }

  return _transporter
}

// ── HTML helpers ──────────────────────────────────────────────────────────

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildRow(label: string, value: string, href?: string): string {
  if (!value) return ''
  const cell = href
    ? `<a href="${href}" style="color:#e8440a;text-decoration:none">${escHtml(value)}</a>`
    : escHtml(value)
  return `
    <tr>
      <td style="padding:10px 0;color:#8c897f;font-size:12px;font-weight:600;
                 letter-spacing:0.08em;text-transform:uppercase;width:110px;
                 vertical-align:top">${label}</td>
      <td style="padding:10px 0;color:#111110;font-size:14px;line-height:1.5">${cell}</td>
    </tr>`
}

function buildEmailHtml(data: ContactInput): string {
  const { name, email, company, phone, service, message } = data
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body style="margin:0;padding:32px 16px;background:#f5f3f0;
             font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif">
  <div style="max-width:580px;margin:0 auto;background:#fff;
              border-radius:14px;overflow:hidden;border:1px solid #e8e4de">

    <div style="background:#e8440a;padding:28px 32px">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600;letter-spacing:-0.02em">
        New Enquiry — ET Data Solutions
      </h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px">
        Submitted via etdatasolutions.com
      </p>
    </div>

    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">
        ${buildRow('Name',    name,    '')}
        ${buildRow('Email',   email,   `mailto:${email}`)}
        ${buildRow('Company', company)}
        ${buildRow('Phone',   phone,   phone ? `tel:${phone.replace(/\s/g, '')}` : undefined)}
        ${buildRow('Service', service)}
      </table>
      <div style="margin-top:20px">
        <p style="color:#8c897f;font-size:12px;font-weight:600;
                  letter-spacing:0.08em;text-transform:uppercase;margin:0 0 10px">
          Message
        </p>
        <div style="background:#fafaf9;border:1px solid #e8e4de;border-radius:8px;
                    padding:16px;font-size:14px;color:#111110;line-height:1.7;
                    white-space:pre-wrap">${escHtml(message)}</div>
      </div>
    </div>

    <div style="border-top:1px solid #e8e4de;padding:14px 32px;background:#f5f3f0;
                text-align:center;font-size:12px;color:#8c897f">
      ET Data Solutions &middot; etdatasolutions.com &middot; bobby@etdatasolutions.com
    </div>
  </div>
</body>
</html>`
}

// ── Public API ─────────────────────────────────────────────────────────────

export interface SendContactEmailResult {
  sent: boolean
  error?: string
}

export async function sendContactEmail(
  data: ContactInput,
): Promise<SendContactEmailResult> {
  if (!env.smtpEnabled) {
    console.info('[email] SMTP not configured — logging submission only:', {
      name:    data.name,
      email:   data.email,
      service: data.service,
    })
    console.info('[email] Set SMTP_USER + SMTP_PASS in .env.local to enable sending.')
    return { sent: false }
  }

  try {
    const transporter = await getTransporter()
    const info = await transporter.sendMail({
      from:    `"ET Data Solutions" <${env.SMTP_USER}>`,
      to:      env.contactRecipient,
      replyTo: data.email,
      subject: `New enquiry${data.service ? ` — ${data.service}` : ''} from ${data.name}`,
      html:    buildEmailHtml(data),
    })
    console.info('[email] Sent:', info.messageId)
    return { sent: true }
  } catch (err) {
    // Reset the transporter so the next request gets a fresh connection
    _transporter = null
    const message = err instanceof Error ? err.message : String(err)
    console.error('[email] Send failed:', message)
    return { sent: false, error: message }
  }
}
