import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Store, ShoppingCart, Building, Factory } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

interface BusinessTypesSectionProps {
  dict: Messages
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
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-8">
          <Link href={`/${lang}/solutions/retail`}>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{dict.businessTypes.retail.title}</CardTitle>
                <Store className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{dict.businessTypes.retail.content}</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${lang}/solutions/ecommerce`}>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{dict.businessTypes.ecommerce.title}</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{dict.businessTypes.ecommerce.content}</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${lang}/solutions/marketplace`}>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{dict.businessTypes.marketplace.title}</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{dict.businessTypes.marketplace.content}</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${lang}/solutions/business`}>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{dict.businessTypes.business.title}</CardTitle>
                <Factory className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{dict.businessTypes.business.content}</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
