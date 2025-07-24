import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, CreditCardIcon, ShieldCheckIcon } from "lucide-react"

export default function GatewayPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Payment Gateway</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A secure and reliable payment gateway for seamless online transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Global Payment Acceptance</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Accept payments from customers worldwide with support for over 135 currencies and all major payment
                  methods, including credit cards, digital wallets, and local payment options.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <Image
              alt="Global Payments"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg?height=310&width=550"
              width="550"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <CreditCardIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Multiple Payment Options</h3>
                <p className="text-gray-500">
                  Support for credit/debit cards, digital wallets (Apple Pay, Google Pay), and local payment methods.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheckIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
                <p className="text-gray-500">
                  PCI DSS compliant and equipped with fraud prevention tools to protect your transactions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <GlobeIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                <p className="text-gray-500">
                  Easy-to-use APIs and SDKs for quick integration with your existing systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
