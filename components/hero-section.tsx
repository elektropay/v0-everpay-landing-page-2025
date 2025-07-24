import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The payment infrastructure for the internet
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Millions of businesses of all sizes—from startups to large enterprises—use Everpay’s software and APIs
                to accept payments, send payouts, and manage their businesses online.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Start now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-full border border-gray-700 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Contact sales
              </Link>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MHx8fHwxNzA5ODY1NjcwfDA&ixlib=rb-4.0.3&q=80&w=800"
            width="550"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
