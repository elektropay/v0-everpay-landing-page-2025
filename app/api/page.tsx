import { Button } from "@/components/ui/button"
import { Code, Key, Shield, Zap } from "lucide-react"

export default function APIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">API Reference</h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete API documentation for Everpay. RESTful APIs with comprehensive examples and SDKs for popular
                programming languages.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View API Docs
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code,
                  title: "RESTful APIs",
                  description: "Clean, intuitive REST APIs",
                },
                {
                  icon: Key,
                  title: "Authentication",
                  description: "Secure API key authentication",
                },
                {
                  icon: Shield,
                  title: "Rate Limiting",
                  description: "Built-in rate limiting and security",
                },
                {
                  icon: Zap,
                  title: "Real-time",
                  description: "Webhooks for real-time updates",
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
