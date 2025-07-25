import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Props = {
  params: { lang: Locale }
}

export default async function BlogPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Payments",
      summary: "Explore the latest trends and innovations shaping the digital payment landscape.",
      image: "/placeholder.png",
      date: "July 15, 2024",
    },
    {
      id: 2,
      title: "Securing Your E-commerce Business",
      summary: "Learn essential strategies to protect your online store from fraud and cyber threats.",
      image: "/placeholder.png",
      date: "July 10, 2024",
    },
    {
      id: 3,
      title: "Optimizing Checkout Flows for Better Conversions",
      summary: "Discover tips and tricks to streamline your checkout process and boost sales.",
      image: "/placeholder.png",
      date: "July 5, 2024",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.BlogPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.BlogPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <h2 className="text-2xl font-bold mb-6">{messages.BlogPage.latestPosts}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  height="300"
                  src={post.image || "/placeholder.png"}
                  style={{
                    aspectRatio: "500/300",
                    objectFit: "cover",
                  }}
                  width="500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
                  <Link href={`/${lang}/blog/${post.id}`} passHref>
                    <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                      {messages.BlogPage.readMore}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
