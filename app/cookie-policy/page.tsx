import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

export default async function CookiePolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">{dict.cookiePolicy.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{dict.cookiePolicy.intro}</p>
        <h2>{dict.cookiePolicy.whatAreCookies.title}</h2>
        <p>{dict.cookiePolicy.whatAreCookies.content}</p>
        <h2>{dict.cookiePolicy.howWeUseCookies.title}</h2>
        <ul>
          <li>
            <strong>{dict.cookiePolicy.howWeUseCookies.essential.title}:</strong>{" "}
            {dict.cookiePolicy.howWeUseCookies.essential.content}
          </li>
          <li>
            <strong>{dict.cookiePolicy.howWeUseCookies.performance.title}:</strong>{" "}
            {dict.cookiePolicy.howWeUseCookies.performance.content}
          </li>
          <li>
            <strong>{dict.cookiePolicy.howWeUseCookies.functionality.title}:</strong>{" "}
            {dict.cookiePolicy.howWeUseCookies.functionality.content}
          </li>
          <li>
            <strong>{dict.cookiePolicy.howWeUseCookies.advertising.title}:</strong>{" "}
            {dict.cookiePolicy.howWeUseCookies.advertising.content}
          </li>
        </ul>
        <h2>{dict.cookiePolicy.yourChoices.title}</h2>
        <p>{dict.cookiePolicy.yourChoices.content}</p>
        <h2>{dict.cookiePolicy.changes.title}</h2>
        <p>{dict.cookiePolicy.changes.content}</p>
        <h2>{dict.cookiePolicy.contact.title}</h2>
        <p>{dict.cookiePolicy.contact.content}</p>
      </div>
    </main>
  )
}
