import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Shield, Code } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Accept payments from customers worldwide with support for 150+ currencies and local payment methods.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Bank-level security with PCI DSS compliance, fraud detection, and real-time monitoring.",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Easy integration with comprehensive APIs, SDKs, and detailed documentation.",
    },
  ]

  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Why Choose EverPay?</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We provide the tools and infrastructure you need to accept payments and grow your business globally.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-10 w-10" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
