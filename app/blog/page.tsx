import { CtaSection } from "@/components/cta-section"
import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"
import Link from "next/link"

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  const blogPosts = [
    {
      title: "The Future of Payments: Trends to Watch in 2024",
      description: "Explore the latest innovations and predictions shaping the payment industry.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "How to Choose the Right Payment Gateway for Your Business",
      description: "A comprehensive guide to selecting a payment gateway that fits your needs.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Maximizing Security: Best Practices for Online Transactions",
      description: "Learn how to protect your business and customers from fraud.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "The Rise of Digital Wallets: What Businesses Need to Know",
      description: "Understand the impact of digital wallets on consumer behavior and payment processing.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Everpay Blog</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up-to-date with the latest news, insights, and trends in the payment industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <Link className="block" href={post.link}>
                    <Image
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      height="200"
                      src={post.image || "/placeholder.svg"}
                      width="300"
                      unoptimized="true" // Corrected unoptimized prop
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-500 text-sm flex-1">{post.description}</p>
                    <Link className="text-primary hover:underline mt-4 inline-block" href={post.link}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </div>
  )
}
