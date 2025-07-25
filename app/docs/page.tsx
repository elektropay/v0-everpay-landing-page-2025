import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  params: { lang: Locale }
}

export default async function DocsPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.DocsPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.DocsPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
          <p className="mb-6">{messages.DocsPage.intro}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.DocsPage.sectionsTitle}</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>{messages.DocsPage.section1}</li>
            <li>{messages.DocsPage.section2}</li>
            <li>{messages.DocsPage.section3}</li>
            <li>{messages.DocsPage.section4}</li>
            <li>{messages.DocsPage.section5}</li>
          </ul>

          <div className="flex justify-center mt-8">
            <Link href={`/${lang}/docs/getting-started`} passHref>
              <Button>{messages.DocsPage.exploreDocs}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
