import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

interface PartnersPageProps {
  params: {
    lang: Locale
  }
}

export default async function PartnersPage({ params: { lang } }: PartnersPageProps) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.footer.partners}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              This is the partners page.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
