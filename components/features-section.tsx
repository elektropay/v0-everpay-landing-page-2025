import { Shield, Zap, Globe, TrendingUp, Lock, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "PCI DSS Level 1 certified with end-to-end encryption and fraud prevention.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process payments in milliseconds with our optimized infrastructure.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Accept payments from customers anywhere in the world, in any currency.",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Real-time insights and reporting to help grow your business.",
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "Advanced AI-powered fraud detection keeps your transactions secure.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless payment experience across all devices and platforms.",
    },
  ]

  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Everything you need to accept payments
        </h2>
        <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
          Powerful features to help you grow your business faster
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-border bg-card animate-fade-in-up hover:shadow-lg hover:scale-105 transition-all group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
