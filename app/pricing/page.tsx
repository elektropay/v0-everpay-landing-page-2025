import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small practices",
      features: [
        "Up to 100 transactions/month",
        "Basic payment processing",
        "Email support",
        "Standard security",
        "Monthly reports",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Unlimited transactions",
        "Advanced payment processing",
        "Priority support",
        "Advanced security & fraud prevention",
        "Real-time analytics",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom compliance solutions",
        "Multi-location support",
        "White-label options",
        "SLA guarantees",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your practice. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? "border-[#1aa478] border-2" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#1aa478] text-white px-3 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full rounded-full bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
                    <a href="https://app.everpayinc.com/sign-up">
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, debit cards, and ACH transfers.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No, there are no setup fees or hidden costs. You only pay the monthly subscription fee.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
