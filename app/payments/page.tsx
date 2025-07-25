"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { getDictionary } from "@/lib/i18n"
import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface PaymentsPageProps {
  params: {
    lang: Locale
  }
}

export default async function PaymentsPage({ params: { lang } }: PaymentsPageProps) {
  const dict = await getDictionary(lang)
  const messages = await getMessages({ locale: lang })
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dict={dict} lang={lang} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0A2F2F] text-white overflow-hidden">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{dict.payments.hero.title}</h1>
                <p className="text-xl text-gray-300 mb-8">{dict.payments.hero.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-[#4CAF50] hover:bg-[#45a049] w-full sm:w-[180px] h-[48px] rounded-lg text-base font-medium"
                  >
                    {dict.payments.hero.getStarted}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white/10 w-full sm:w-[180px] h-[48px] rounded-lg text-base font-medium"
                  >
                    {dict.payments.hero.contactSales}
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                  alt="Modern payment system"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
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
                    title: dict.payments.features.inPersonPayments.title,
                    description: dict.payments.features.inPersonPayments.description,
                    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad",
                  },
                  {
                    title: dict.payments.features.onlinePayments.title,
                    description: dict.payments.features.onlinePayments.description,
                    image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30e",
                  },
                  {
                    title: dict.payments.features.mobilePayments.title,
                    description: dict.payments.features.mobilePayments.description,
                    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
                  },
                ].map((feature, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg">
                    <div className="relative h-[250px] md:h-[300px]">
                      <Image
                        src={feature.image || "/placeholder.png"}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-gray-50 py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{dict.payments.benefits.title}</h2>
                <p className="text-gray-600">{dict.payments.benefits.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: dict.payments.benefits.nextDayDeposits.title,
                    description: dict.payments.benefits.nextDayDeposits.description,
                  },
                  {
                    title: dict.payments.benefits.fraudPrevention.title,
                    description: dict.payments.benefits.fraudPrevention.description,
                  },
                  {
                    title: dict.payments.benefits.realTimeAnalytics.title,
                    description: dict.payments.benefits.realTimeAnalytics.description,
                  },
                  {
                    title: dict.payments.benefits.multiCurrencySupport.title,
                    description: dict.payments.benefits.multiCurrencySupport.description,
                  },
                  {
                    title: dict.payments.benefits.support247.title,
                    description: dict.payments.benefits.support247.description,
                  },
                  {
                    title: dict.payments.benefits.developerFriendly.title,
                    description: dict.payments.benefits.developerFriendly.description,
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

          {/* Updated Overview Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.PaymentsPage.title}</h1>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {messages.PaymentsPage.description}
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
                <p className="mb-6">{messages.PaymentsPage.intro}</p>

                <h2 className="text-2xl font-bold mb-4">{messages.PaymentsPage.featuresTitle}</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>{messages.PaymentsPage.feature1}</li>
                  <li>{messages.PaymentsPage.feature2}</li>
                  <li>{messages.PaymentsPage.feature3}</li>
                  <li>{messages.PaymentsPage.feature4}</li>
                </ul>

                <div className="flex justify-center mt-8">
                  <Link href={`/${lang}/contact`} passHref>
                    <Button>{messages.PaymentsPage.getStarted}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={activeTab === "features" ? "block" : "hidden"}>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">{dict.payments.features.title}</h2>
                <div className="space-y-12">
                  {[
                    {
                      title: dict.payments.features.smartPaymentProcessing.title,
                      description: dict.payments.features.smartPaymentProcessing.description,
                      features: [
                        dict.payments.features.smartPaymentProcessing.features.automaticCardUpdates,
                        dict.payments.features.smartPaymentProcessing.features.intelligentRouting,
                        dict.payments.features.smartPaymentProcessing.features.retryLogic,
                        dict.payments.features.smartPaymentProcessing.features.riskManagement,
                      ],
                    },
                    {
                      title: dict.payments.features.globalCoverage.title,
                      description: dict.payments.features.globalCoverage.description,
                      features: [
                        dict.payments.features.globalCoverage.features.currencies,
                        dict.payments.features.globalCoverage.features.localPaymentMethods,
                        dict.payments.features.globalCoverage.features.automaticCurrencyConversion,
                        dict.payments.features.globalCoverage.features.regionalTaxCompliance,
                      ],
                    },
                    {
                      title: dict.payments.features.developerTools.title,
                      description: dict.payments.features.developerTools.description,
                      features: [
                        dict.payments.features.developerTools.features.restfulApis,
                        dict.payments.features.developerTools.features.clientLibraries,
                        dict.payments.features.developerTools.features.webhooks,
                        dict.payments.features.developerTools.features.testingEnvironment,
                      ],
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

          {/* Updated Features Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.payments.features.title}</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {dict.payments.features.description}
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-8">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{dict.payments.features.onlinePayments.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {dict.payments.features.onlinePayments.content}
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{dict.payments.features.posPayments.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {dict.payments.features.posPayments.content}
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{dict.payments.features.mobilePayments.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {dict.payments.features.mobilePayments.content}
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{dict.payments.features.globalReach.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {dict.payments.features.globalReach.content}
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{dict.payments.features.security.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{dict.payments.features.security.content}</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">{dict.payments.features.reporting.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{dict.payments.features.reporting.content}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={activeTab === "pricing" ? "block" : "hidden"}>
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">{dict.payments.pricing.title}</h2>
                <p className="text-xl text-gray-600 mb-12">{dict.payments.pricing.description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: dict.payments.pricing.cardPresent.title,
                      rate: dict.payments.pricing.cardPresent.rate,
                      description: dict.payments.pricing.cardPresent.description,
                      features: [
                        dict.payments.pricing.cardPresent.features.allMajorCreditCards,
                        dict.payments.pricing.cardPresent.features.contactlessPayments,
                        dict.payments.pricing.cardPresent.features.mobileWallets,
                        dict.payments.pricing.cardPresent.features.nextDayDeposits,
                      ],
                    },
                    {
                      title: dict.payments.pricing.cardNotPresent.title,
                      rate: dict.payments.pricing.cardNotPresent.rate,
                      description: dict.payments.pricing.cardNotPresent.description,
                      features: [
                        dict.payments.pricing.cardNotPresent.features.onlinePayments,
                        dict.payments.pricing.cardNotPresent.features.recurringBilling,
                        dict.payments.pricing.cardNotPresent.features.paymentLinks,
                        dict.payments.pricing.cardNotPresent.features.invoicePayments,
                      ],
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
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="bg-[#0A2F2F] rounded-2xl text-white p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">{dict.payments.cta.title}</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{dict.payments.cta.description}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                  {dict.payments.cta.createAccount}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  {dict.payments.cta.talkToSales}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* New Section from Updates */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Payments</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  All about our payment solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} lang={lang} />
    </div>
  )
}
