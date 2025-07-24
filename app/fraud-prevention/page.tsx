import Link from "next/link"
import Image from "next/image"
import { ShieldCheckIcon, LockIcon, BarChartIcon } from "lucide-react"

export default function FraudPreventionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fraud Prevention</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Protect your business from fraudulent transactions with Everpay's advanced security tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Real-time Fraud Detection</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our machine learning models analyze every transaction in real-time to identify and block suspicious
                  activity, minimizing your risk of chargebacks and financial losses.
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
              alt="Fraud Detection"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmF1ZCUyMGRldGVjdGlvbnxlbnwwfHx8fDE3MDk4NjU2NzB8MA&ixlib=rb-4.0.3&q=80&w=800"
              width="550"
              unoptimized
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ShieldCheckIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Chargeback Protection</h3>
                <p className="text-gray-500">
                  Reduce chargebacks with our intelligent dispute management tools and evidence submission.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LockIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">PCI DSS Compliance</h3>
                <p className="text-gray-500">
                  Ensure your payment processing meets the highest industry security standards.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChartIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fraud Analytics</h3>
                <p className="text-gray-500">
                  Gain insights into fraud patterns and optimize your prevention strategies with detailed reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
