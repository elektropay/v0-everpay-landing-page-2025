import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldAlertIcon, LockIcon, CreditCardIcon, BarChartIcon } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"
import Image from "next/image"

interface CheckoutProtectionSectionProps {
  dict: Messages
}

export function CheckoutProtectionSection({ dict }: CheckoutProtectionSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.checkoutProtection.title}</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {dict.checkoutProtection.description}
              </p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <ShieldAlertIcon className="h-6 w-6 text-primary" />
                  <CardTitle>{dict.checkoutProtection.feature1Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dict.checkoutProtection.feature1Description}</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LockIcon className="h-6 w-6 text-primary" />
                  <CardTitle>{dict.checkoutProtection.feature2Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dict.checkoutProtection.feature2Description}</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CreditCardIcon className="h-6 w-6 text-primary" />
                  <CardTitle>{dict.checkoutProtection.feature3Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dict.checkoutProtection.feature3Description}</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChartIcon className="h-6 w-6 text-primary" />
                  <CardTitle>{dict.checkoutProtection.feature4Title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{dict.checkoutProtection.feature4Description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          <Image
            alt="Checkout Protection"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="400"
            src="/placeholder.png?height=400&width=600"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
