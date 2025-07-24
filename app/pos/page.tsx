import Link from "next/link"
import Image from "next/image"
import { ShoppingBagIcon, ReceiptIcon, BarcodeIcon } from "lucide-react"

export default function PosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Point-of-Sale (POS) Systems</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamline your in-person sales with Everpay's intuitive and powerful POS solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Accept Payments Anywhere</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our POS systems allow you to accept credit cards, debit cards, and mobile payments securely, whether
                  you're in a retail store, at a pop-up event, or on the go.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Explore POS Devices
                </Link>
              </div>
            </div>
            <Image
              alt="POS System"
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
                <ShoppingBagIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
                <p className="text-gray-500">
                  Track your products, manage stock levels, and streamline your sales process.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ReceiptIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Reporting & Analytics</h3>
                <p className="text-gray-500">
                  Gain insights into your sales performance with detailed reports and analytics.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarcodeIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer Management</h3>
                <p className="text-gray-500">
                  Build customer profiles, track purchase history, and offer loyalty programs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
