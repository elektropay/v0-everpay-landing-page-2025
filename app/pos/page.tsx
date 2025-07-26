import { Button } from "@/components/ui/button"
import { CheckCircle, CreditCard, Smartphone, Wifi } from "lucide-react"

export default function POSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">POS Devices</h1>
              <p className="text-xl text-gray-300 mb-8">
                Modern point-of-sale solutions for in-person payments. Accept all payment types with our secure,
                reliable POS devices.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Shop Devices
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Request Demo
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
                  title: "All Payment Types",
                  description: "Accept cards, contactless, and mobile payments",
                },
                {
                  icon: Wifi,
                  title: "Always Connected",
                  description: "WiFi, Ethernet, and cellular connectivity options",
                },
                {
                  icon: Smartphone,
                  title: "Smart Features",
                  description: "Built-in receipt printing and inventory management",
                },
                {
                  icon: CheckCircle,
                  title: "Secure & Reliable",
                  description: "End-to-end encryption with tamper-resistant hardware",
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
