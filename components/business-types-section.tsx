import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function BusinessTypesSection() {
  const businessTypes = [
    {
      title: "E-commerce",
      revenue: "$60k",
      description: "Perfect for online stores and marketplaces",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    },
    {
      title: "SaaS",
      revenue: "$80k",
      description: "Ideal for subscription-based businesses",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "Marketplace",
      revenue: "$120k",
      description: "Built for multi-vendor platforms",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: "#fbf9f9" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 animate-fade-in"
            style={{ backgroundColor: "#e3ffcc", color: "#193638" }}
          >
            BUSINESS TYPES
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-up animate-delay-100"
            style={{ fontFamily: "var(--font-display)", color: "#193638" }}
          >
            We Drive Growth for All Business Types
          </h2>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in-up animate-delay-200" style={{ color: "#6b7280" }}>
            Whether you're a startup or an enterprise, we have the right solution for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businessTypes.map((type, index) => (
            <Card
              key={index}
              className={`overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-${300 + index * 100}`}
              style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#193638" }}>
                    {type.title}
                  </h3>
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#1aa478" }}>
                    {type.revenue}
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  {type.description}
                </p>
                <button
                  className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-200"
                  style={{ color: "#1aa478" }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
