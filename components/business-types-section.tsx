import { ShoppingCart, Store, Users, Briefcase } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/types"
import { Link } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"

interface BusinessTypesSectionProps {
  dict: Dictionary
  lang: Locale
}

export function BusinessTypesSection({ dict, lang }: BusinessTypesSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.businessTypes.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.businessTypes.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <Link href={`/${lang}/solutions/ecommerce`} className="group grid gap-1 text-center">
            <ShoppingCart className="mx-auto h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold group-hover:underline">{dict.businessTypes.ecommerceTitle}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.ecommerceDescription}</p>
          </Link>
          <Link href={`/${lang}/solutions/retail`} className="group grid gap-1 text-center">
            <Store className="mx-auto h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold group-hover:underline">{dict.businessTypes.retailTitle}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.retailDescription}</p>
          </Link>
          <Link href={`/${lang}/solutions/marketplace`} className="group grid gap-1 text-center">
            <Users className="mx-auto h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold group-hover:underline">{dict.businessTypes.marketplaceTitle}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.marketplaceDescription}</p>
          </Link>
          <Link href={`/${lang}/solutions/business`} className="group grid gap-1 text-center">
            <Briefcase className="mx-auto h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold group-hover:underline">{dict.businessTypes.businessTitle}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.businessDescription}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
