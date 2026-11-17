import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isEventReady = process.env.NEXT_PUBLIC_EVENT_READY === 'true' || false

const BLOCKED_ROUTES = ['/sessions', '/speakers']

// Pages for an edition that has run, sent to where that edition is kept.
// /beyond-stacks still sells 2026 passes; until it is rebuilt for 2027,
// anyone arriving from search or an old share lands on what ran instead.
const RETIRED_ROUTES: Record<string, string> = {
  '/beyond-stacks': '/past-events/beyond-stacks-2026',
}

export function middleware(request: NextRequest) {
  const retiredTo = RETIRED_ROUTES[request.nextUrl.pathname]
  if (retiredTo) {
    return NextResponse.redirect(new URL(retiredTo, request.url))
  }
  if (!isEventReady && BLOCKED_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}
