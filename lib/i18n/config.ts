import type { Pathnames } from "next-intl/navigation"

export const locales = ["en", "es", "fr", "de", "zh"] as const
export type Locale = (typeof locales)[number]

export const pathnames = {
  "/": "/",
  "/contact": "/contact",
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
  "/about": "/about",
  "/api": "/api",
  "/blog": "/blog",
  "/careers": "/careers",
  "/commerce": "/commerce",
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
