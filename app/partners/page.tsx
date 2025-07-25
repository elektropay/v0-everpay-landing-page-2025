import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function PartnersPage({
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
                {dict.partners.title}
              </h1>
              <p className="text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.partners.description}
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.partners.technologyPartners.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.partners.technologyPartners.content}</p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.partners.agencyPartners.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.partners.agencyPartners.content}</p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.partners.referralPartners.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.partners.referralPartners.content}</p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.partners.becomeAPartner.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.partners.becomeAPartner.content}</p>
                  <a
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                    href="#"
                  >
                    {dict.partners.becomeAPartner.button}
                  </a>
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
