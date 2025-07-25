import createMiddleware from "next-intl/middleware"
import { locales, localePrefix, defaultLocale } from "./lib/i18n/config"

export default createMiddleware({
  defaultLocale: defaultLocale,
  locales,
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(zh|de|fr|es|en)/:path*"],
}
