import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function DocsPage({
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
                {dict.docs.title}
              </h1>
              <p className="text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.docs.description}
              </p>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.docs.gettingStarted.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.docs.gettingStarted.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-blue-600 dark:text-blue-400">
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.gettingStarted.links.installation}
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.gettingStarted.links.quickStart}
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.gettingStarted.links.authentication}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.docs.apiReference.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.docs.apiReference.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-blue-600 dark:text-blue-400">
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.apiReference.links.endpoints}
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.apiReference.links.dataModels}
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.apiReference.links.errorCodes}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h2 className="text-xl font-semibold">{dict.docs.guides.title}</h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{dict.docs.guides.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-blue-600 dark:text-blue-400">
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.guides.links.webhooks}
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.guides.links.customIntegrations}
                      </a>
                    </li>
                    <li>
                      <a className="hover:underline" href="#">
                        {dict.docs.guides.links.paymentFlows}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
