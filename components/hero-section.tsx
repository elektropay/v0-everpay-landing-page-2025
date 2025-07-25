import { Button } from "@/components/ui/button"
import { Link } from "@/lib/i18n/navigation"
import type { Messages } from "@/lib/i18n/types"
import type { Locale } from "@/lib/i18n/config"
import Image from "next/image"

interface HeroSectionProps {
  dict: Messages
  lang: Locale
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{dict.hero.title}</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">{dict.hero.description}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href={`/${lang}/contact`}
              >
                {dict.hero.getStartedButton}
              </Link>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-200 bg-transparent dark:border-gray-700 dark:text-gray-50 dark:hover:bg-gray-700"
              >
                {dict.hero.contactSalesButton}
              </Button>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="400"
            src="/placeholder.svg?height=400&width=600"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
