import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle studio routes
  if (request.nextUrl.pathname.startsWith('/studio')) {
    // Add security headers for studio
    const response = NextResponse.next()
    
    // Prevent embedding in iframes for security
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/studio/:path*',
  ],
}