import { ShieldCheck, Fingerprint, Lock } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"

interface CheckoutProtectionSectionProps {
  dict: Messages
}

export function CheckoutProtectionSection({ dict }: CheckoutProtectionSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.CheckoutProtectionSection.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.CheckoutProtectionSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">{dict.CheckoutProtectionSection.feature1Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.CheckoutProtectionSection.feature1Description}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <Fingerprint className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">{dict.CheckoutProtectionSection.feature2Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.CheckoutProtectionSection.feature2Description}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <Lock className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">{dict.CheckoutProtectionSection.feature3Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.CheckoutProtectionSection.feature3Description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
