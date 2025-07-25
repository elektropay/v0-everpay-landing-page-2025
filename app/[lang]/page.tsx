import { HomePageContent } from "@/components/home-page-content"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return <HomePageContent dictionary={dictionary} />
}
