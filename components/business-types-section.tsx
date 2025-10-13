import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function BusinessTypesSection() {
  const businessTypes = [
    {
      title: "E-Commerce",
      revenue: "$60k",
      description:
        "Accept credit and debit card payments from customers around the world with our global payment network.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      title: "SaaS Platforms",
      revenue: "$80k",
      description:
        "We can handle your payment flow with maximum security while you are scaling your business across the world.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            WE DRIVE GROWTH FOR ALL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            We Drive Growth for All Business Types
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From e-commerce platforms to SaaS solutions, we provide tailored payment solutions for every business type
            and industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {businessTypes.map((business, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-102 animate-fade-in-up border border-border"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-card px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-foreground">{business.revenue}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-display)]">
                  {business.title}
                </h3>

                <p className="text-muted-foreground">{business.description}</p>

                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
                  Read case study <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
