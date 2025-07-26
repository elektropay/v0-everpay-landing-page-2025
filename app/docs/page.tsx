import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Zap, Shield, Globe, Headphones } from "lucide-react"

export default function DocsPage() {
  const sections = [
    {
      icon: Zap,
      title: "Quick Start",
      description: "Get up and running with EverPay in minutes",
      items: ["Installation", "Authentication", "First Payment", "Testing"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation and examples",
      items: ["Payments API", "Webhooks", "Customers", "Subscriptions"],
    },
    {
      icon: Shield,
      title: "Security",
      description: "Learn about our security measures and best practices",
      items: ["PCI Compliance", "Encryption", "Fraud Prevention", "Best Practices"],
    },
    {
      icon: Globe,
      title: "Integrations",
      description: "Connect EverPay with your favorite tools",
      items: ["E-commerce Platforms", "Accounting Software", "CRM Systems", "Custom Integrations"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate and use EverPay's payment platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <section.icon className="h-6 w-6" />
                  {section.title}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-6 w-6" />
                Need Help?
              </CardTitle>
              <CardDescription>Our support team is here to help you get started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button>Contact Support</Button>
                <Button variant="outline">Join Community</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
