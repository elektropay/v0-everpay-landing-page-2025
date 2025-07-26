import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">The Future of Payments is Here</h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Accept payments globally with our secure, fast, and reliable payment processing platform. Built for businesses
          of all sizes.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="h-11 px-8">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-11 px-8 bg-transparent">
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
