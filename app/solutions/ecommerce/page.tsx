import type React from "react"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"

interface EcommerceSolutionsPageProps {
  params: {
    lang: Locale
  }
}

export default async function EcommerceSolutionsPage({ params: { lang } }: EcommerceSolutionsPageProps) {
  const dict = await getDictionary(lang)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {dict.businessTypes.ecommerceTitle}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Seamless online payment solutions to boost your e-commerce sales and customer experience.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Optimized checkout flows for higher conversion rates.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Support for popular e-commerce platforms like Shopify, WooCommerce, and Magento.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Global payment acceptance with multi-currency support.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Advanced fraud prevention to protect your online store.
              </li>
            </ul>
          </div>
          <Image
            alt="E-commerce Solutions"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="400"
            src="/placeholder.png?height=400&width=600"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
