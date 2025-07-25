import type { Messages } from "@/lib/i18n/types"
import { ShoppingCart, Store, Factory, Globe } from "lucide-react"

interface BusinessTypesSectionProps {
  dict: Messages
}

export function BusinessTypesSection({ dict }: BusinessTypesSectionProps) {
  const businessTypes = [
    {
      icon: ShoppingCart,
      title: dict.businessTypes.ecommerce.title,
      description: dict.businessTypes.ecommerce.description,
    },
    {
      icon: Store,
      title: dict.businessTypes.retail.title,
      description: dict.businessTypes.retail.description,
    },
    {
      icon: Factory,
      title: dict.businessTypes.marketplace.title,
      description: dict.businessTypes.marketplace.description,
    },
    {
      icon: Globe,
      title: dict.businessTypes.saas.title,
      description: dict.businessTypes.saas.description,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {dict.businessTypes.tagline}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.businessTypes.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.businessTypes.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            {businessTypes.slice(0, 2).map((type, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <type.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {businessTypes.slice(2, 4).map((type, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <type.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
