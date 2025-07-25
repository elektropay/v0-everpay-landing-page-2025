import { ShieldCheck, Lock, CreditCard, Fingerprint } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"
import Image from "next/image"

interface CheckoutProtectionSectionProps {
  dict: Messages
}

export function CheckoutProtectionSection({ dict }: CheckoutProtectionSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.checkoutProtection.title}</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.checkoutProtection.description}
              </p>
            </div>
            <ul className="grid gap-6 py-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    {dict.checkoutProtection.fraudDetection.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {dict.checkoutProtection.fraudDetection.description}
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    {dict.checkoutProtection.dataEncryption.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {dict.checkoutProtection.dataEncryption.description}
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    {dict.checkoutProtection.tokenization.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{dict.checkoutProtection.tokenization.description}</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Fingerprint className="h-5 w-5 text-primary" />
                    {dict.checkoutProtection["3dSecure"].title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{dict.checkoutProtection["3dSecure"].description}</p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            alt="Secure Checkout"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="400"
            src="/placeholder.svg?height=400&width=600"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
