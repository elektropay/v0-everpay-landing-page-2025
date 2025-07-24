import { HomePageContent } from "@/components/home-page-content"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

export default async function LangHomePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  // You can use the dictionary here to pass localized content to HomePageContent
  // For simplicity, HomePageContent currently uses hardcoded English text.
  // In a real app, you'd pass props like:
  // <HomePageContent dictionary={dictionary.homePage} />

  return <HomePageContent />
}
