import { Card } from "@/components/ui/card"
import { Shield, Lock, CheckCircle } from "lucide-react"

export function CheckoutProtectionSection() {
  const features = [
    {
      icon: Shield,
      title: "Sophisticated Fraud Detection",
      description:
        "AI-powered fraud detection monitors every transaction in real-time to identify and prevent suspicious activity.",
    },
    {
      icon: Lock,
      title: "Advanced Checkout Security",
      description:
        "Bank-level encryption and PCI DSS compliance ensure your customers' payment data is always protected.",
    },
    {
      icon: CheckCircle,
      title: "Increased Authentication",
      description:
        "Multi-factor authentication and 3D Secure support reduce chargebacks and increase payment success rates.",
    },
  ]

  return (
    <section className="animate-fade-in py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 animate-fade-in"
                style={{ backgroundColor: "#e3ffcc", color: "#193638" }}
              >
                ADVANCED PROTECTION
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-up animate-delay-100"
                style={{ fontFamily: "var(--font-display)", color: "#193638" }}
              >
                Trusted Checkout Protection
              </h2>
              <p className="text-lg animate-fade-in-up animate-delay-200" style={{ color: "#6b7280" }}>
                Keep your business and customers safe with industry-leading security features and fraud prevention
                tools.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 animate-fade-in-up animate-delay-${300 + index * 100}`}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#193638" }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: "#ffffff" }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "var(--font-display)", color: "#193638" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#6b7280" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right animate-delay-200">
            <Card className="p-8 shadow-xl" style={{ backgroundColor: "#fbf9f9" }}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#1aa478" }}
                  >
                    <Shield className="w-6 h-6" style={{ color: "#ffffff" }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold" style={{ color: "#193638" }}>
                      Security Score
                    </div>
                    <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#1aa478" }}>
                      99.9%
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <span className="text-sm" style={{ color: "#193638" }}>
                      SSL Encryption
                    </span>
                    <CheckCircle className="w-5 h-5" style={{ color: "#1aa478" }} />
                  </div>
                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <span className="text-sm" style={{ color: "#193638" }}>
                      PCI DSS Level 1
                    </span>
                    <CheckCircle className="w-5 h-5" style={{ color: "#1aa478" }} />
                  </div>
                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <span className="text-sm" style={{ color: "#193638" }}>
                      3D Secure 2.0
                    </span>
                    <CheckCircle className="w-5 h-5" style={{ color: "#1aa478" }} />
                  </div>
                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <span className="text-sm" style={{ color: "#193638" }}>
                      Real-time Monitoring
                    </span>
                    <CheckCircle className="w-5 h-5" style={{ color: "#1aa478" }} />
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
