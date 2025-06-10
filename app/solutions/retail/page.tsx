import { Button } from "@/components/ui/button"
import { ShoppingBag, BarChart, Users } from "lucide-react"

export default function RetailSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Retail Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete payment solutions for retail businesses. From in-store POS to online integration, we've got you
                covered.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingBag,
                  title: "Omnichannel",
                  description: "Unified payments across all your sales channels",
                },
                {
                  icon: BarChart,
                  title: "Analytics",
                  description: "Detailed insights into your sales and customer behavior",
                },
                {
                  icon: Users,
                  title: "Customer Management",
                  description: "Build lasting relationships with your customers",
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
