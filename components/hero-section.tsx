import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-[#193638] text-white overflow-hidden">
      <div className="container px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">EFFICIENT & SECURE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animation-delay-200">
              Global Shift With Digital Payments
            </h1>
            <p className="text-lg text-white/80 max-w-xl animate-fade-in-up animation-delay-400">
              Efficiently facilitating transactions, our platform seamlessly connects consumers and businesses for
              digital commerce.
            </p>
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-600">
              <Button size="lg" className="bg-[#1AA478] text-white hover:bg-[#1AA478]/90 rounded-md px-8" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white border border-white/20 hover:bg-white/10 rounded-md px-8"
                asChild
              >
                <Link href="/demo" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative animate-fade-in-right animation-delay-400">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 max-w-md ml-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Total Balance</h3>
                  <span className="text-xs text-gray-500">USD</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">$12,750.50</div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-1">Income</div>
                    <div className="text-lg font-bold text-gray-900">$8,250</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-1">Expenses</div>
                    <div className="text-lg font-bold text-gray-900">$3,420</div>
                  </div>
                </div>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">SC</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Shopping Cart</div>
                        <div className="text-xs text-gray-500">Today, 12:30 PM</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">-$125.50</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative gradient blur */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#1AA478] rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
