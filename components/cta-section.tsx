import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
        <p className="max-w-[700px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Join thousands of businesses already using Everpay to power their payments.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
          <Button
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Start now
          </Button>
          <Button
            variant="outline"
            className="inline-flex h-10 items-center justify-center rounded-full border border-gray-700 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
