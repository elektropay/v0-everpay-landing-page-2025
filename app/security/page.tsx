import Image from "next/image"
import { ShieldCheckIcon, LockIcon, ServerIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Security at Everpay</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Protecting your data and transactions with industry-leading security measures.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Security Framework</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everpay employs a multi-layered security approach, combining advanced encryption, fraud detection, and
                  strict compliance standards to ensure the highest level of protection for your business and your
                  customers' data.
                </p>
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <Image
              alt="Security Framework"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://images.unsplash.com/photo-1563986768494-4dee9223994e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGZyYW1ld29ya3xlbnwwfHx8fDE3MDk4NjU2NzB8MA&ixlib=rb-4.0.3&q=80&w=800"
              width="550"
              unoptimized="true"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ShieldCheckIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">PCI DSS Compliance</h3>
                <p className="text-gray-500">
                  We adhere to the highest Payment Card Industry Data Security Standard to protect cardholder data.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LockIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Data Encryption</h3>
                <p className="text-gray-500">
                  All sensitive data is encrypted at rest and in transit using strong cryptographic protocols.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ServerIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Fraud Detection</h3>
                <p className="text-gray-500">
                  Our machine learning algorithms actively monitor and detect suspicious activities to prevent fraud.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
