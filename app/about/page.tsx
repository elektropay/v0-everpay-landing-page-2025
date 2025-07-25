import type React from "react"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface AboutPageProps {
  params: {
    lang: Locale
  }
}

export default async function AboutPage({ params: { lang } }: AboutPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dict={dict} lang={lang} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.footer.aboutUs}</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn more about our company and mission.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
              These principles guide our actions and decisions every day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <LightbulbIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Continuously pushing boundaries to deliver the best payment solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <ShieldCheckIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Protecting our clients' data and transactions with the highest standards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <UsersIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Customer Focus</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Committed to understanding and meeting the evolving needs of our customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} lang={lang} />
    </div>
  )
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M11 17v5" />
    </svg>
  )
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
