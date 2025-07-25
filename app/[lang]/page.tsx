import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import { HomePageContent } from "@/components/home-page-content"

interface HomePageProps {
  params: {
    lang: Locale
  }
}

export default async function HomePage({ params: { lang } }: HomePageProps) {
  const dict = await getDictionary(lang)

  return <HomePageContent dict={dict} lang={lang} />
}
