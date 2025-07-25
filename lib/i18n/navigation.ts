import { createLocalizedPathnamesNavigation } from "next-intl/navigation"
import { locales, pathnames, defaultLocale } from "./config"

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  defaultLocale,
})
