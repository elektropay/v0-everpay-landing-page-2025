import Link from "next/link"

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
                  Find guides, tutorials, and reference materials to help you integrate and use Everpay.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Documentation Topics</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link className="hover:text-gray-900" href="#">
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-900" href="#">
                      Integration Guides
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-900" href="#">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-900" href="#">
                      Webhooks
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-900" href="#">
                      Security & Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Popular Guides</h2>
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Integrating Everpay with Shopify</h3>
                  <p className="text-gray-500 mb-4">
                    A step-by-step guide to setting up Everpay as your payment gateway on Shopify.
                  </p>
                  <Link className="text-blue-600 hover:underline" href="#">
                    Read Guide
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Implementing Recurring Billing</h3>
                  <p className="text-gray-500 mb-4">
                    Learn how to set up and manage subscriptions and recurring payments with Everpay Billing.
                  </p>
                  <Link className="text-blue-600 hover:underline" href="#">
                    Read Guide
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Understanding Fraud Prevention Tools</h3>
                  <p className="text-gray-500 mb-4">
                    An overview of Everpay's fraud detection and prevention features to protect your business.
                  </p>
                  <Link className="text-blue-600 hover:underline" href="#">
                    Read Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
