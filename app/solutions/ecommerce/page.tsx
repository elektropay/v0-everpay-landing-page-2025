import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, CreditCard } from "lucide-react"

export default function EcommerceSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">E-commerce Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Powerful payment solutions for online stores. Increase conversions and reduce cart abandonment with our
                optimized checkout.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Selling
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingCart,
                  title: "Optimized Checkout",
                  description: "Reduce cart abandonment with our streamlined checkout",
                },
                {
                  icon: Globe,
                  title: "Global Payments",
                  description: "Accept payments from customers worldwide",
                },
                {
                  icon: CreditCard,
                  title: "Multiple Methods",
                  description: "Support for all major payment methods and wallets",
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
