import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[820px] w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] container py-24 md:py-32 lg:py-40">
      <div className="container relative mx-auto px-4 mx-auto max-w-4xl text-center">
        <div className="grid lg:grid-cols-2 gap-8 pt-20">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8 pt-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight lg:text-7xl text-[#0A2F2F]">
                Accept payments <span className="text-primary">globally</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-[500px] md:text-xl">
                Empower your business with secure, scalable payment solutions. Process transactions in 135+ currencies
                with enterprise-grade security.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`User ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-[#0A2F2F]">15 Million+</div>
                <p className="text-sm text-gray-600">Active users worldwide</p>
              </div>
            </div>

            {/* Connect Cards */}
            <div className="space-y-4 max-w-md pt-4">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                        alt="Savannah Nguyen"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2F2F]">Savannah Nguyen</div>
                      <div className="text-sm text-gray-500">Unlock the power of real-time...</div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50]/20 transition-colors">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-4dee9223994e"
                        alt="Brooklyn Simmons"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-[#0A2F2F]">Brooklyn Simmons</div>
                      <div className="text-sm text-gray-500">Connect in real-time...</div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] hover:bg-[#4CAF50]/20 transition-colors">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1563986768494-4dee9223994e"
              alt="Banking App Interface"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-semibold mb-2 text-[#0A2F2F]">Digital Banking Platform</h3>
            <p className="text-sm text-gray-600">Experience seamless financial management</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="font-semibold mb-2 text-[#0A2F2F]">Grow your capital</h3>
            <p className="text-sm text-gray-600">No boundary at all</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#4CAF50] text-white flex items-center justify-center">$</div>
              <span className="text-sm font-medium">Trusted by 500K+ people</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">Trusted by 100,000+ businesses worldwide</div>
      </div>
    </section>
  )
}
