import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // never cache

export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      env: process.env.NODE_ENV,
    },
    { status: 200 }
  )
}
