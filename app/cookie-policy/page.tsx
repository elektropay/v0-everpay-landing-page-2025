import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function CookiePolicyPage({
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
                {dict.cookiePolicy.title}
              </h1>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>{dict.cookiePolicy.intro}</p>
                <h2 className="text-2xl font-semibold">{dict.cookiePolicy.whatAreCookies.title}</h2>
                <p>{dict.cookiePolicy.whatAreCookies.content}</p>
                <h2 className="text-2xl font-semibold">{dict.cookiePolicy.howWeUseCookies.title}</h2>
                <p>{dict.cookiePolicy.howWeUseCookies.content}</p>
                <h3 className="text-xl font-semibold">{dict.cookiePolicy.typesOfCookies.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>{dict.cookiePolicy.typesOfCookies.essential.title}:</strong>{" "}
                    {dict.cookiePolicy.typesOfCookies.essential.content}
                  </li>
                  <li>
                    <strong>{dict.cookiePolicy.typesOfCookies.performance.title}:</strong>{" "}
                    {dict.cookiePolicy.typesOfCookies.performance.content}
                  </li>
                  <li>
                    <strong>{dict.cookiePolicy.typesOfCookies.functionality.title}:</strong>{" "}
                    {dict.cookiePolicy.typesOfCookies.functionality.content}
                  </li>
                  <li>
                    <strong>{dict.cookiePolicy.typesOfCookies.targeting.title}:</strong>{" "}
                    {dict.cookiePolicy.typesOfCookies.targeting.content}
                  </li>
                </ul>
                <h2 className="text-2xl font-semibold">{dict.cookiePolicy.thirdPartyCookies.title}</h2>
                <p>{dict.cookiePolicy.thirdPartyCookies.content}</p>
                <h2 className="text-2xl font-semibold">{dict.cookiePolicy.managingCookies.title}</h2>
                <p>{dict.cookiePolicy.managingCookies.content}</p>
                <h2 className="text-2xl font-semibold">{dict.cookiePolicy.changesToPolicy.title}</h2>
                <p>{dict.cookiePolicy.changesToPolicy.content}</p>
                <h2 className="text-2xl font-semibold">{dict.cookiePolicy.contactUs.title}</h2>
                <p>{dict.cookiePolicy.contactUs.content}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
