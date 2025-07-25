import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "./config"

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  }
})

export async function getMessages(locale: string) {
  if (!locales.includes(locale as any)) notFound()
  return (await import(`./dictionaries/${locale}.json`)).default
}

export async function getDictionary(locale: string) {
  return getMessages(locale)
}
