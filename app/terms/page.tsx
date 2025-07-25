import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

export default async function TermsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">{dict.terms.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{dict.terms.intro}</p>
        <h2>{dict.terms.acceptance.title}</h2>
        <p>{dict.terms.acceptance.content}</p>
        <h2>{dict.terms.services.title}</h2>
        <p>{dict.terms.services.content}</p>
        <h2>{dict.terms.userObligations.title}</h2>
        <p>{dict.terms.userObligations.content}</p>
        <ul>
          <li>{dict.terms.userObligations.obligation1}</li>
          <li>{dict.terms.userObligations.obligation2}</li>
          <li>{dict.terms.userObligations.obligation3}</li>
        </ul>
        <h2>{dict.terms.intellectualProperty.title}</h2>
        <p>{dict.terms.intellectualProperty.content}</p>
        <h2>{dict.terms.disclaimerOfWarranties.title}</h2>
        <p>{dict.terms.disclaimerOfWarranties.content}</p>
        <h2>{dict.terms.limitationOfLiability.title}</h2>
        <p>{dict.terms.limitationOfLiability.content}</p>
        <h2>{dict.terms.governingLaw.title}</h2>
        <p>{dict.terms.governingLaw.content}</p>
        <h2>{dict.terms.changesToTerms.title}</h2>
        <p>{dict.terms.changesToTerms.content}</p>
        <h2>{dict.terms.contactInformation.title}</h2>
        <p>{dict.terms.contactInformation.content}</p>
      </div>
    </main>
  )
}
