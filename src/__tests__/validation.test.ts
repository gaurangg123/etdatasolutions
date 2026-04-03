import { describe, it, expect } from 'vitest'
import { ContactSchema } from '@/lib/validation'

describe('ContactSchema', () => {
  const valid = {
    name: 'Bobby Smith',
    email: 'bobby@etdatasolutions.com',
    company: 'ET Data Solutions',
    phone: '+1-302-357-9776',
    service: 'Data & Excel Automation',
    message: 'Hello, I would like to discuss a project with your team.',
    _hp: '',
  }

  it('accepts a fully valid submission', () => {
    const result = ContactSchema.safeParse(valid)
    expect(result.success).toBe(true)
  })

  it('accepts a minimal submission (name + email + message only)', () => {
    const result = ContactSchema.safeParse({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'I need help with data entry.',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing name', () => {
    const result = ContactSchema.safeParse({ ...valid, name: '' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = ContactSchema.safeParse({ ...valid, email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects message shorter than 10 characters', () => {
    const result = ContactSchema.safeParse({ ...valid, message: 'Hi' })
    expect(result.success).toBe(false)
  })

  it('rejects message longer than 5000 characters', () => {
    const result = ContactSchema.safeParse({ ...valid, message: 'a'.repeat(5001) })
    expect(result.success).toBe(false)
  })

  it('detects honeypot — rejects when _hp is filled', () => {
    const result = ContactSchema.safeParse({ ...valid, _hp: 'bot-filled-this' })
    expect(result.success).toBe(false)
    if (!result.success) {
      const fields = result.error.flatten().fieldErrors
      expect(fields._hp).toBeDefined()
    }
  })

  it('trims whitespace from name and email', () => {
    const result = ContactSchema.safeParse({
      ...valid,
      name: '  Bobby  ',
      email: '  bobby@etdatasolutions.com  ',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('Bobby')
      expect(result.data.email).toBe('bobby@etdatasolutions.com')
    }
  })

  it('rejects unknown service value', () => {
    const result = ContactSchema.safeParse({ ...valid, service: 'Hacking Services' })
    expect(result.success).toBe(false)
  })
})
