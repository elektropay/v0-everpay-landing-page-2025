import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
          <p className="text-gray-500 md:text-xl">
            Join millions of businesses worldwide that trust Everpay for their payment needs.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-full bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Sign up now
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
