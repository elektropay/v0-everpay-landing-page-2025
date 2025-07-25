import { Store, ShoppingCart, Users, Repeat } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"

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
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Store className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.businessTypes.retail.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.retail.description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.businessTypes.ecommerce.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.ecommerce.description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.businessTypes.marketplace.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.marketplace.description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Repeat className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.businessTypes.saas.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.businessTypes.saas.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
