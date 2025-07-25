import { getMessages } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomePageContent } from "@/components/home-page-content"

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const messages = await getMessages(lang)

  return (
    <>
      <SiteHeader dict={messages} lang={lang} />
      <main className="flex-1">
        <HomePageContent dict={messages} lang={lang} />
      </main>
      <SiteFooter dict={messages} lang={lang} />
    </>
  )
}
