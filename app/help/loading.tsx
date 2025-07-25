import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

export default async function Loading({
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
              <div className="h-12 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700 mx-auto" />
              <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700 mx-auto" />
              <div className="grid gap-8 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 animate-pulse">
                    <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700 mb-2" />
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700 mb-4" />
                    <div className="h-10 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
