import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Everpay - Payment Solutions",
  description: "Innovative payment solutions for modern businesses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
