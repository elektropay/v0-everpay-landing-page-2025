import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Zap } from "lucide-react"

export function CheckoutProtectionSection() {
  const features = [
    {
      icon: Shield,
      title: "Real-time fraud detection",
      description: "Advanced algorithms detect and prevent fraudulent transactions instantly.",
    },
    {
      icon: Eye,
      title: "24/7 monitoring",
      description: "Continuous monitoring of all transactions for suspicious activity.",
    },
    {
      icon: Zap,
      title: "Machine learning algorithms",
      description: "AI-powered systems that learn and adapt to new fraud patterns.",
    },
  ]

  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Advanced Fraud Protection</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Protect your business and customers with our comprehensive security suite.
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
