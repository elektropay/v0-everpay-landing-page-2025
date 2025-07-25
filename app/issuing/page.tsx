import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  params: { lang: Locale }
}

export default async function IssuingPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.IssuingPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.IssuingPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
          <p className="mb-6">{messages.IssuingPage.intro}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.IssuingPage.featuresTitle}</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>{messages.IssuingPage.feature1}</li>
            <li>{messages.IssuingPage.feature2}</li>
            <li>{messages.IssuingPage.feature3}</li>
            <li>{messages.IssuingPage.feature4}</li>
          </ul>

          <div className="flex justify-center mt-8">
            <Link href={`/${lang}/payments`} passHref>
              <Button>{messages.IssuingPage.learnMore}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
