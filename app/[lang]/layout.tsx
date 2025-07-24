import type React from "react"
import type { Metadata } from "next"
import "./../globals.css"
import { getDictionary } from "@/lib/i18n"

/**
 * NOTE:
 * 1.  **Do NOT** wrap children in <html> or <body>. The root `app/layout.tsx`
 *     already does that. Returning a fragment (or any element) is sufficient.
 * 2.  Meta can still be set here if you need per-locale <head> tags.
 * 3.  SiteHeader and SiteFooter are now handled by the root layout.
 */

export const metadata: Metadata = {
  title: "Everpay – Modern Payment Solutions",
  description: "Secure, fast, and reliable payment processing for businesses of all sizes.",
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // The dictionary is fetched here if child pages need it, but not for SiteFooter/SiteHeader
  const dictionary = await getDictionary(params.lang)

  return <>{children}</>
}
