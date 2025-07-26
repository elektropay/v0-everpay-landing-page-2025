import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredPosts = [
  {
    title: "The Future of Digital Payments in Asia",
    excerpt: "Exploring the latest trends and innovations shaping the payment landscape in Asia...",
    category: "Industry Insights",
    date: "Oct 15, 2023",
  },
  {
    title: "Implementing Strong Customer Authentication",
    excerpt: "A comprehensive guide to SCA implementation for European merchants...",
    category: "Technical",
    date: "Oct 12, 2023",
  },
  {
    title: "Maximizing Revenue with Smart Payment Routing",
    excerpt: "Learn how intelligent payment routing can improve authorization rates...",
    category: "Best Practices",
    date: "Oct 10, 2023",
  },
]

const categories = ["All", "Industry Insights", "Technical", "Best Practices", "Company News", "Case Studies"]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Everpay Blog</h1>
              <p className="text-xl text-gray-300">
                Insights, updates, and expert perspectives on payments and fintech.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={index} href="#" className="group">
                  <article className="space-y-4">
                    <div className="relative h-60 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Blog post image</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-[#4CAF50]">{post.title}</h3>
                      <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Latest Posts */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-[#4CAF50] hover:bg-[#45a049]" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid gap-8">
              {[1, 2, 3, 4, 5].map((post) => (
                <article key={post} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Industry Insights</span>
                        <span>•</span>
                        <span>Oct {post}, 2023</span>
                      </div>
                      <h3 className="text-xl font-semibold">
                        <Link href="#" className="hover:text-[#4CAF50]">
                          Understanding the Impact of Real-time Payments
                        </Link>
                      </h3>
                      <p className="text-gray-600">
                        An in-depth look at how real-time payments are transforming the financial landscape and what it
                        means for businesses...
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">Author</span>
                        </div>
                        <div>
                          <div className="font-medium">John Smith</div>
                          <div className="text-sm text-gray-600">Payment Expert</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Blog post image</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates in the payments industry.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <Button className="bg-[#4CAF50] hover:bg-[#45a049]">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
