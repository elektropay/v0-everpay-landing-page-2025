import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[820px] w-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-24 md:py-32 lg:py-40">
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 pt-20">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8 pt-12 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight lg:text-7xl text-[#0A2F2F] animate-fade-in-up animation-delay-200">
                Accept payments <span className="text-primary">globally</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[500px] md:text-xl animate-fade-in-up animation-delay-400">
                Empower your business with secure, scalable payment solutions. Process transactions in 135+ currencies
                with enterprise-grade security.
              </p>
              <div className="flex items-center gap-4 animate-fade-in-up animation-delay-600">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="flex items-center gap-4 pt-8 animate-fade-in-left animation-delay-800">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-md hover:scale-110 transition-transform animate-fade-in"
                    style={{ animationDelay: `${1000 + i * 100}ms` }}
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
                <div className="font-semibold text-foreground">15 Million+</div>
                <p className="text-sm text-muted-foreground">Active users worldwide</p>
              </div>
            </div>

            {/* Connect Cards */}
            <div className="space-y-4 max-w-md pt-4">
              <div className="bg-card p-4 rounded-xl shadow-lg border border-border animate-slide-in-left animation-delay-1000 hover:shadow-xl hover:scale-102 transition-all">
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
                      <div className="font-medium text-card-foreground">Savannah Nguyen</div>
                      <div className="text-sm text-muted-foreground">Unlock the power of real-time...</div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors hover:rotate-90 transition-transform">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
              <div className="bg-card p-4 rounded-xl shadow-lg border border-border animate-slide-in-left animation-delay-1200 hover:shadow-xl hover:scale-102 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                        alt="Brooklyn Simmons"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-card-foreground">Brooklyn Simmons</div>
                      <div className="text-sm text-muted-foreground">Connect in real-time...</div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors hover:rotate-90 transition-transform">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full animate-fade-in-right animation-delay-400">
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
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-border animate-fade-in-up animation-delay-1400 hover:shadow-xl hover:scale-105 transition-all">
            <h3 className="font-semibold mb-2 text-card-foreground">Digital Banking Platform</h3>
            <p className="text-sm text-muted-foreground">Experience seamless financial management</p>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-lg border border-border animate-fade-in-up animation-delay-1600 hover:shadow-xl hover:scale-105 transition-all">
            <h3 className="font-semibold mb-2 text-card-foreground">Grow your capital</h3>
            <p className="text-sm text-muted-foreground">No boundary at all</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center animate-pulse">
                $
              </div>
              <span className="text-sm font-medium">Trusted by 500K+ people</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-sm text-muted-foreground text-center animate-fade-in animation-delay-1800">
          Trusted by 100,000+ businesses worldwide
        </div>
      </div>
    </section>
  )
}
