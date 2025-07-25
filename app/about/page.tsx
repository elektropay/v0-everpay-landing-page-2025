import { getMessages } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const messages = await getMessages(lang)

  return (
    <>
      <SiteHeader dict={messages} lang={lang} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.navigation.about}</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  This is the about page. Content will be added here soon.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={messages} lang={lang} />
    </>
  )
}
