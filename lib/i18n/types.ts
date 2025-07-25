import type en from "./dictionaries/en.json"

export type Dictionary = typeof en
export type Locale = "en" | "es" | "fr" | "de" | "zh"

export type Messages = Dictionary
