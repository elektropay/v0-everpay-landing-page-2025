import type { Metadata } from "next"
import type React from "react"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Everpay - Innovative Payment Solutions",
  description: "Empowering businesses with seamless payment processing solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="min-h-screen bg-white font-sans">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
