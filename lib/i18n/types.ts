export type Locale = "en" | "es" | "fr" | "de" | "zh"

export interface Country {
  code: string
  name: string
  flag: string
  locale: Locale
  currency: string
}
