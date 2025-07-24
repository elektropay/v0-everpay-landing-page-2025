import Image from "next/image"
import { Building, ShoppingCart, Store } from "lucide-react"

export function BusinessTypesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solutions for Every Business Type</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Whether you're an e-commerce store, a retail business, or a marketplace, Everpay has tailored solutions to
              meet your payment needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid gap-1">
            <Building className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-bold">E-commerce</h3>
            <p className="text-sm text-gray-500">Seamless online payment processing for your e-commerce store.</p>
          </div>
          <div className="grid gap-1">
            <ShoppingCart className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-bold">Retail</h3>
            <p className="text-sm text-gray-500">Modern POS solutions and in-person payment acceptance.</p>
          </div>
          <div className="grid gap-1">
            <Store className="h-8 w-8 text-primary mb-2" />
            <h3 className="text-lg font-bold">Marketplaces</h3>
            <p className="text-sm text-gray-500">Manage complex payment flows for multi-vendor platforms.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Business Types"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="400"
            src="/placeholder.svg?height=400&width=800"
            width="800"
            unoptimized="true" // Corrected unoptimized prop
          />
        </div>
      </div>
    </section>
  )
}
