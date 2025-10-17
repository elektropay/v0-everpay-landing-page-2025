import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Users, TrendingUp, Shield, Zap } from "lucide-react"

export default function DemoPage() {
  const benefits = [
    {
      icon: Users,
      title: "Personalized Demo",
      description: "Get a tailored walkthrough based on your business needs",
    },
    {
      icon: TrendingUp,
      title: "See Results",
      description: "Learn how businesses like yours grow with everpay",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Understand our enterprise-grade security measures",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Discover how fast you can go live with our platform",
    },
  ]

  const stats = [
    { value: "50K+", label: "Active merchants" },
    { value: "$2B+", label: "Processed annually" },
    { value: "99.99%", label: "Uptime guarantee" },
    { value: "150+", label: "Countries supported" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white via-green-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  See everpay in action
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                  Schedule a personalized demo with our team and discover how everpay can transform your payment
                  operations. No commitment required.
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {[
                    "Live product demonstration tailored to your needs",
                    "Q&A session with payment experts",
                    "Custom pricing discussion",
                    "Integration planning and support",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#1aa478] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index}>
                      <div
                        className="text-3xl font-bold text-[#1aa478] mb-1"
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Form */}
              <div className="animate-fade-in-right">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Request a demo
                  </h2>
                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-gray-700"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          First Name *
                        </label>
                        <Input type="text" placeholder="John" required className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium text-gray-700"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          Last Name *
                        </label>
                        <Input type="text" placeholder="Doe" required className="rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        Work Email *
                      </label>
                      <Input type="email" placeholder="john@company.com" required className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        Company Name *
                      </label>
                      <Input type="text" placeholder="Your company" required className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" className="rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        Company Size
                      </label>
                      <Select>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1,000 employees</SelectItem>
                          <SelectItem value="1000+">1,000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        Monthly Transaction Volume
                      </label>
                      <Select>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select volume range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                          <SelectItem value="250k-1m">$250,000 - $1M</SelectItem>
                          <SelectItem value="1m+">$1M+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                        How can we help? (Optional)
                      </label>
                      <Textarea
                        placeholder="Tell us about your payment needs..."
                        className="h-24 rounded-xl"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 text-[#1aa478] border-gray-300 rounded focus:ring-[#1aa478]"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        I agree to everpay's Terms of Service and Privacy Policy, and consent to receiving marketing
                        communications.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg text-base"
                    >
                      Request Demo
                    </Button>

                    <p className="text-xs text-center text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
                      By submitting this form, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              What to expect from your demo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <benefit.icon className="w-12 h-12 text-[#1aa478] mb-4" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in-up"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Trusted by thousands of businesses worldwide
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className={`animate-zoom-in`} style={{ animationDelay: `${index * 100}ms` }}>
                    <div
                      className="text-4xl md:text-5xl font-bold text-[#1aa478] mb-2"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
