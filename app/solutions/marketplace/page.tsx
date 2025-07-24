import Link from "next/link"
import Image from "next/image"
import { UsersIcon, DollarSignIcon, SettingsIcon } from "lucide-react"

export default function MarketplaceSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Marketplace Solutions</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simplify complex payment flows for your multi-vendor platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Efficient Payouts & Management</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everpay provides robust tools to manage payments, split funds, and automate payouts to multiple
                  vendors on your marketplace, reducing operational overhead.
                </p>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              alt="Marketplace Solutions"
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
                <UsersIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Vendor Management</h3>
                <p className="text-gray-500">
                  Onboard and manage multiple vendors with ease, ensuring compliance and smooth operations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSignIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Automated Payouts</h3>
                <p className="text-gray-500">
                  Automate fund distribution to your vendors, reducing manual effort and errors.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SettingsIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Customizable Workflows</h3>
                <p className="text-gray-500">
                  Tailor payment flows and commission structures to fit your marketplace's unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
