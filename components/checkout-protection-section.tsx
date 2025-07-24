import Image from "next/image"
import { ShieldCheck, Lock, CreditCard } from "lucide-react"

export function CheckoutProtectionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Secure Your Checkout with Advanced Protection
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everpay provides robust security features to protect your transactions and customer data.
              </p>
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">Fraud Detection</h3>
                    <p className="text-gray-500">
                      Leverage machine learning to identify and prevent fraudulent transactions.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">Data Encryption</h3>
                    <p className="text-gray-500">All sensitive data is encrypted at rest and in transit.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold">PCI DSS Compliance</h3>
                    <p className="text-gray-500">
                      Maintain the highest level of security standards for cardholder data.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Image
            alt="Security"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="400"
            src="/placeholder.svg?height=400&width=600"
            width="600"
            unoptimized="true" // Corrected unoptimized prop
          />
        </div>
      </div>
    </section>
  )
}
