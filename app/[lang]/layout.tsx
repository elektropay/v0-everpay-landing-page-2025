import type React from "react"
import { Inter, Manrope } from "next/font/google"
import "../../styles/globals.css"

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

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={`${inter.variable} ${manrope.variable}`}>{children}</div>
}
