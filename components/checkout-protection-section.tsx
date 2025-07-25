import type React from "react"
import Image from "next/image"
import type { Messages } from "@/lib/i18n/types"

interface CheckoutProtectionSectionProps {
  dict: Messages
}

export function CheckoutProtectionSection({ dict }: CheckoutProtectionSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Checkout Protection"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
            height="400"
            src="/placeholder.png?height=400&width=600"
            width="600"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.checkoutProtection.title}</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {dict.checkoutProtection.description}
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature1}
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature2}
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {dict.checkoutProtection.feature3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
