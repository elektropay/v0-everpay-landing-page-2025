import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simplified middleware that won't cause issues
export function middleware(request: NextRequest) {
  // Basic middleware functionality
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
