/**
 * Environment variable validation.
 * Validates at import time — server startup fails loudly if required vars are missing.
 * Never expose this module to the client bundle.
 */

// requireEnv reserved for future required vars
// eslint-disable-next-line no-unused-vars
function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(
      `[env] Missing required environment variable: ${key}\n` +
      `  → Add it to .env.local (development) or your deployment environment (production).`
    )
  }
  return value
}

function optionalEnv(key: string, fallback = ''): string {
  return process.env[key] ?? fallback
}

/** SMTP config — required only when email sending is enabled */
export const env = {
  // Optional: if absent, form submissions are logged to console only
  SMTP_USER: optionalEnv('SMTP_USER'),
  SMTP_PASS: optionalEnv('SMTP_PASS'),
  SMTP_HOST: optionalEnv('SMTP_HOST', 'smtp.ionos.com'),
  SMTP_PORT: parseInt(optionalEnv('SMTP_PORT', '587'), 10),

  // Contact destination — defaults to SMTP_USER if not set separately
  CONTACT_TO: optionalEnv('CONTACT_TO'),

  NODE_ENV: optionalEnv('NODE_ENV', 'development'),

  /** Returns true only when SMTP is fully configured */
  get smtpEnabled(): boolean {
    return Boolean(this.SMTP_USER && this.SMTP_PASS)
  },

  /** The address to deliver contact form submissions to */
  get contactRecipient(): string {
    return this.CONTACT_TO || this.SMTP_USER || 'bobby@etdatasolutions.com'
  },
}
