import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get started?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that trust Everpay for their payment processing needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Start for free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
          >
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  )
}

// Export as default as well for compatibility
export default CtaSection

// Alias so imports expecting `CTASection` still resolve
export { CtaSection as CTASection }
