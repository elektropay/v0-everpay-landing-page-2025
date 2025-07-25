import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Messages } from "@/lib/i18n/types"
import { ShoppingCartIcon, StoreIcon, UsersIcon, CloudIcon, BriefcaseIcon, HeartIcon } from "lucide-react"

interface BusinessTypesSectionProps {
  dict: Messages
}

export function BusinessTypesSection({ dict }: BusinessTypesSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.businessTypes.title}</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
          {dict.businessTypes.description}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ShoppingCartIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.businessTypes.ecommerceTitle}</CardTitle>
                <CardDescription>{dict.businessTypes.ecommerceDescription}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <StoreIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.businessTypes.retailTitle}</CardTitle>
                <CardDescription>{dict.businessTypes.retailDescription}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <UsersIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.businessTypes.marketplaceTitle}</CardTitle>
                <CardDescription>{dict.businessTypes.marketplaceDescription}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CloudIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.businessTypes.saasTitle}</CardTitle>
                <CardDescription>{dict.businessTypes.saasDescription}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.businessTypes.servicesTitle}</CardTitle>
                <CardDescription>{dict.businessTypes.servicesDescription}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <HeartIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.businessTypes.nonProfitTitle}</CardTitle>
                <CardDescription>{dict.businessTypes.nonProfitDescription}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
