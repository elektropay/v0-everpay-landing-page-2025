import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

interface ApiPageProps {
  params: { lang: Locale }
}

export default async function ApiPage({ params: { lang } }: ApiPageProps) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.header.api}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.ApiPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{dict.ApiPage.intro}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.ApiPage.intro}</p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">{dict.ApiPage.featuresTitle}</h3>
            <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
              <li>{dict.ApiPage.feature1}</li>
              <li>{dict.ApiPage.feature2}</li>
              <li>{dict.ApiPage.feature3}</li>
              <li>{dict.ApiPage.feature4}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
