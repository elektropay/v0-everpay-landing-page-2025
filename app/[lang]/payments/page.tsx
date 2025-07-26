"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0A2F2F] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent payments for the modern business</h1>
              <p className="text-xl text-gray-300 mb-8">
                Accept payments anywhere, analyze transactions in real-time, and accelerate your business growth with
                our comprehensive payment solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#4CAF50] hover:bg-[#45a049] w-full sm:w-[180px] h-[48px] rounded-lg text-base font-medium"
                >
                  Get started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 w-full sm:w-[180px] h-[48px] rounded-lg text-base font-medium"
                >
                  Contact sales
                </Button>
              </div>
            </div>
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
              <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Payment Dashboard Interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {["Overview", "Features", "Pricing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-4 text-lg font-medium whitespace-nowrap transition-colors
                  ${
                    activeTab === tab.toLowerCase()
                      ? "text-black border-b-2 border-black"
                      : "text-gray-600 hover:text-black"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className={activeTab === "overview" ? "block" : "hidden"}>
        {/* Features Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "In-Person Payments",
                  description: "Accept all major cards, contactless, and mobile payments with our secure terminals.",
                },
                {
                  title: "Online Payments",
                  description: "Seamlessly integrate payments into your website or mobile app with our APIs.",
                },
                {
                  title: "Mobile Payments",
                  description: "Turn any smartphone into a payment terminal with our mobile card reader.",
                },
              ].map((feature, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg border p-6">
                  <div className="relative h-[200px] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">{feature.title}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
              <p className="text-gray-600">
                Our payment solutions come with powerful features designed to help your business thrive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Next-Day Deposits",
                  description: "Get your funds the next business day with our fast settlement process.",
                },
                {
                  title: "Fraud Prevention",
                  description: "Advanced AI-powered fraud detection to protect your business.",
                },
                {
                  title: "Real-Time Analytics",
                  description: "Track sales, refunds, and disputes with detailed reporting.",
                },
                {
                  title: "Multi-Currency Support",
                  description: "Accept payments in 135+ currencies with automatic conversion.",
                },
                {
                  title: "24/7 Support",
                  description: "Expert help available around the clock when you need it.",
                },
                {
                  title: "Developer-Friendly",
                  description: "Robust APIs and SDKs for custom integration needs.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={activeTab === "features" ? "block" : "hidden"}>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Payment Features</h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Smart Payment Processing",
                    description:
                      "Intelligent routing and automatic retries ensure the highest possible success rates for your transactions.",
                    features: ["Automatic card updates", "Intelligent routing", "Retry logic", "Risk management"],
                  },
                  {
                    title: "Global Coverage",
                    description:
                      "Accept payments from customers anywhere in the world with support for multiple currencies and payment methods.",
                    features: [
                      "135+ currencies",
                      "Local payment methods",
                      "Automatic currency conversion",
                      "Regional tax compliance",
                    ],
                  },
                  {
                    title: "Developer Tools",
                    description:
                      "Comprehensive APIs and SDKs make it easy to integrate payments into your applications.",
                    features: ["RESTful APIs", "Client libraries", "Webhooks", "Testing environment"],
                  },
                ].map((section, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                      <p className="text-gray-600 mb-6">{section.description}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-4">
                        {section.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-[#4CAF50]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={activeTab === "pricing" ? "block" : "hidden"}>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Simple, transparent pricing</h2>
              <p className="text-xl text-gray-600 mb-12">
                No hidden fees. No long-term contracts. Just straightforward pricing that scales with your business.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Card-Present",
                    rate: "1.9% + $0.10",
                    description: "For in-person payments",
                    features: ["All major credit cards", "Contactless payments", "Mobile wallets", "Next-day deposits"],
                  },
                  {
                    title: "Card-Not-Present",
                    rate: "3.49% + $0.30",
                    description: "For online payments",
                    features: ["Online payments", "Recurring billing", "Payment links", "Invoice payments"],
                  },
                ].map((plan, index) => (
                  <div key={index} className="border rounded-lg p-8">
                    <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">{plan.rate}</div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-[#4CAF50]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#0A2F2F] rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using Everpay to process millions in payments every day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                Create account
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
