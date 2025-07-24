import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
          Join thousands of businesses already using Everpay to simplify their payment processing.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up Now</Button>
          <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-200 bg-transparent">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
