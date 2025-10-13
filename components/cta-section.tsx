import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-[#081B1E] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#193638] to-[#081B1E] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] animate-fade-in-up">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-white/80 animate-fade-in-up animation-delay-200">
            Create an account instantly to get started. No setup or hidden fees, just comprehensive support to design
            the perfect payment experience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform duration-200"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-transform duration-200 bg-transparent"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
