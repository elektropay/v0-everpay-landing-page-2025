import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon, ReceiptTextIcon, BarChartIcon } from "lucide-react"

export default function PosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Point of Sale (POS)</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamline your in-person sales with our intuitive and powerful POS system.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modernize Your Retail Experience</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everpay's POS system is designed to simplify your checkout process, manage inventory, and provide
                  valuable insights into your sales performance.
                </p>
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Request a Demo
                </Button>
              </div>
            </div>
            <Image
              alt="POS System"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxwbyUyMHN5c3RlbXxlbnwwfHx8fDE3MDk4NjU2NzB8MA&ixlib=rb-4.0.3&q=80&w=800"
              width="550"
              unoptimized="true"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ShoppingCartIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
                <p className="text-gray-500">
                  Track stock levels, manage product variations, and receive low-stock alerts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ReceiptTextIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Customizable Receipts</h3>
                <p className="text-gray-500">
                  Personalize receipts with your branding and offer digital or printed options.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChartIcon className="h-12 w-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold mb-2">Sales Reporting</h3>
                <p className="text-gray-500">
                  Gain insights into your sales trends, popular products, and customer behavior.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
