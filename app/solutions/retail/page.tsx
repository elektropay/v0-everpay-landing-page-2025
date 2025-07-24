import Link from "next/link"
import Image from "next/image"
import { StoreIcon, CreditCardIcon, BarChartIcon } from "lucide-react"

export default function RetailSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Retail Solutions</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Modernize your in-store payments and streamline operations for your retail business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Efficient In-Store Payments</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everpay offers robust Point-of-Sale (POS) systems and payment terminals that provide a fast, secure,
                  and seamless checkout experience for your customers in physical retail environments.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Explore POS
                </Link>
              </div>
            </div>
            <Image
              alt="Retail Solutions"
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
                <StoreIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Integrated POS</h3>
                <p className="text-gray-500">
                  Manage sales, inventory, and customer data from a single, intuitive system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CreditCardIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Payment Options</h3>
                <p className="text-gray-500">
                  Accept all major credit cards, debit cards, and mobile payments in-store.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChartIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Sales Analytics</h3>
                <p className="text-gray-500">
                  Gain insights into your sales performance and customer behavior with detailed reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
