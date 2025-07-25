import type { Messages } from "@/lib/i18n/types"
import { CreditCard, Shield, TrendingUp, Globe } from "lucide-react"

interface FeaturesSectionProps {
  dict: Messages
}

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  const features = [
    {
      icon: CreditCard,
      title: dict.features.paymentProcessing.title,
      description: dict.features.paymentProcessing.description,
    },
    {
      icon: Shield,
      title: dict.features.fraudProtection.title,
      description: dict.features.fraudProtection.description,
    },
    {
      icon: TrendingUp,
      title: dict.features.analyticsReporting.title,
      description: dict.features.analyticsReporting.description,
    },
    {
      icon: Globe,
      title: dict.features.globalPayments.title,
      description: dict.features.globalPayments.description,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {dict.features.tagline}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.features.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.features.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {features.slice(2, 4).map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
