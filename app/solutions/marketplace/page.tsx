import { Button } from "@/components/ui/button"
import { Users, DollarSign, Shield } from "lucide-react"

export default function MarketplaceSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Marketplace Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete payment infrastructure for marketplaces. Handle complex payment flows, split payments, and
                manage multiple sellers.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Build Your Marketplace
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Multi-party Payments",
                  description: "Handle complex payment flows between buyers and sellers",
                },
                {
                  icon: DollarSign,
                  title: "Split Payments",
                  description: "Automatically split payments and manage commissions",
                },
                {
                  icon: Shield,
                  title: "Risk Management",
                  description: "Advanced fraud protection for marketplace transactions",
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
