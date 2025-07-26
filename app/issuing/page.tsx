import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Shield, Zap, Settings, Users, BarChart3 } from "lucide-react"

export default function IssuingPage() {
  const features = [
    {
      icon: CreditCard,
      title: "Virtual & Physical Cards",
      description: "Issue both virtual and physical cards instantly for your business needs",
    },
    {
      icon: Shield,
      title: "Advanced Controls",
      description: "Set spending limits, merchant restrictions, and real-time controls",
    },
    {
      icon: Zap,
      title: "Instant Issuance",
      description: "Create and activate cards in seconds, not days",
    },
    {
      icon: Settings,
      title: "Flexible Management",
      description: "Manage cards, users, and spending through our dashboard or API",
    },
  ]

  const useCases = [
    {
      icon: Users,
      title: "Employee Expenses",
      description: "Give employees corporate cards with built-in expense management and controls.",
    },
    {
      icon: BarChart3,
      title: "Marketing Spend",
      description: "Create dedicated cards for marketing campaigns with specific budgets and restrictions.",
    },
    {
      icon: Settings,
      title: "Vendor Payments",
      description: "Issue cards for specific vendors or services with automated reconciliation.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Card Issuing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Issue virtual and physical cards instantly with advanced controls and real-time management
          </p>
          <div className="mt-8">
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Request Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <useCase.icon className="h-6 w-6" />
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start Issuing Cards?</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Join hundreds of businesses that trust our card issuing platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Start Issuing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
