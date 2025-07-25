import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

interface ContactPageProps {
  params: {
    lang: Locale
  }
}

export default async function ContactPage({ params: { lang } }: ContactPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dict={dict} lang={lang} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.contact.title}</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {dict.contact.description}
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md py-12">
              <ContactForm dict={dict} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} lang={lang} />
    </div>
  )
}
