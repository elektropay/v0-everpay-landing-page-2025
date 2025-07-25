import Link from "next/link"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader dict={dict} />
      <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">404</h1>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {dict.notFound.message}
          </p>
          <Link
            className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href={`/${lang}`}
          >
            {dict.notFound.backToHome}
          </Link>
        </div>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
