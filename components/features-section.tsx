import { CreditCard, Shield, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Accept All Payments</h3>
            <p className="text-gray-500">Process credit cards, debit cards, and digital wallets with ease.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Advanced Security</h3>
            <p className="text-gray-500">Protect your business and customers with industry-leading fraud prevention.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Grow Your Business</h3>
            <p className="text-gray-500">Scale effortlessly with our flexible APIs and comprehensive tools.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
