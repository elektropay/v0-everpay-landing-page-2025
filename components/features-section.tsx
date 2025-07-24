import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSignIcon, CreditCardIcon, UsersIcon } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A complete commerce toolkit</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everpay provides a suite of products to help you manage your business, from accepting payments to managing
              subscriptions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <DollarSignIcon className="h-10 w-10 text-gray-900 mb-4" />
              <CardTitle>Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Accept payments online, in person, and around the world with a single integration.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <UsersIcon className="h-10 w-10 text-gray-900 mb-4" />
              <CardTitle>Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Build platforms and marketplaces that can accept payments and pay out to third parties.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <CreditCardIcon className="h-10 w-10 text-gray-900 mb-4" />
              <CardTitle>Billing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Automate recurring billing, invoices, and revenue recognition for your subscription business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
