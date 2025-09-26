import { Button } from "@/components/ui/button"
import { Shield, LineChart, Brain, CheckCircle } from "lucide-react"
import Image from "next/image"

const fraudFeatures = [
  {
    title: "AI-Powered Detection",
    description: "Machine learning algorithms that adapt to new fraud patterns in real-time",
    icon: Brain,
    features: ["Behavioral biometrics", "Pattern recognition", "Anomaly detection", "Risk scoring"],
  },
  {
    title: "Real-time Monitoring",
    description: "24/7 transaction monitoring with instant alerts and automated responses",
    icon: LineChart,
    features: [
      "Live transaction screening",
      "Instant notifications",
      "Automated rules engine",
      "Custom alert thresholds",
    ],
  },
  {
    title: "Advanced Authentication",
    description: "Multi-layer authentication methods to verify legitimate users",
    icon: Shield,
    features: ["3D Secure 2.0", "Two-factor authentication", "Device fingerprinting", "IP intelligence"],
  },
]

const stats = [
  { value: "99.9%", label: "Fraud detection rate" },
  { value: "<0.1%", label: "False positive rate" },
  { value: "100ms", label: "Average response time" },
  { value: "24/7", label: "Real-time monitoring" },
]

export default function FraudPreventionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Fraud Prevention & Risk Management</h1>
              <p className="text-xl text-gray-300 mb-8">
                Protect your business with advanced fraud detection and prevention systems powered by machine learning.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                  Start Protection
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white/10"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#4CAF50] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {fraudFeatures.map((feature, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <feature.icon className="h-12 w-12 text-[#4CAF50] mb-6" />
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#4CAF50]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-1550751827-4bd374c3f1f5?auto=format&fit=crop&q=80`}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Scoring Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Intelligent Risk Scoring</h2>
              <p className="text-gray-600">
                Our advanced risk scoring engine analyzes hundreds of data points in real-time to accurately detect and
                prevent fraud.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "User Behavior Analysis",
                  items: ["Device fingerprinting", "Typing patterns", "Navigation behavior", "Purchase history"],
                },
                {
                  title: "Transaction Analysis",
                  items: ["Velocity checks", "Amount patterns", "Geographic location", "Time of transaction"],
                },
                {
                  title: "Network Analysis",
                  items: ["IP reputation", "Proxy detection", "Device networks", "Account linkages"],
                },
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-[#0A2F2F] rounded-2xl text-white p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to protect your business?</h2>
                  <p className="text-gray-300 mb-6">
                    Start protecting your business with our advanced fraud prevention system today.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                      Get Started
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white bg-transparent text-white hover:bg-white/10"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f1f5?auto=format&fit=crop&q=80"
                    alt="Fraud Prevention"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
