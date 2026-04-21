/**
 * In-memory sliding window rate limiter.
 *
 * FIX: Previous version had an off-by-one bug.
 * count <= limit meant the (limit+1)th request was still allowed.
 * Correct logic: increment BEFORE checking, block when count > limit.
 *
 * For multi-instance deployments (Vercel, Kubernetes), replace the
 * Map store with Upstash Redis — the interface is identical.
 */

interface RateLimitWindow {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitWindow>()

const PRUNE_INTERVAL_MS = 5 * 60 * 1000
let lastPrune = Date.now()

function prune(): void {
  const now = Date.now()
  if (now - lastPrune < PRUNE_INTERVAL_MS) return
  for (const [key, win] of store.entries()) {
    if (win.resetAt < now) store.delete(key)
  }
  lastPrune = now
}

export interface RateLimitOptions {
  /** Max requests allowed per window */
  limit: number
  /** Window duration in milliseconds */
  windowMs: number
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number
}

export function checkRateLimit(
  key: string,
  { limit, windowMs }: RateLimitOptions,
): RateLimitResult {
  prune()

  const now = Date.now()
  const existing = store.get(key)

  if (!existing || existing.resetAt < now) {
    // Start a fresh window — this is the first request
    const win: RateLimitWindow = { count: 1, resetAt: now + windowMs }
    store.set(key, win)
    return { allowed: true, remaining: limit - 1, resetAt: win.resetAt }
  }

  // Increment first, then check — fixes the off-by-one
  existing.count += 1
  store.set(key, existing)

  const remaining = Math.max(0, limit - existing.count)
  const allowed = existing.count <= limit // strictly less than or equal

  return { allowed, remaining, resetAt: existing.resetAt }
}

/** Contact form: 5 submissions per 10 minutes per IP */
export const CONTACT_RATE_LIMIT: RateLimitOptions = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
}
