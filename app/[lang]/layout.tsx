import type React from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { locales } from "@/lib/i18n/config"
import getRequestConfig from "@/lib/i18n"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

export default async function LocaleLayout({ children, params: { lang } }: Props) {
  if (!locales.includes(lang as any)) notFound()

  const messages = (await getRequestConfig({ locale: lang })).messages

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <div className="flex flex-col min-h-screen">
              <SiteHeader lang={lang} dict={messages} />
              <main className="flex-1">{children}</main>
              <SiteFooter lang={lang} dict={messages} />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
