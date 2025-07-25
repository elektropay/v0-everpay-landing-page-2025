import type en from "./dictionaries/en.json"
import type { en as es } from "./dictionaries/es.json"
import type { en as fr } from "./dictionaries/fr.json"
import type { en as de } from "./dictionaries/de.json"
import type { en as zh } from "./dictionaries/zh.json"

export type Dictionary = typeof en | typeof es | typeof fr | typeof de | typeof zh

export type Locale = "en" | "es" | "fr" | "de" | "zh"

export type Messages = typeof en
