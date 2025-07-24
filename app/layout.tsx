import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "../styles/globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from "@/lib/i18n"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Everpay - The Payment Infrastructure for the Internet",
  description:
    "Millions of businesses of all sizes—from startups to large enterprises—use Everpay's software and APIs to accept payments, send payouts, and manage their businesses online.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dictionary = await getDictionary("en") // Default to English dictionary

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter dictionary={dictionary} />
      </body>
    </html>
  )
}
