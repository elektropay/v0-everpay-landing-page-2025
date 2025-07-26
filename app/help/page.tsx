import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Book, MessageCircle, Phone, Mail, FileText } from "lucide-react"

export default function HelpPage() {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using EverPay",
      articles: ["Account Setup", "First Payment", "Integration Guide", "Testing"],
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Complete API reference and examples",
      articles: ["Authentication", "Payments API", "Webhooks", "Error Codes"],
    },
    {
      icon: MessageCircle,
      title: "Common Issues",
      description: "Solutions to frequently encountered problems",
      articles: ["Payment Failures", "Webhook Issues", "Integration Problems", "Account Questions"],
    },
  ]

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat",
      available: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: "Response within 24h",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM EST",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to your questions and get the help you need
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search for help..." className="pl-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-6 w-6" />
                  {category.title}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-8">Our support team is here to help you with any questions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <option.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-2">{option.action}</Button>
                <p className="text-xs text-muted-foreground">{option.available}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
