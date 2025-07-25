import { Button } from "@/components/ui/button"
import type { Messages } from "@/lib/i18n/types"
import type { Locale } from "@/lib/i18n/config"
import { Link } from "@/lib/i18n/navigation"

interface CtaSectionProps {
  dict: Messages
  lang: Locale
}

export function CtaSection({ dict, lang }: CtaSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.cta.title}</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
          {dict.cta.description}
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href={`/${lang}/contact`}
          >
            {dict.cta.signUpButton}
          </Link>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-900 hover:bg-gray-200 bg-transparent dark:border-gray-700 dark:text-gray-50 dark:hover:bg-gray-700"
          >
            {dict.cta.contactSalesButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
