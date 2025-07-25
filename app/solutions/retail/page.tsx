import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import Image from "next/image"

export default async function RetailSolutionsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {dict.retailSolutions.hero.title}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {dict.retailSolutions.hero.description}
                </p>
              </div>
            </div>
            <Image
              alt="Retail Solutions"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="400"
              src="/placeholder.png?height=400&width=600"
              width="600"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.retailSolutions.features.title}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.retailSolutions.features.description}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-8">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">{dict.retailSolutions.features.posIntegration.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dict.retailSolutions.features.posIntegration.content}
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">{dict.retailSolutions.features.omnichannelPayments.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dict.retailSolutions.features.omnichannelPayments.content}
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">{dict.retailSolutions.features.inventorySync.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dict.retailSolutions.features.inventorySync.content}
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">{dict.retailSolutions.features.customerLoyalty.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dict.retailSolutions.features.customerLoyalty.content}
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">{dict.retailSolutions.features.fraudPrevention.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dict.retailSolutions.features.fraudPrevention.content}
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">{dict.retailSolutions.features.reporting.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dict.retailSolutions.features.reporting.content}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
