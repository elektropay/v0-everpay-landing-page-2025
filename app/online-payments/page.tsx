import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Shield, Zap, CreditCard, Wallet } from "lucide-react"

export default function OnlinePaymentsPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Accept payments from customers worldwide with local payment methods",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Seamless checkout experience across all devices and platforms",
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "Bank-level security with PCI DSS compliance and fraud protection",
    },
    {
      icon: Zap,
      title: "Fast Settlement",
      description: "Get paid faster with next-day settlement and real-time reporting",
    },
  ]

  const paymentMethods = [
    { name: "Credit & Debit Cards", icon: CreditCard, description: "Visa, Mastercard, American Express, and more" },
    { name: "Digital Wallets", icon: Wallet, description: "Apple Pay, Google Pay, PayPal, and local wallets" },
    { name: "Bank Transfers", icon: Globe, description: "ACH, SEPA, and local bank transfer methods" },
    { name: "Buy Now, Pay Later", icon: Smartphone, description: "Klarna, Afterpay, and other BNPL options" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Online Payments</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Accept online payments with our secure, fast, and flexible payment processing solution
          </p>
          <div className="mt-8">
            <Button size="lg" className="mr-4">
              Start Accepting Payments
            </Button>
            <Button variant="outline" size="lg">
              View Demo
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
          <h2 className="text-3xl font-bold text-center mb-12">Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <method.icon className="h-6 w-6" />
                    {method.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{method.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Integration Options</CardTitle>
              <CardDescription>Choose the integration method that works best for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Checkout Links</h4>
                  <p className="text-sm text-muted-foreground">No-code solution - create payment links in minutes</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Hosted Checkout</h4>
                  <p className="text-sm text-muted-foreground">Pre-built checkout page with customizable branding</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Custom Integration</h4>
                  <p className="text-sm text-muted-foreground">Full control with our flexible APIs and SDKs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Our Online Payments?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium">Higher Conversion Rates</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized checkout flow increases successful payments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium">Global Scale</h4>
                    <p className="text-sm text-muted-foreground">Process millions of transactions with 99.9% uptime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h4 className="font-medium">Advanced Analytics</h4>
                    <p className="text-sm text-muted-foreground">Real-time insights and detailed reporting</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>Ready to Start Accepting Online Payments?</CardTitle>
            <CardDescription>Join thousands of businesses that trust our payment platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Started Now</Button>
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
