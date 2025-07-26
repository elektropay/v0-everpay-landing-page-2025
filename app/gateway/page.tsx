import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Globe, Shield, Code, CreditCard, Smartphone } from "lucide-react"

export default function GatewayPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process payments in under 100ms with our optimized infrastructure",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Accept payments from 150+ countries with local payment methods",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "PCI DSS Level 1 compliant with advanced fraud protection",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Simple APIs, comprehensive SDKs, and detailed documentation",
    },
  ]

  const paymentMethods = [
    { name: "Credit Cards", icon: CreditCard },
    { name: "Digital Wallets", icon: Smartphone },
    { name: "Bank Transfers", icon: Globe },
    { name: "Local Methods", icon: Globe },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Payment Gateway</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A powerful, secure, and flexible payment gateway that scales with your business
          </p>
          <div className="mt-8">
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Accept all major payment methods your customers prefer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
                    <method.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{method.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integration Options</CardTitle>
              <CardDescription>Choose the integration method that works best for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">Hosted Checkout</h4>
                  <p className="text-sm text-muted-foreground">Quick setup with our pre-built checkout page</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">Custom Integration</h4>
                  <p className="text-sm text-muted-foreground">Full control with our flexible APIs</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium mb-1">Mobile SDKs</h4>
                  <p className="text-sm text-muted-foreground">Native mobile payment experiences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ready to Get Started?</CardTitle>
            <CardDescription>Join thousands of businesses that trust our payment gateway</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Start Integration</Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
