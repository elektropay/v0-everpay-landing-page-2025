import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-[#193638] text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#193638] to-[#0d1f21] opacity-90"></div>
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Create an account and start accepting payments in minutes. Join over thousands of merchants worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1AA478] text-white hover:bg-[#1AA478]/90 rounded-md px-8 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-md px-8 hover:scale-105 transition-transform bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
