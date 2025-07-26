import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "es", "fr", "de", "zh"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // If it doesn't have a locale, redirect to the default locale
  if (!pathnameHasLocale && !pathname.match(/\.(jpg|png|svg|css|js)$/)) {
    const url = new URL(`/${defaultLocale}${pathname}`, request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
