import { CtaSection } from "@/components/cta-section"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"

export default async function AboutPage({
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
                    {dictionary.aboutUs.heroTitle}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">{dictionary.aboutUs.heroDescription}</p>
                </div>
              </div>
              <Image
                alt="About Us Hero"
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {dictionary.aboutUs.ourStoryTitle}
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {dictionary.aboutUs.ourStoryDescription}
                  </p>
                </div>
              </div>
              <Image
                alt="Our Story"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="400"
                src="/placeholder.svg?height=400&width=600"
                width="600"
                unoptimized="true" // Corrected unoptimized prop
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dictionary.aboutUs.valuesTitle}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values guide everything we do, from product development to customer interactions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.aboutUs.value1Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.aboutUs.value1Description}</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.aboutUs.value2Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.aboutUs.value2Description}</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.aboutUs.value3Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.aboutUs.value3Description}</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{dictionary.aboutUs.value4Title}</h3>
                <p className="text-sm text-gray-500">{dictionary.aboutUs.value4Description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dictionary.aboutUs.teamTitle}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dictionary.aboutUs.teamDescription}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-1">
                <Image
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  height="150"
                  src="/placeholder-user.jpg"
                  width="150"
                  unoptimized="true" // Corrected unoptimized prop
                />
                <h3 className="text-lg font-bold">Jane Doe</h3>
                <p className="text-sm text-gray-500">CEO</p>
              </div>
              <div className="grid gap-1">
                <Image
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  height="150"
                  src="/placeholder-user.jpg"
                  width="150"
                  unoptimized="true" // Corrected unoptimized prop
                />
                <h3 className="text-lg font-bold">John Smith</h3>
                <p className="text-sm text-gray-500">CTO</p>
              </div>
              <div className="grid gap-1">
                <Image
                  alt="Team Member"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                  height="150"
                  src="/placeholder-user.jpg"
                  width="150"
                  unoptimized="true" // Corrected unoptimized prop
                />
                <h3 className="text-lg font-bold">Emily White</h3>
                <p className="text-sm text-gray-500">Head of Product</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </div>
  )
}
