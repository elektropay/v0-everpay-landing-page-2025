import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-[#4CAF50] py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading">Ready to get started?</h2>
          <p className="text-xl text-white/90 font-sans">
            Join millions of businesses that trust Everpay to handle their payments. Get started today and see why we're
            the preferred choice for online payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#4CAF50] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium font-sans"
            >
              Create account
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-medium font-sans bg-transparent"
            >
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Export both named and default for compatibility
export { CtaSection as CTASection }
export default CtaSection
