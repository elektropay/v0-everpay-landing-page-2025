import Image from "next/image"
import { Button } from "@/components/ui/button"

export function BusinessTypesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Solutions for Every Business</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored for your success</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you're a budding startup, a growing enterprise, or a dynamic marketplace, Everpay has the
              solutions to power your growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <Image
              alt="Startup"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="200"
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzZXR1cCUyMGJ1c2luZXNzfGVufDB8fHx8MTcwOTg2NTY3MHww&ixlib=rb-4.0.3&q=80&w=400"
              width="350"
              unoptimized="true"
            />
            <h3 className="text-xl font-bold">Startups</h3>
            <p className="text-gray-500">Get up and running quickly with flexible APIs and transparent pricing.</p>
            <Button
              className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Learn More
            </Button>
          </div>
          <div className="grid gap-1">
            <Image
              alt="Enterprise"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="200"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwYnVzaW5lc3N8ZW58MHx8fHwxNzA5ODY1NjcwfDA&ixlib=rb-4.0.3&q=80&w=400"
              width="350"
              unoptimized="true"
            />
            <h3 className="text-xl font-bold">Enterprise</h3>
            <p className="text-gray-500">Scale with confidence with custom solutions and dedicated support.</p>
            <Button
              className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Learn More
            </Button>
          </div>
          <div className="grid gap-1">
            <Image
              alt="Marketplace"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="200"
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMGJ1c2luZXNzfGVufDB8fHx8MTcwOTg2NTY3MHww&ixlib=rb-4.0.3&q=80&w=400"
              width="350"
              unoptimized="true"
            />
            <h3 className="text-xl font-bold">Marketplaces</h3>
            <p className="text-gray-500">Manage complex payment flows and payouts for your platform.</p>
            <Button
              className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
