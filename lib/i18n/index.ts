import { getRequestConfig, getMessages as getNextIntlMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "./config"
import type { Dictionary, Locale } from "./types"

// This is the default export for next-intl's getRequestConfig
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  }
})

// Custom getDictionary function to load a specific dictionary
const dictionaryLoaders = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (locale in dictionaryLoaders) {
    return dictionaryLoaders[locale as keyof typeof dictionaryLoaders]()
  }
  // Fallback to English if the locale is not found
  return dictionaryLoaders.en()
}

// Export getMessages for server components, re-exporting from next-intl/server
export const getMessages = getNextIntlMessages
