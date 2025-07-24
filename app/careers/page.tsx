import { CtaSection } from "@/components/cta-section"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"
import Link from "next/link"

export default async function CareersPage({
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
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {dictionary.careers.heroTitle}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">{dictionary.careers.heroDescription}</p>
                </div>
              </div>
              <Image
                alt="Careers Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="400"
                src="/placeholder.svg?height=400&width=600"
                width="600"
                unoptimized="true" // Corrected unoptimized prop
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dictionary.careers.whyJoinTitle}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the benefits of building your career with Everpay.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.careers.reason1Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.careers.reason1Description}</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.careers.reason2Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.careers.reason2Description}</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.careers.reason3Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.careers.reason3Description}</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.careers.reason4Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.careers.reason4Description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {dictionary.careers.openPositionsTitle}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dictionary.careers.openPositionsDescription}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {dictionary.careers.departments.map((dept, index) => (
                <div key={index} className="grid gap-1">
                  <h3 className="text-lg font-bold">{dept.name}</h3>
                  <p className="text-sm text-gray-500">{dept.count} Open Positions</p>
                  <Link className="text-primary hover:underline" href="#">
                    View Jobs
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link className="text-primary hover:underline" href="#">
                {dictionary.careers.viewAllJobs}
              </Link>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </div>
  )
}
