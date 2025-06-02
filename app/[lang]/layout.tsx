import type React from "react"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader dictionary={dictionary} />
          <main className="flex-1">{children}</main>
          <SiteFooter dictionary={dictionary} />
        </div>
      </body>
    </html>
  )
}
