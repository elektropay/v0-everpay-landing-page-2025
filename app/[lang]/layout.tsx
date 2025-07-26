import type React from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Locale } from "@/lib/i18n/types"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const messages = await getMessages(params.lang)

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </NextIntlClientProvider>
  )
}
