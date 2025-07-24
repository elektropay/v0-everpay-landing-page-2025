"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DashboardCard } from "@/components/dashboard-card"
import { CheckCircle2Icon } from "lucide-react"

export function HomePageContent() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-everpay-dark">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Accept payments, send payouts, and manage their businesses online.
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="bg-everpay-green text-white text-lg px-8 py-6 rounded-full hover:bg-everpay-green/90 shadow-lg">
                Start now
              </Button>
              <Button
                className="border border-everpay-mediumgray text-everpay-dark text-lg px-8 py-6 rounded-full hover:bg-everpay-lightgray shadow-lg bg-transparent"
                variant="outline"
              >
                Contact sales
              </Button>
            </div>
            <div className="flex justify-center gap-8 text-lg text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-5 w-5 text-everpay-green" />
                <span>Always available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-5 w-5 text-everpay-green" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-5 w-5 text-everpay-green" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-everpay-lightgray">
        <div className="container px-4 md:px-6">
          <Card className="p-6 md:p-8 lg:p-10 rounded-xl shadow-lg bg-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-everpay-dark">Payment Dashboard</h2>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-everpay-red" />
                <span className="h-3 w-3 rounded-full bg-everpay-yellow" />
                <span className="h-3 w-3 rounded-full bg-everpay-green" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard
                title="Total Revenue"
                value="$2,847,392"
                percentage="+12.5%"
                className="col-span-full md:col-span-1"
              />
              <DashboardCard title="Transactions" value="24,847" />
              <DashboardCard title="Success Rate" value="99.2%" />
            </div>
          </Card>
        </div>
      </section>

      {/* Placeholder for other sections like Payment Partners, Features, etc. */}
      {/* You can uncomment and integrate these sections as needed */}
      {/* <PaymentPartnersSection /> */}
      {/* <FeaturesSection /> */}
      {/* <StatsSection /> */}
      {/* <CheckoutProtectionSection /> */}
      {/* <BusinessTypesSection /> */}
    </main>
  )
}
