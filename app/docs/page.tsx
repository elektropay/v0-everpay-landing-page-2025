import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

export default async function DocsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">{dict.docs.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{dict.docs.intro}</p>
        <h2>{dict.docs.gettingStarted.title}</h2>
        <p>{dict.docs.gettingStarted.content}</p>
        <h3>{dict.docs.installation.title}</h3>
        <p>{dict.docs.installation.content}</p>
        <h3>{dict.docs.configuration.title}</h3>
        <p>{dict.docs.configuration.content}</p>
        <h2>{dict.docs.apiReference.title}</h2>
        <p>{dict.docs.apiReference.content}</p>
        <h3>{dict.docs.endpoints.title}</h3>
        <p>{dict.docs.endpoints.content}</p>
        <h3>{dict.docs.authentication.title}</h3>
        <p>{dict.docs.authentication.content}</p>
        <h2>{dict.docs.guides.title}</h2>
        <p>{dict.docs.guides.content}</p>
        <ul>
          <li>{dict.docs.guides.guide1}</li>
          <li>{dict.docs.guides.guide2}</li>
          <li>{dict.docs.guides.guide3}</li>
        </ul>
        <h2>{dict.docs.support.title}</h2>
        <p>{dict.docs.support.content}</p>
      </div>
    </main>
  )
}
