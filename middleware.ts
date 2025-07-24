import { i18n } from "./lib/i18n/config"
import { createMiddleware } from "@vercel/edge-functions-ui/i18n"

const locales = ["en", "es", "fr", "de", "zh"]
const defaultLocale = "en"

export default createMiddleware(i18n)

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
