import { i18n } from "./lib/i18n/config" // Corrected import path
import createMiddleware from "next-intl/middleware" // Using next-intl middleware for i18n

const locales = ["en", "es", "fr", "de", "zh"]
const defaultLocale = "en"

// Using next-intl's createMiddleware for robust i18n routing
export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: "always", // Ensure locale is always in the URL
})

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - Any files with extensions (e.g., .jpg, .png, .svg, .css, .js)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
}
