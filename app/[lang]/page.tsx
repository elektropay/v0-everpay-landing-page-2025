import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomePageContent } from "@/components/home-page-content"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

export default async function LangHomePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader lang={lang} />
      <HomePageContent />
      <SiteFooter dictionary={dictionary} />
    </div>
  )
}
