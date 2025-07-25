import { ShieldCheck } from "lucide-react"
import type { Dictionary } from "@/lib/i18n/types"

interface CheckoutProtectionSectionProps {
  dict: Dictionary
}

export function CheckoutProtectionSection({ dict }: CheckoutProtectionSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.checkoutProtection.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.checkoutProtection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-1">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">{dict.checkoutProtection.feature1Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.checkoutProtection.feature1Description}</p>
          </div>
          <div className="grid gap-1">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">{dict.checkoutProtection.feature2Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.checkoutProtection.feature2Description}</p>
          </div>
          <div className="grid gap-1">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">{dict.checkoutProtection.feature3Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.checkoutProtection.feature3Description}</p>
          </div>
          <div className="grid gap-1">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">{dict.checkoutProtection.feature4Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.checkoutProtection.feature4Description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
