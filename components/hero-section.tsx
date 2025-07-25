import { Button } from "@/components/ui/button"
import { Link } from "@/lib/i18n/navigation"
import type { Messages } from "@/lib/i18n/types"
import type { Locale } from "@/lib/i18n/config"

interface HeroSectionProps {
  dict: Messages
  lang: Locale
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {dict.hero.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{dict.hero.description}</p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              href={`/${lang}/signup`}
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
      </div>
    </section>
  )
}
