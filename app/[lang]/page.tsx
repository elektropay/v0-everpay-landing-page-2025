import { getMessages } from "next-intl/server"
import { HomePageContent } from "@/components/home-page-content"
import type { Locale } from "@/lib/i18n/config"

type Props = {
  params: { lang: Locale }
}

export default async function IndexPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return <HomePageContent dict={messages} lang={lang} />
}
