import type { Messages } from "@/lib/i18n/types"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

interface CheckoutProtectionSectionProps {
  dict: Messages
}

export function CheckoutProtectionSection({ dict }: CheckoutProtectionSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <Image
            alt="Checkout Protection"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            height="400"
            src="/placeholder.png?height=400&width=600"
            width="600"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {dict.checkoutProtection.title}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {dict.checkoutProtection.description}
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature1Title}: {dict.checkoutProtection.feature1Description}
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature2Title}: {dict.checkoutProtection.feature2Description}
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature3Title}: {dict.checkoutProtection.feature3Description}
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature4Title}: {dict.checkoutProtection.feature4Description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
