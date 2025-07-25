import { Button } from "@/components/ui/button"
import { Link } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

interface CTASectionProps {
  dict: Dictionary
  lang: Locale
}

export function CTASection({ dict, lang }: CTASectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.cta.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.cta.description}
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href={`/${lang}/signup`}>{dict.cta.signUpButton}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/${lang}/contact`}>{dict.cta.contactSalesButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
