import type React from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getDictionary } from "@/lib/i18n"
import { locales } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Locale } from "@/lib/i18n/config"

interface RootLayoutProps {
  children: React.ReactNode
  params: { lang: Locale }
}

export default async function LocaleLayout({ children, params: { lang } }: RootLayoutProps) {
  if (!locales.includes(lang)) notFound()

  const messages = await getMessages(lang)
  const dict = await getDictionary(lang)

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader dict={dict} lang={lang} />
        <main className="flex-1">{children}</main>
        <SiteFooter dict={dict} lang={lang} />
      </div>
    </NextIntlClientProvider>
  )
}
