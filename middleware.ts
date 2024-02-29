import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isEventReady = process.env.NEXT_PUBLIC_EVENT_READY === 'true' || false

const BLOCKED_ROUTES = ['/sessions', '/speakers']

export function middleware(request: NextRequest) {
  if (!isEventReady && BLOCKED_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}
