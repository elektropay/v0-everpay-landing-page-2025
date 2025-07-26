import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Brain, Lock, AlertTriangle, CheckCircle } from "lucide-react"

export default function FraudPreventionPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description:
        "Machine learning algorithms analyze transaction patterns in real-time to identify suspicious activities.",
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 monitoring of all transactions with instant alerts for potential fraud attempts.",
    },
    {
      icon: Lock,
      title: "3D Secure 2.0",
      description: "Enhanced authentication protocol that reduces fraud while improving user experience.",
    },
    {
      icon: Shield,
      title: "Risk Scoring",
      description:
        "Advanced risk assessment for each transaction based on multiple data points and behavioral analysis.",
    },
  ]

  const stats = [
    { value: "99.5%", label: "Fraud Detection Rate" },
    { value: "<0.1%", label: "False Positive Rate" },
    { value: "24/7", label: "Monitoring" },
    { value: "100ms", label: "Response Time" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Fraud Prevention</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced fraud detection and prevention to protect your business and customers
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes every transaction in real-time, checking for suspicious patterns and behaviors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Risk scores are calculated based on multiple factors including location, device, and transaction
                  history.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Action</h3>
                <p className="text-sm text-muted-foreground">
                  Automated responses including blocking, challenging, or approving transactions based on risk level.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
