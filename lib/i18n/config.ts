import type { Pathnames } from "next-intl/navigation"

export const locales = ["en", "es", "fr", "de", "zh"] as const
export type Locale = (typeof locales)[number]

export const pathnames = {
  "/": "/",
  "/contact": "/contact",
  "/about": "/about",
  "/blog": "/blog",
  "/careers": "/careers",
  "/commerce": "/commerce",
  "/api": "/api",
  "/cookie-policy": "/cookie-policy",
  "/docs": "/docs",
  "/fraud-prevention": "/fraud-prevention",
  "/gateway": "/gateway",
  "/help": "/help",
  "/issuing": "/issuing",
  "/online-payments": "/online-payments",
  "/partners": "/partners",
  "/payments": "/payments",
  "/pos": "/pos",
  "/privacy-policy": "/privacy-policy",
  "/security": "/security",
  "/solutions/business": "/solutions/business",
  "/solutions/ecommerce": "/solutions/ecommerce",
  "/solutions/marketplace": "/solutions/marketplace",
  "/solutions/retail": "/solutions/retail",
  "/terms": "/terms",
} satisfies Pathnames<typeof locales>

export const localePrefix = undefined // or 'always' or 'never'

export const defaultLocale: Locale = "en"

export type AppPathnames = keyof typeof pathnames
