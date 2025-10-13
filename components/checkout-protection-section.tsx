import { Shield, Lock, FileCheck } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function CheckoutProtectionSection() {
  const protectionFeatures = [
    {
      icon: Shield,
      title: "Safeguarded Insights",
      description: "Get detailed analytics and insights to optimize your payment processes and increase conversions.",
    },
    {
      icon: Lock,
      title: "Advanced Defenses",
      description: "Protect your business with advanced security measures and fraud prevention tools.",
    },
    {
      icon: FileCheck,
      title: "Integrated Authentications",
      description: "Streamline authentication processes with integrated solutions for secure payments.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">ABSOLUTE PROTECTION</span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-display)]">
              Trusted Checkout Protection
            </h2>

            <p className="text-muted-foreground">
              Protect your business from payment fraud with our advanced checkout protection system. We provide
              comprehensive security measures to ensure safe transactions.
            </p>

            <div className="space-y-4 pt-4">
              {protectionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-fade-in-left"
                  style={{ animationDelay: `${(index + 2) * 200}ms` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-fade-in-right animation-delay-400">
            <Card className="bg-card p-8 rounded-xl shadow-lg border-2 border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-primary/20 rounded-full mb-2">
                      <div className="h-2 bg-primary rounded-full w-4/5"></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full">
                      <div className="h-2 bg-primary rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <Lock className="h-6 w-6 text-primary mb-2" />
                    <div className="h-2 bg-primary/20 rounded-full mb-2">
                      <div className="h-2 bg-primary rounded-full w-full"></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full w-2/3"></div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <FileCheck className="h-6 w-6 text-primary mb-2" />
                    <div className="h-2 bg-primary/20 rounded-full mb-2">
                      <div className="h-2 bg-primary rounded-full w-4/5"></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full w-3/5"></div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-foreground">Security Level</span>
                    <span className="text-sm font-bold text-primary">99.9%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full">
                    <div className="h-3 bg-gradient-to-r from-primary to-secondary rounded-full w-[99%]"></div>
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
