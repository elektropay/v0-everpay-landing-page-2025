import type React from "react"
import { notFound } from "next/navigation"
import { locales } from "@/lib/i18n/config"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "@/lib/i18n" // Import getMessages

export default async function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!locales.includes(lang as any)) notFound()

  const messages = await getMessages() // Use getMessages here

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
