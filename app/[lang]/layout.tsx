import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

export default async function LangLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <SiteHeader dictionary={dictionary} lang={lang} />
      <main>{children}</main>
      <SiteFooter dictionary={dictionary} />
    </>
  )
}
