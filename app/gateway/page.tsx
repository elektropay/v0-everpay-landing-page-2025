import { Button } from "@/components/ui/button"
import { CheckCircle, Globe, Shield, Zap } from "lucide-react"

export default function GatewayPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Payment Gateway</h1>
              <p className="text-xl text-gray-300 mb-8">
                Secure, reliable payment processing for your online business. Accept payments from customers worldwide
                with our robust payment gateway.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Secure Processing",
                  description: "PCI DSS Level 1 compliant with advanced fraud protection",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Accept payments in 135+ currencies worldwide",
                },
                {
                  icon: Zap,
                  title: "Fast Integration",
                  description: "Get up and running in minutes with our APIs",
                },
                {
                  icon: CheckCircle,
                  title: "High Uptime",
                  description: "99.99% uptime with redundant infrastructure",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
