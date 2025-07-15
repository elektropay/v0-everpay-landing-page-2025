import type React from "react"
import { getDictionary } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface LayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default async function LocalizedLayout({ children, params }: LayoutProps) {
  const dictionary = await getDictionary(params.lang)

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter dictionary={dictionary} />
    </>
  )
}
