import { NextRequest, NextResponse } from 'next/server'
import { ContactSchema, type ApiResponse } from '@/lib/validation'
import { sendContactEmail } from '@/lib/email'
import { checkRateLimit, CONTACT_RATE_LIMIT } from '@/lib/rateLimit'

/**
 * FIX: Previous version checked honeypot AFTER the Zod fields loop,
 * inside the !parsed.success branch. This is incorrect — a valid
 * submission with _hp filled would pass Zod (max(0) fails) and land
 * in the fields loop, then get caught. But a bot sending only _hp
 * with no other fields would return a real validation error exposing
 * field names. Honeypot is now checked first, before any other logic.
 *
 * FIX: Added Origin/Host check to block cross-origin API abuse.
 * Without this, any site can POST to /api/contact and piggyback
 * on our SMTP quota.
 */

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

/** Silently accept bots — don't leak that we detected them */
function silentAccept(): NextResponse<ApiResponse> {
  return NextResponse.json(
    { success: true, message: 'Message received. We will reply within 24 hours.' },
    { status: 200 },
  )
}

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {

  // ── 1. Origin check — block cross-origin abuse ────────────────────────────
  const origin = req.headers.get('origin') ?? ''
  const host   = req.headers.get('host')   ?? ''
  const allowedOrigins = [
    'https://etdatasolutions.com',
    'https://www.etdatasolutions.com',
    'https://etdatasolutions.vercel.app',
  ]
  const isDev = process.env.NODE_ENV === 'development'
  const isLocalhost = origin.startsWith('http://localhost') || host.startsWith('localhost')

  if (!isDev && !isLocalhost && !allowedOrigins.some(o => origin.startsWith(o))) {
    // Silently reject — don't reveal why
    return silentAccept()
  }

  // ── 2. Rate limiting ──────────────────────────────────────────────────────
  const ip = getClientIp(req)
  const rl = checkRateLimit(`contact:${ip}`, CONTACT_RATE_LIMIT)

  if (!rl.allowed) {
    const retryAfterSec = Math.ceil((rl.resetAt - Date.now()) / 1000)
    return NextResponse.json(
      {
        success: false,
        error: `Too many requests. Please wait ${Math.ceil(retryAfterSec / 60)} minute(s) before trying again.`,
      },
      {
        status: 429,
        headers: {
          'Retry-After':          String(retryAfterSec),
          'X-RateLimit-Limit':    String(CONTACT_RATE_LIMIT.limit),
          'X-RateLimit-Remaining': String(rl.remaining),
        },
      },
    )
  }

  // ── 3. Parse JSON ─────────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 },
    )
  }

  // ── 4. Honeypot check — before Zod, before any processing ─────────────────
  // Check the raw body directly so bots can't probe our validation logic
  if (
    body !== null &&
    typeof body === 'object' &&
    '_hp' in body &&
    typeof (body as Record<string, unknown>)['_hp'] === 'string' &&
    ((body as Record<string, unknown>)['_hp'] as string).length > 0
  ) {
    console.info('[contact] Honeypot triggered from IP:', ip)
    return silentAccept()
  }

  // ── 5. Validate with Zod ──────────────────────────────────────────────────
  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) {
    const fields: Record<string, string[]> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? 'unknown'
      // Never expose internal fields to client
      if (key === '_hp') return silentAccept()
      fields[key] = [...(fields[key] ?? []), issue.message]
    }
    return NextResponse.json(
      { success: false, error: 'Validation failed.', fields },
      { status: 422 },
    )
  }

  // ── 6. Send email ─────────────────────────────────────────────────────────
  await sendContactEmail(parsed.data)

  return NextResponse.json(
    { success: true, message: 'Message received. We will reply within 24 hours.' },
    { status: 200 },
  )
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
