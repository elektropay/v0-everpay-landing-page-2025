import type React from "react"
import { Inter, Manrope } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import "../styles/globals.css"

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
