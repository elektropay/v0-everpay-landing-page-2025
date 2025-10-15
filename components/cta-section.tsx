import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1aa478] to-[#158f64]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
          Ready to get started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          Join thousands of businesses already using Everpay to power their payment infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-xl min-w-[200px]">
              Get Started
            </Button>
          </a>
          <a href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1aa478] rounded-full min-w-[200px]"
            >
              Contact Sales
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
