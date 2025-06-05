import type { Metadata } from "next"
import type React from "react"
import { Open_Sans } from "next/font/google"
import "../globals.css"

// Initialize the Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Everpay - Innovative Payment Solutions",
  description: "Empowering businesses with seamless payment processing solutions",
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
