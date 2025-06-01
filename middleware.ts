import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simple middleware that just passes through requests
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
