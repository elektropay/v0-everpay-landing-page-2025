import type en from "./dictionaries/en.json"
import type { en as es } from "./dictionaries/es.json"
import type { en as fr } from "./dictionaries/fr.json"
import type { en as de } from "./dictionaries/de.json"
import type { en as zh } from "./dictionaries/zh.json"
import type { locales } from "./config"

export type Dictionary = typeof en | typeof es | typeof fr | typeof de | typeof zh

export type Locale = (typeof locales)[number]

export type Messages = typeof en
