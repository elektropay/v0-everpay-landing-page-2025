import type { Locale } from "./types"

export const locales: Locale[] = ["en", "es", "fr", "de", "zh"]
export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
}
