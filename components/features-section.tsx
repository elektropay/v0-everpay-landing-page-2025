import { Wallet, Globe, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      number: "01",
      icon: Wallet,
      title: "Global Payment Optimization",
      description:
        "Optimize your transaction data to better engage customers and convert sales with our localized service.",
    },
    {
      number: "02",
      icon: Globe,
      title: "Establish Versatility Payments",
      description: "Manage your account with our easy-to-use dashboard that provides real-time insights and analytics.",
    },
    {
      number: "03",
      icon: Shield,
      title: "Monitor Payment System",
      description:
        "Get instant notifications and detailed reports on all your transactions with advanced monitoring tools.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            HOW WE FUNCTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Rapidly Penetrate New Markets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rapidly launch and penetrate new markets with customizable features and tools designed for flexible payment
            options 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              <div className="text-xs font-bold text-primary mb-4">{feature.number}</div>

              <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-display)]">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
