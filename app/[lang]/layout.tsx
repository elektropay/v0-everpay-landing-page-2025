import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EverPay - Modern Payment Solutions",
  description: "Secure, fast, and reliable payment processing for businesses of all sizes",
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
