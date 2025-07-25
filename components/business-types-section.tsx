import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShoppingCartIcon, StoreIcon, UsersIcon, CloudIcon } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"
import Image from "next/image"

interface BusinessTypesSectionProps {
  dict: Messages
}

export function BusinessTypesSection({ dict }: BusinessTypesSectionProps) {
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
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <ShoppingCartIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.businessTypes.ecommerceTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.businessTypes.ecommerceDescription}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <StoreIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.businessTypes.retailTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.businessTypes.retailDescription}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <UsersIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.businessTypes.marketplaceTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.businessTypes.marketplaceDescription}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CloudIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.businessTypes.saasTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.businessTypes.saasDescription}</CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Image
            src="/placeholder.png?height=300&width=800"
            width={800}
            height={300}
            alt="Business Types"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
