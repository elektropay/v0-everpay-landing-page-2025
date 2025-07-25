import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function MarketplaceSolutionsPage({
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
                {dict.marketplaceSolutions.title}
              </h1>
              <p className="text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.marketplaceSolutions.description}
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.marketplaceSolutions.splitPayments.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.marketplaceSolutions.splitPayments.content}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.marketplaceSolutions.onboardingVerification.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.marketplaceSolutions.onboardingVerification.content}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.marketplaceSolutions.globalPayouts.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.marketplaceSolutions.globalPayouts.content}
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.marketplaceSolutions.fraudPrevention.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {dict.marketplaceSolutions.fraudPrevention.content}
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
