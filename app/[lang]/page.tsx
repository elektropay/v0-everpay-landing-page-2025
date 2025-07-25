import { getDictionary } from "@/lib/i18n"
import { HomePageContent } from "@/components/home-page-content"
import type { Locale } from "@/lib/i18n/config"

interface LangHomePageProps {
  params: { lang: Locale }
}

export default async function LangHomePage({ params: { lang } }: LangHomePageProps) {
  const dict = await getDictionary(lang)

  return <HomePageContent dict={dict} lang={lang} />
}
