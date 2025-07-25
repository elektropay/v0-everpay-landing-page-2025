import type React from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "@/lib/i18n"
import { locales } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

type Props = {
  children: React.ReactNode
  params: { lang: string }
}

export default async function LocaleLayout({ children, params: { lang } }: Props) {
  if (!locales.includes(lang as any)) notFound()

  const messages = await getMessages(lang)

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader lang={lang} />
        <main className="flex-1">{children}</main>
        <SiteFooter lang={lang} />
      </div>
    </NextIntlClientProvider>
  )
}
