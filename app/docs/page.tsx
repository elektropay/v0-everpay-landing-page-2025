import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Documentation</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find guides, tutorials, and API references to help you integrate Everpay.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                <p className="text-gray-500 mb-6">
                  New to Everpay? Start here to set up your account and make your first transaction.
                </p>
                <ul className="space-y-4 mb-8">
                  <li>
                    <h3 className="text-xl font-bold mb-2">
                      <Link className="hover:underline" href="#">
                        Quickstart Guide
                      </Link>
                    </h3>
                    <p className="text-gray-500">
                      A step-by-step guide to get your Everpay integration up and running.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold mb-2">
                      <Link className="hover:underline" href="#">
                        API Keys and Authentication
                      </Link>
                    </h3>
                    <p className="text-gray-500">Learn how to generate and manage your API keys for secure access.</p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold mb-2">
                      <Link className="hover:underline" href="#">
                        Making Your First Payment
                      </Link>
                    </h3>
                    <p className="text-gray-500">A tutorial on how to process your first payment using our API.</p>
                  </li>
                </ul>
                <h2 className="text-2xl font-bold mb-4">Advanced Topics</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="text-xl font-bold mb-2">
                      <Link className="hover:underline" href="#">
                        Webhooks and Events
                      </Link>
                    </h3>
                    <p className="text-gray-500">
                      Understand how to use webhooks to receive real-time updates on your transactions.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold mb-2">
                      <Link className="hover:underline" href="#">
                        Error Handling and Best Practices
                      </Link>
                    </h3>
                    <p className="text-gray-500">
                      Learn how to handle API errors and follow best practices for robust integrations.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Popular Guides</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Integrating with Shopify
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Building a Subscription Service
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Fraud Prevention Techniques
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        PCI DSS Compliance
                      </Link>
                    </li>
                  </ul>
                  <Button className="mt-6 rounded-full bg-transparent" variant="outline">
                    View All Guides
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
