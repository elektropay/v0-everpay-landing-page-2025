import { Button } from "@/components/ui/button"
import { Building, TrendingUp, Shield } from "lucide-react"

export default function BusinessSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">SMB & Enterprise Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Scalable payment solutions designed for small businesses and large enterprises. Grow your business with
                our comprehensive payment platform.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building,
                  title: "Enterprise Ready",
                  description: "Built for scale with enterprise-grade security and reliability",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Focused",
                  description: "Tools and insights to help your business grow",
                },
                {
                  icon: Shield,
                  title: "Secure & Compliant",
                  description: "Meet all regulatory requirements with our compliant platform",
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
