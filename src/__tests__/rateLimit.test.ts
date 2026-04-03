import { describe, it, expect, beforeEach } from 'vitest'
import { checkRateLimit } from '@/lib/rateLimit'

describe('checkRateLimit', () => {
  const opts = { limit: 3, windowMs: 60_000 }
  let key: string

  beforeEach(() => {
    key = `test:${Math.random().toString(36).slice(2)}`
  })

  it('allows request 1 of 3', () => {
    const r = checkRateLimit(key, opts)
    expect(r.allowed).toBe(true)
    expect(r.remaining).toBe(2)
  })

  it('allows exactly limit requests, then blocks the next one', () => {
    const r1 = checkRateLimit(key, opts) // 1 — allowed
    const r2 = checkRateLimit(key, opts) // 2 — allowed
    const r3 = checkRateLimit(key, opts) // 3 — allowed (at limit)
    const r4 = checkRateLimit(key, opts) // 4 — BLOCKED (over limit)

    expect(r1.allowed).toBe(true)
    expect(r2.allowed).toBe(true)
    expect(r3.allowed).toBe(true)  // exactly at limit — still allowed
    expect(r4.allowed).toBe(false) // limit+1 — blocked

    expect(r3.remaining).toBe(0)
    expect(r4.remaining).toBe(0)
  })

  it('remaining decrements correctly', () => {
    expect(checkRateLimit(key, opts).remaining).toBe(2)
    expect(checkRateLimit(key, opts).remaining).toBe(1)
    expect(checkRateLimit(key, opts).remaining).toBe(0)
    expect(checkRateLimit(key, opts).remaining).toBe(0) // clamped at 0
  })

  it('different keys are independent', () => {
    // Exhaust key1
    for (let i = 0; i <= opts.limit; i++) checkRateLimit(key, opts)
    // key2 should still be allowed
    expect(checkRateLimit(`${key}-other`, opts).allowed).toBe(true)
  })

  it('resetAt is in the future', () => {
    const r = checkRateLimit(key, opts)
    expect(r.resetAt).toBeGreaterThan(Date.now())
    expect(r.resetAt).toBeLessThanOrEqual(Date.now() + opts.windowMs + 100)
  })
})
