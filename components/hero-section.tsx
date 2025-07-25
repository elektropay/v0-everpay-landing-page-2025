import { Button } from "@/components/ui/button"
import { Link } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

interface HeroSectionProps {
  dict: Dictionary
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
            <Button asChild>
              <Link href={`/${lang}/signup`}>{dict.hero.getStartedButton}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${lang}/contact`}>{dict.hero.contactSalesButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
