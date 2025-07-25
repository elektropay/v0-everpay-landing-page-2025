import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"

interface AboutPageProps {
  params: {
    lang: Locale
  }
}

export default async function AboutPage({ params: { lang } }: AboutPageProps) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {dict.footer.aboutUs}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Everpay is a leading payment solutions provider dedicated to empowering businesses with seamless,
                secure, and scalable payment processing.
              </p>
            </div>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Founded in 2015, our mission is to simplify payments for businesses worldwide, enabling them to focus on
              growth and innovation. We believe in leveraging cutting-edge technology to provide reliable and efficient
              payment infrastructure.
            </p>
          </div>
          <Image
            alt="About Us"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="400"
            src="/placeholder.png?height=400&width=600"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
