import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomePageContent } from "@/components/home-page-content"
import { getDictionary } from "@/lib/i18n"

export default async function HomePage() {
  const dictionary = await getDictionary("en") // Default to English for the root page

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader lang="en" /> {/* Pass default lang for header */}
      <HomePageContent />
      <SiteFooter dictionary={dictionary} />
    </div>
  )
}
