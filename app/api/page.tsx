import { CtaSection } from "@/components/cta-section"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Link from "next/link"

export default async function ApiPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {dictionary.documentation.heroTitle}
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dictionary.documentation.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dictionary.documentation.sections.map((section, index) => (
                <div key={index} className="flex flex-col items-start space-y-2">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <p className="text-gray-500">{section.description}</p>
                  <Link className="text-primary hover:underline" href={section.link}>
                    Learn more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </div>
  )
}
