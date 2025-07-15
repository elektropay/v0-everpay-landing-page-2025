import type React from "react"
import type { Metadata } from "next"
import "./../globals.css"

/**
 * NOTE:
 * 1.  **Do NOT** wrap children in <html> or <body>. The root `app/layout.tsx`
 *     already does that. Returning a fragment (or any element) is sufficient.
 * 2.  Meta can still be set here if you need per-locale <head> tags.
 */

export const metadata: Metadata = {
  title: "Everpay – Modern Payment Solutions",
  description: "Secure, fast, and reliable payment processing for businesses of all sizes.",
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
