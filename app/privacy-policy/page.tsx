import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function PrivacyPolicyPage({
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
                {dict.privacyPolicy.title}
              </h1>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>{dict.privacyPolicy.intro}</p>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.informationWeCollect.title}</h2>
                <p>{dict.privacyPolicy.informationWeCollect.content}</p>
                <h3 className="text-xl font-semibold">{dict.privacyPolicy.informationWeCollect.personalData.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{dict.privacyPolicy.informationWeCollect.personalData.name}</li>
                  <li>{dict.privacyPolicy.informationWeCollect.personalData.email}</li>
                  <li>{dict.privacyPolicy.informationWeCollect.personalData.address}</li>
                  <li>{dict.privacyPolicy.informationWeCollect.personalData.phone}</li>
                </ul>
                <h3 className="text-xl font-semibold">{dict.privacyPolicy.informationWeCollect.usageData.title}</h3>
                <p>{dict.privacyPolicy.informationWeCollect.usageData.content}</p>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.howWeUseInformation.title}</h2>
                <p>{dict.privacyPolicy.howWeUseInformation.content}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{dict.privacyPolicy.howWeUseInformation.provideServices}</li>
                  <li>{dict.privacyPolicy.howWeUseInformation.improveServices}</li>
                  <li>{dict.privacyPolicy.howWeUseInformation.communicate}</li>
                  <li>{dict.privacyPolicy.howWeUseInformation.marketing}</li>
                  <li>{dict.privacyPolicy.howWeUseInformation.legalCompliance}</li>
                </ul>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.sharingInformation.title}</h2>
                <p>{dict.privacyPolicy.sharingInformation.content}</p>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.dataSecurity.title}</h2>
                <p>{dict.privacyPolicy.dataSecurity.content}</p>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.yourRights.title}</h2>
                <p>{dict.privacyPolicy.yourRights.content}</p>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.changesToPolicy.title}</h2>
                <p>{dict.privacyPolicy.changesToPolicy.content}</p>
                <h2 className="text-2xl font-semibold">{dict.privacyPolicy.contactUs.title}</h2>
                <p>{dict.privacyPolicy.contactUs.content}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
