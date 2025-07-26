import { Button } from "@/components/ui/button"
import { CheckCircle, CreditCard, Shield, Users } from "lucide-react"

export default function IssuingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Card Issuing</h1>
              <p className="text-xl text-gray-300 mb-8">
                Issue virtual and physical cards for your business. Create custom card programs with full control over
                spending and limits.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Start Issuing
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
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
                  icon: CreditCard,
                  title: "Virtual & Physical",
                  description: "Issue both virtual and physical cards instantly",
                },
                {
                  icon: Shield,
                  title: "Advanced Controls",
                  description: "Set spending limits, merchant restrictions, and more",
                },
                {
                  icon: Users,
                  title: "Team Management",
                  description: "Manage cards for employees and departments",
                },
                {
                  icon: CheckCircle,
                  title: "Real-time Tracking",
                  description: "Monitor all transactions in real-time",
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
