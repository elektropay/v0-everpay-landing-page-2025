import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Modern Payment Solutions for Your Business
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Streamline your payment processing with Everpay's secure, fast, and reliable platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="400"
            src="/placeholder.svg?height=400&width=600"
            width="600"
            unoptimized="true" // Corrected unoptimized prop
          />
        </div>
      </div>
    </section>
  )
}
