import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"

type Props = {
  params: { lang: Locale }
}

export default async function PrivacyPolicyPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.PrivacyPolicyPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.PrivacyPolicyPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
          <p className="mb-6">{messages.PrivacyPolicyPage.intro}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.PrivacyPolicyPage.informationWeCollect}</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>{messages.PrivacyPolicyPage.info1}</li>
            <li>{messages.PrivacyPolicyPage.info2}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{messages.PrivacyPolicyPage.howWeUseInfo}</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>{messages.PrivacyPolicyPage.use1}</li>
            <li>{messages.PrivacyPolicyPage.use2}</li>
            <li>{messages.PrivacyPolicyPage.use3}</li>
            <li>{messages.PrivacyPolicyPage.use4}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{messages.PrivacyPolicyPage.dataSecurity}</h2>
          <p className="mb-6">{messages.PrivacyPolicyPage.dataSecurityContent}</p>
        </div>
      </div>
    </section>
  )
}
