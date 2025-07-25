import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

export default async function HelpPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">{dict.help.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{dict.help.intro}</p>
        <h2>{dict.help.faq.title}</h2>
        <ul>
          <li>
            <strong>{dict.help.faq.q1.title}</strong> {dict.help.faq.q1.answer}
          </li>
          <li>
            <strong>{dict.help.faq.q2.title}</strong> {dict.help.faq.q2.answer}
          </li>
          <li>
            <strong>{dict.help.faq.q3.title}</strong> {dict.help.faq.q3.answer}
          </li>
        </ul>
        <h2>{dict.help.contactSupport.title}</h2>
        <p>{dict.help.contactSupport.content}</p>
        <p>
          {dict.help.contactSupport.email}: <a href="mailto:support@everpay.com">support@everpay.com</a>
        </p>
        <p>
          {dict.help.contactSupport.phone}: <a href="tel:+18001234567">+1 (800) 123-4567</a>
        </p>
        <h2>{dict.help.resources.title}</h2>
        <ul>
          <li>
            <a href={`/${lang}/docs`}>{dict.help.resources.docs}</a>
          </li>
          <li>
            <a href={`/${lang}/blog`}>{dict.help.resources.blog}</a>
          </li>
          <li>
            <a href={`/${lang}/fraud-prevention`}>{dict.help.resources.fraudPrevention}</a>
          </li>
        </ul>
      </div>
    </main>
  )
}
