import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CreditCard, DollarSign } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full animate-fade-in-up animation-delay-100">
                AFFORDABLE PLATFORM
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-display)] animate-fade-in-up animation-delay-200">
              Global Shift With Digital Payments
            </h1>

            <p className="text-lg text-white/80 max-w-xl animate-fade-in-up animation-delay-300">
              Get paid by customers worldwide with Everpay payments and complete checkout protection with a single
              integration.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
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
                See all products
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-fade-in-right animation-delay-600">
            <Card className="bg-white p-6 rounded-xl shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="font-semibold text-foreground">Payment details</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-primary animate-pulse" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">Total Balance</p>
                        <p className="text-2xl font-bold text-foreground">$60k</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                      <p className="text-lg font-bold text-foreground">$2,420</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Transactions</p>
                      <p className="text-lg font-bold text-foreground">234</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="text-sm font-medium text-foreground">Payment methods</p>
                    <div className="flex gap-2">
                      <div className="flex-1 p-3 border-2 border-primary rounded-lg flex items-center justify-center gap-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Card</span>
                      </div>
                      <div className="flex-1 p-3 border border-border rounded-lg flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Bank</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
