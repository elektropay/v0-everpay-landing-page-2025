import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#193638" }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2
            className="text-3xl lg:text-5xl font-bold animate-fade-in-up"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-lg animate-fade-in-up animate-delay-100" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join thousands of businesses that trust Everpay for their payment processing needs. Start accepting payments
            in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <Button
              size="lg"
              className="text-base font-medium hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: "#1aa478", color: "#ffffff" }}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-medium hover:scale-105 transition-transform duration-200 bg-transparent"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
