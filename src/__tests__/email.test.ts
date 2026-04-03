import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the env module so tests never need real SMTP credentials
vi.mock('@/lib/env', () => ({
  env: {
    SMTP_USER: '',
    SMTP_PASS: '',
    SMTP_HOST: 'smtp.ionos.com',
    SMTP_PORT: 587,
    CONTACT_TO: '',
    NODE_ENV: 'test',
    smtpEnabled: false,
    contactRecipient: 'bobby@etdatasolutions.com',
  },
}))

// Import AFTER mock is registered
const { sendContactEmail } = await import('@/lib/email')

const payload = {
  name: 'Test User',
  email: 'test@example.com',
  company: 'ACME Corp',
  phone: '+1-555-0100',
  service: 'Data & Excel Automation' as const,
  message: 'This is a test message from the unit test suite.',
  _hp: '',
}

describe('sendContactEmail', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns { sent: false } when SMTP is not configured', async () => {
    const result = await sendContactEmail(payload)
    expect(result.sent).toBe(false)
    expect(result.error).toBeUndefined()
  })

  it('does not throw when SMTP is not configured', async () => {
    await expect(sendContactEmail(payload)).resolves.not.toThrow()
  })
})
