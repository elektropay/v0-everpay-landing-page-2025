import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

export default async function PrivacyPolicyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">{dict.privacyPolicy.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{dict.privacyPolicy.intro}</p>
        <h2>{dict.privacyPolicy.informationWeCollect.title}</h2>
        <p>{dict.privacyPolicy.informationWeCollect.content}</p>
        <h3>{dict.privacyPolicy.informationWeCollect.personalData.title}</h3>
        <p>{dict.privacyPolicy.informationWeCollect.personalData.content}</p>
        <h3>{dict.privacyPolicy.informationWeCollect.usageData.title}</h3>
        <p>{dict.privacyPolicy.informationWeCollect.usageData.content}</p>
        <h2>{dict.privacyPolicy.howWeUseInformation.title}</h2>
        <p>{dict.privacyPolicy.howWeUseInformation.content}</p>
        <ul>
          <li>{dict.privacyPolicy.howWeUseInformation.purpose1}</li>
          <li>{dict.privacyPolicy.howWeUseInformation.purpose2}</li>
          <li>{dict.privacyPolicy.howWeUseInformation.purpose3}</li>
          <li>{dict.privacyPolicy.howWeUseInformation.purpose4}</li>
        </ul>
        <h2>{dict.privacyPolicy.sharingInformation.title}</h2>
        <p>{dict.privacyPolicy.sharingInformation.content}</p>
        <h2>{dict.privacyPolicy.dataSecurity.title}</h2>
        <p>{dict.privacyPolicy.dataSecurity.content}</p>
        <h2>{dict.privacyPolicy.yourRights.title}</h2>
        <p>{dict.privacyPolicy.yourRights.content}</p>
        <h2>{dict.privacyPolicy.changesToPolicy.title}</h2>
        <p>{dict.privacyPolicy.changesToPolicy.content}</p>
        <h2>{dict.privacyPolicy.contactUs.title}</h2>
        <p>{dict.privacyPolicy.contactUs.content}</p>
      </div>
    </main>
  )
}
