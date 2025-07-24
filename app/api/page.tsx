import Link from "next/link"

export default function ApiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">API Reference</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive API documentation to integrate Everpay into your applications.
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
                  Our API is designed to be simple and intuitive, allowing you to quickly integrate payment processing
                  into your platform.
                </p>
                <h3 className="text-xl font-bold mb-2">Authentication</h3>
                <p className="text-gray-500 mb-6">
                  All API requests must be authenticated using your API keys. You can find your keys in your Everpay
                  dashboard.
                </p>
                <h3 className="text-xl font-bold mb-2">Endpoints</h3>
                <p className="text-gray-500 mb-6">
                  Our API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded
                  request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication,
                  and verbs.
                </p>
                <h3 className="text-xl font-bold mb-2">Error Handling</h3>
                <p className="text-gray-500 mb-6">
                  Everpay uses standard HTTP status codes to indicate the success or failure of an API request. Errors
                  are returned in JSON format.
                </p>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">API Resources</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Payments API
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Customers API
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Refunds API
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-900" href="#">
                        Webhooks
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
