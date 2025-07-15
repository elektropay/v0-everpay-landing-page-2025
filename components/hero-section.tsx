import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[820px] w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 pt-20">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8 pt-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl text-[#0A2F2F]">
                The payment infrastructure for the internet
              </h1>
              <p className="text-lg text-gray-600 max-w-[500px]">
                Millions of businesses of all sizes—from startups to large enterprises—use Everpay's software and APIs
                to accept payments, send payouts, and manage their businesses online.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049] text-white shadow-lg">
                  Start now
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 bg-transparent">
                  Contact sales
                </Button>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-[#0A2F2F]">$1T+</div>
                <p className="text-sm text-gray-600">Payment volume</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0A2F2F]">50M+</div>
                <p className="text-sm text-gray-600">Businesses served</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0A2F2F]">200+</div>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Payment Dashboard Interface"
              fill
              className="object-contain object-center"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 mb-1">SOC 2 Type II</div>
            <p className="text-xs text-gray-600">Compliant</p>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 mb-1">PCI DSS Level 1</div>
            <p className="text-xs text-gray-600">Certified</p>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 mb-1">99.99%</div>
            <p className="text-xs text-gray-600">Uptime SLA</p>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 mb-1">24/7</div>
            <p className="text-xs text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
