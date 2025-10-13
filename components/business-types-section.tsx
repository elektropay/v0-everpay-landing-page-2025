import { Store, ShoppingCart, Briefcase, Laptop } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BusinessTypesSection() {
  const businessTypes = [
    {
      icon: Store,
      title: "Retail",
      description: "Point-of-sale solutions for brick-and-mortar stores",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Online checkout integration for digital storefronts",
    },
    {
      icon: Briefcase,
      title: "Enterprise",
      description: "Custom solutions for large-scale operations",
    },
    {
      icon: Laptop,
      title: "SaaS",
      description: "Subscription billing and recurring payments",
    },
  ]

  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Built for every business type</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Whether you're just starting or already established, we have the right solution for you
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {businessTypes.map((type, index) => (
          <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <type.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
