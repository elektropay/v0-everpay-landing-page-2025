import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from "@/lib/i18n" // Import getDictionary

export const metadata: Metadata = {
  title: "Everpay - Modern Payment Solutions",
  description: "Secure, fast, and reliable payment processing for businesses of all sizes",
  generator: "v0.dev",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch the default (English) dictionary for the root layout
  const dictionary = await getDictionary("en")

  return (
    <html lang="en">
      <head>
        {/* Google Fonts – regular link method to avoid next/font WASM */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter dictionary={dictionary} />
      </body>
    </html>
  )
}
