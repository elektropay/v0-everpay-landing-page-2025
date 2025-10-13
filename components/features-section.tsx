import { Card } from "@/components/ui/card"
import { Globe, Shield, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      number: "01",
      icon: Globe,
      title: "Global Payment Optimization",
      description:
        "Accept payments from customers worldwide with automatic currency conversion and localized payment methods.",
      delay: "100",
    },
    {
      number: "02",
      icon: Shield,
      title: "Enhanced Verification Payments",
      description:
        "Advanced fraud detection and prevention tools to keep your transactions secure and your customers protected.",
      delay: "200",
    },
    {
      number: "03",
      icon: Zap,
      title: "Instant Payment System",
      description:
        "Process payments instantly with our high-performance infrastructure built for speed and reliability.",
      delay: "300",
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: "#fbf9f9" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 animate-fade-in"
            style={{ backgroundColor: "#e3ffcc", color: "#193638" }}
          >
            RAPIDLY PENETRATE NEW MARKETS
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-up animate-delay-100"
            style={{ fontFamily: "var(--font-display)", color: "#193638" }}
          >
            Rapidly Penetrate New Markets
          </h2>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in-up animate-delay-200" style={{ color: "#6b7280" }}>
            Expand your business globally with our comprehensive payment solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-${feature.delay}`}
              style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#193638" }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: "#ffffff" }} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold mb-2" style={{ color: "#1aa478" }}>
                    {feature.number}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "#193638" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
