import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function RetailSolutionsPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader dict={dict} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
                {dict.retailSolutions.title}
              </h1>
              <p className="text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.retailSolutions.description}
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.retailSolutions.inPersonPayments.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.retailSolutions.inPersonPayments.content}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.retailSolutions.omnichannelExperience.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.retailSolutions.omnichannelExperience.content}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.retailSolutions.inventoryManagement.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.retailSolutions.inventoryManagement.content}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.retailSolutions.customerInsights.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.retailSolutions.customerInsights.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
