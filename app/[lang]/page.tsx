import { HomePageContent } from "@/components/home-page-content"
import type { Locale } from "@/lib/i18n/types"

export default function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  return <HomePageContent />
}
