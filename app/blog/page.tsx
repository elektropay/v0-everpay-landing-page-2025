import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/lib/i18n/navigation"

interface BlogPageProps {
  params: {
    lang: Locale
  }
}

export default async function BlogPage({ params: { lang } }: BlogPageProps) {
  const dict = await getDictionary(lang)

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Payments: Trends to Watch in 2024",
      description:
        "Explore the latest trends shaping the digital payment landscape and what to expect in the coming year.",
      image: "/placeholder.png?height=200&width=300",
      date: "October 26, 2023",
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Fraud Prevention in E-commerce",
      description:
        "Discover how artificial intelligence is being used to combat fraud and enhance security for online businesses.",
      image: "/placeholder.png?height=200&width=300",
      date: "September 15, 2023",
    },
    {
      id: 3,
      title: "Simplifying Cross-Border Payments for Global Businesses",
      description: "Learn about the challenges and solutions for managing international transactions efficiently.",
      image: "/placeholder.png?height=200&width=300",
      date: "August 1, 2023",
    },
    {
      id: 4,
      title: "The Rise of Mobile Wallets: What Businesses Need to Know",
      description:
        "Understand the growing popularity of mobile wallets and how to integrate them into your payment strategy.",
      image: "/placeholder.png?height=200&width=300",
      date: "July 10, 2023",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.header.blog}</h1>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Stay up-to-date with the latest insights, trends, and news from the world of payments.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <Image
                alt={post.title}
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover"
                height="200"
                src={post.image || "/placeholder.png"}
                width="300"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                <Link href={`/${lang}/blog/${post.id}`} className="mt-4 inline-flex text-primary hover:underline">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
