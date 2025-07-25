import type React from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "@/lib/i18n"
import { locales } from "@/lib/i18n/config"

export default async function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!locales.includes(lang as any)) notFound()

  const messages = await getMessages(lang)

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}
