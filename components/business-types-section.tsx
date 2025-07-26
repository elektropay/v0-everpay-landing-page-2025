import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Store, Layers, Building } from "lucide-react"

export function BusinessTypesSection() {
  const businessTypes = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Perfect for online stores and digital marketplaces.",
    },
    {
      icon: Store,
      title: "Retail Stores",
      description: "In-person payment solutions for brick-and-mortar businesses.",
    },
    {
      icon: Layers,
      title: "SaaS Platforms",
      description: "Subscription billing and recurring payment management.",
    },
    {
      icon: Building,
      title: "Marketplaces",
      description: "Multi-party payment splitting and marketplace solutions.",
    },
  ]

  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Built for Every Business</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          From startups to enterprises, we have solutions that scale with your business.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
        {businessTypes.map((type, index) => (
          <Card key={index}>
            <CardHeader>
              <type.icon className="h-10 w-10" />
              <CardTitle>{type.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{type.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
