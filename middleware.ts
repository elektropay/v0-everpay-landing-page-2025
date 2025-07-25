import createMiddleware from "next-intl/middleware"
import { locales, localePrefix, pathnames } from "./lib/i18n/config"

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|es|fr|de|zh)/:path*",

    // Enable redirects that add the locale prefix when there is none
    // '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
