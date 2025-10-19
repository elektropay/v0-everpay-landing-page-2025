import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Payment infrastructure for the next-generation
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Millions of businesses of all sizes—from startups to Fortune 500s—use Everpay's software and APIs to accept
            payments, send payouts, and manage their businesses online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-xl min-w-[200px]"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white rounded-full min-w-[200px]"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1aa478]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1aa478]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#1aa478]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#1aa478]/10 rounded-full blur-3xl" />
    </section>
  )
}
