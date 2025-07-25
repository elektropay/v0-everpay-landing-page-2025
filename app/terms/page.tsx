import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"

type Props = {
  params: { lang: Locale }
}

export default async function TermsPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.TermsPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.TermsPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
          <p className="mb-6">{messages.TermsPage.intro}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.TermsPage.acceptance}</h2>
          <p className="mb-6">{messages.TermsPage.acceptanceContent}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.TermsPage.changes}</h2>
          <p className="mb-6">{messages.TermsPage.changesContent}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.TermsPage.userAccounts}</h2>
          <p className="mb-6">{messages.TermsPage.userAccountsContent}</p>
        </div>
      </div>
    </section>
  )
}
