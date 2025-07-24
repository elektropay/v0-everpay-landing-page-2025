import Link from "next/link"
import Image from "next/image"
import { CreditCardIcon, SettingsIcon, BarChartIcon } from "lucide-react"

export default function IssuingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Card Issuing</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create, manage, and distribute virtual and physical cards with Everpay Issuing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customizable Card Programs</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Design and launch your own card programs, tailored to your business needs. Issue virtual cards for
                  online spending or physical cards for in-person transactions.
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
              alt="Card Issuing"
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
                <h3 className="text-xl font-bold mb-2">Virtual & Physical Cards</h3>
                <p className="text-gray-500">
                  Issue cards instantly for online use or order physical cards for your team and customers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <SettingsIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Controls</h3>
                <p className="text-gray-500">
                  Set spending limits, block transactions, and manage card activity in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChartIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Detailed Reporting</h3>
                <p className="text-gray-500">
                  Track spending, analyze transactions, and reconcile expenses with comprehensive reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
