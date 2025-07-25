import createMiddleware from "next-intl/middleware"
import { locales, localePrefix, defaultLocale, pathnames } from "./lib/i18n/config"

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es|fr|de|zh)/:path*"],
}
