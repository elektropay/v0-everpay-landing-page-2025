import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Smartphone, Wifi, Shield, TrendingUp, Users, Zap, CreditCard } from "lucide-react"
import Link from "next/link"

export default function POSSolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Modern POS Solutions for Your Business
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Accept payments anywhere with everpay's powerful point-of-sale system. Seamlessly integrate in-person
                  and online sales with advanced features built for growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/demo">
                    <Button size="lg" className="bg-[#1aa478] hover:bg-[#158f65] text-white rounded-full">
                      Book a Demo
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img src="/modern-pos-terminal-payment-system.jpg" alt="POS Terminal" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Sell</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From quick-service restaurants to retail stores, our POS system adapts to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-[#1aa478] transition-all">
                <CardContent className="p-6">
                  <div className="bg-[#1aa478]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accept All Payments</h3>
                  <p className="text-gray-600">
                    Process credit cards, debit cards, contactless payments, mobile wallets, and gift cards all in one
                    system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#1aa478] transition-all">
                <CardContent className="p-6">
                  <div className="bg-[#1aa478]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Wifi className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Offline Mode</h3>
                  <p className="text-gray-600">
                    Continue accepting payments even when your internet connection drops. Transactions sync
                    automatically.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#1aa478] transition-all">
                <CardContent className="p-6">
                  <div className="bg-[#1aa478]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile POS</h3>
                  <p className="text-gray-600">
                    Take payments on the go with our mobile app. Perfect for pop-ups, delivery services, and field
                    sales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#1aa478] transition-all">
                <CardContent className="p-6">
                  <div className="bg-[#1aa478]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-600">
                    Track sales, inventory, and customer data in real-time. Make informed decisions with powerful
                    reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#1aa478] transition-all">
                <CardContent className="p-6">
                  <div className="bg-[#1aa478]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Management</h3>
                  <p className="text-gray-600">
                    Build customer profiles, track purchase history, and create loyalty programs to drive repeat
                    business.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#1aa478] transition-all">
                <CardContent className="p-6">
                  <div className="bg-[#1aa478]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
                  <p className="text-gray-600">
                    End-to-end encryption and PCI DSS Level 1 compliance ensure your customers' data stays protected.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hardware Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible Hardware Options</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from our range of reliable, easy-to-use hardware designed for every type of business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <img
                    src="/countertop-pos-terminal.jpg"
                    alt="Countertop Terminal"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Countertop Terminal</h3>
                  <p className="text-gray-600 mb-4">
                    All-in-one terminal with touchscreen, receipt printer, and card reader. Perfect for retail and
                    restaurants.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Built-in receipt printer</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Contactless payments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Wi-Fi & 4G connectivity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <img
                    src="/mobile-card-reader.jpg"
                    alt="Mobile Reader"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Reader</h3>
                  <p className="text-gray-600 mb-4">
                    Compact card reader that connects to your smartphone or tablet. Great for on-the-go businesses.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Bluetooth connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Chip & contactless</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Long battery life</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <img
                    src="/tablet-pos-system.jpg"
                    alt="Tablet POS"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tablet POS</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your iPad or Android tablet into a full POS system with our sleek stand and accessories.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Customizable interface</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Optional cash drawer</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Space-saving design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect your POS with the tools you already use to streamline operations and boost efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-10 w-10 text-[#1aa478] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Accounting</h3>
                <p className="text-sm text-gray-600">QuickBooks, Xero, FreshBooks</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-10 w-10 text-[#1aa478] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-sm text-gray-600">Shopify, WooCommerce, Magento</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-10 w-10 text-[#1aa478] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Inventory</h3>
                <p className="text-sm text-gray-600">TradeGecko, Cin7, Stitch Labs</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-10 w-10 text-[#1aa478] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>
                <p className="text-sm text-gray-600">Mailchimp, Klaviyo, Constant Contact</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Your Industry</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Specialized features tailored to meet the unique needs of your business type.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🍽️ Restaurants</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Table management & reservations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Kitchen display system</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Menu customization & modifiers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🛍️ Retail</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Inventory tracking & alerts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Barcode scanning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Multi-location management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">💇 Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Appointment scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Staff management & commissions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#1aa478] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Client profiles & history</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1aa478] to-[#158f65] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of businesses that trust everpay for their point-of-sale needs. Get started today with no
              setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="bg-white text-[#1aa478] hover:bg-gray-100 rounded-full">
                  Book a Demo
                </Button>
              </Link>
              <Link href="https://app.everpayinc.com/sign-up" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full bg-transparent"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
