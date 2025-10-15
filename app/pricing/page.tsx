import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4" style={{ backgroundColor: "#193638" }}>
          <div className="container mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Choose the plan that's right for your business. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <Card className="relative border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <CardDescription>Perfect for small businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">2.9%</span>
                    <span className="text-gray-600"> + 30¢</span>
                  </div>
                  <p className="text-sm text-gray-500">per transaction</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Accept all major payment methods</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Basic fraud protection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Email support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Dashboard analytics</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://app.everpayinc.com/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full rounded-full">Get Started</Button>
                  </a>
                </CardFooter>
              </Card>

              {/* Professional Plan */}
              <Card className="relative border-2 border-[#1aa478] hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#1aa478] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">2.5%</span>
                    <span className="text-gray-600"> + 25¢</span>
                  </div>
                  <p className="text-sm text-gray-500">per transaction</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Everything in Starter</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Advanced fraud protection</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Custom branding</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://app.everpayinc.com/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full rounded-full">Get Started</Button>
                  </a>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative border-2 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <p className="text-sm text-gray-500">pricing</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Everything in Professional</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">24/7 phone support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">Custom integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0" />
                      <span className="text-sm">SLA guarantee</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full rounded-full bg-transparent">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Are there any setup fees?</h3>
                <p className="text-gray-600">No, there are no setup fees. You only pay when you process payments.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you support?</h3>
                <p className="text-gray-600">
                  We support all major credit cards, debit cards, digital wallets, and local payment methods.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Is there a contract or commitment?</h3>
                <p className="text-gray-600">No, all plans are month-to-month with no long-term contracts required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
