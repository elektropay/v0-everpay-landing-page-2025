import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function TermsPage({
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
                {dict.terms.title}
              </h1>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>{dict.terms.intro}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.acceptanceOfTerms.title}</h2>
                <p>{dict.terms.acceptanceOfTerms.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.changesToTerms.title}</h2>
                <p>{dict.terms.changesToTerms.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.useOfService.title}</h2>
                <p>{dict.terms.useOfService.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.userAccounts.title}</h2>
                <p>{dict.terms.userAccounts.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.intellectualProperty.title}</h2>
                <p>{dict.terms.intellectualProperty.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.disclaimerOfWarranties.title}</h2>
                <p>{dict.terms.disclaimerOfWarranties.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.limitationOfLiability.title}</h2>
                <p>{dict.terms.limitationOfLiability.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.governingLaw.title}</h2>
                <p>{dict.terms.governingLaw.content}</p>
                <h2 className="text-2xl font-semibold">{dict.terms.contactInformation.title}</h2>
                <p>{dict.terms.contactInformation.content}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
