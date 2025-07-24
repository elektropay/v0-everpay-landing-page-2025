import type { Dictionary } from "./types"
import type { Locale } from "./types"

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
