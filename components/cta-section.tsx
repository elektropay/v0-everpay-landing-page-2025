import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const benefits = ["No setup fees", "Cancel anytime", "24/7 support", "Enterprise security"]

  return (
    <section className="bg-primary py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary opacity-50"></div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl animate-fade-in-up animation-delay-200">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90 animate-fade-in-up animation-delay-400">
            Join thousands of businesses already using Everpay to process payments securely and efficiently.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-600">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <Check className="h-5 w-5 text-primary-foreground" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-800">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all shadow-lg"
              asChild
            >
              <Link href="/signup">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:scale-105 transition-all"
              asChild
            >
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
