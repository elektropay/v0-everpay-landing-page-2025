import { getMessages } from "next-intl/server"
import { ContactForm } from "@/components/contact-form"
import type { Locale } from "@/lib/i18n/config"

type Props = {
  params: { lang: Locale }
}

export default async function ContactPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.ContactPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.ContactPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md py-12">
          <ContactForm dict={messages} />
        </div>
      </div>
    </section>
  )
}
