import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up-to-date with the latest news, insights, and trends in the payment industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link className="group grid gap-4" href="#">
                <Image
                  alt="Blog Post Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center group-hover:opacity-90 transition-opacity"
                  height="200"
                  src="/placeholder.svg?height=200&width=350"
                  width="350"
                />
                <div className="grid gap-1">
                  <h2 className="text-xl font-bold group-hover:underline">
                    The Future of Payments: Trends to Watch in 2024
                  </h2>
                  <p className="text-gray-500">
                    Explore the emerging trends shaping the payment landscape and what they mean for your business.
                  </p>
                  <p className="text-sm text-gray-400">May 15, 2024</p>
                </div>
              </Link>
              <Link className="group grid gap-4" href="#">
                <Image
                  alt="Blog Post Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center group-hover:opacity-90 transition-opacity"
                  height="200"
                  src="/placeholder.svg?height=200&width=350"
                  width="350"
                />
                <div className="grid gap-1">
                  <h2 className="text-xl font-bold group-hover:underline">
                    How to Choose the Right Payment Gateway for Your E-commerce Store
                  </h2>
                  <p className="text-gray-500">
                    A comprehensive guide to selecting a payment gateway that fits your business needs.
                  </p>
                  <p className="text-sm text-gray-400">April 28, 2024</p>
                </div>
              </Link>
              <Link className="group grid gap-4" href="#">
                <Image
                  alt="Blog Post Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center group-hover:opacity-90 transition-opacity"
                  height="200"
                  src="/placeholder.svg?height=200&width=350"
                  width="350"
                />
                <div className="grid gap-1">
                  <h2 className="text-xl font-bold group-hover:underline">
                    Understanding PCI DSS Compliance: A Guide for Businesses
                  </h2>
                  <p className="text-gray-500">
                    Learn about the importance of PCI DSS compliance and how to ensure your business is secure.
                  </p>
                  <p className="text-sm text-gray-400">April 10, 2024</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
