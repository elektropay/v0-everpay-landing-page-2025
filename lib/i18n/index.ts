import type { Dictionary } from "./types"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (locale in dictionaries) {
    return dictionaries[locale as keyof typeof dictionaries]()
  }
  // Fallback to English if the locale is not found
  return dictionaries.en()
}
