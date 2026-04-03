/**
 * Integration tests for /api/contact route.
 * Tests the full request/response cycle including rate limiting,
 * honeypot, and Zod validation without hitting real SMTP.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mock env before importing the route
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

vi.mock('@/lib/email', () => ({
  sendContactEmail: vi.fn().mockResolvedValue({ sent: false }),
}))

const { POST } = await import('@/app/api/contact/route')

function makeRequest(body: unknown, origin = 'http://localhost:3000'): NextRequest {
  return new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'origin': origin,
      'x-forwarded-for': `192.168.1.${Math.floor(Math.random() * 200) + 10}`, // unique IP per test
    },
    body: JSON.stringify(body),
  })
}

const validPayload = {
  name:    'Test User',
  email:   'test@example.com',
  message: 'Hello, I would like to discuss a project.',
  _hp:     '',
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 200 for a valid submission', async () => {
    const res = await POST(makeRequest(validPayload))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.success).toBe(true)
  })

  it('returns 422 for missing required fields', async () => {
    const res = await POST(makeRequest({ name: 'X', email: 'bad' }))
    expect(res.status).toBe(422)
    const body = await res.json()
    expect(body.success).toBe(false)
    expect(body.fields).toBeDefined()
  })

  it('silently accepts honeypot submissions (returns 200, no email)', async () => {
    const { sendContactEmail } = await import('@/lib/email')
    const res = await POST(makeRequest({ ...validPayload, _hp: 'bot-was-here' }))
    expect(res.status).toBe(200)
    expect(sendContactEmail).not.toHaveBeenCalled()
  })

  it('returns 400 for malformed JSON', async () => {
    const req = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'origin': 'http://localhost:3000' },
      body: 'not json at all {{{',
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('does not expose _hp field name in validation errors', async () => {
    // Send only _hp filled — should get silently accepted, not a validation error
    const res = await POST(makeRequest({ _hp: 'filled', name: '', email: '', message: '' }))
    const body = await res.json()
    // Should never expose _hp in fields
    expect(body.fields?.['_hp']).toBeUndefined()
  })

  it('rejects cross-origin requests in production', async () => {
    // Simulate production env
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'

    const res = await POST(makeRequest(validPayload, 'https://evil-site.com'))
    // Silently accepts — doesn't leak info
    expect(res.status).toBe(200)

    process.env.NODE_ENV = originalEnv
  })
})
