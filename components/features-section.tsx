import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, CreditCard, Globe, Shield } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Payments",
    description: "A complete payments platform engineered for growth",
    icon: <CreditCard className="h-6 w-6 text-[#4CAF50]" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
  },
  {
    title: "Connect",
    description: "Everything platforms need to get sellers paid",
    icon: <Globe className="h-6 w-6 text-[#4CAF50]" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    title: "Billing",
    description: "Build and scale your recurring business model",
    icon: <Shield className="h-6 w-6 text-[#4CAF50]" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Designed for developers, loved by businesses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build your payments experience with developer-friendly APIs and tools. Scale confidently with our
            infrastructure.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="link" className="p-0 h-auto text-[#4CAF50] hover:text-[#45a049]">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
