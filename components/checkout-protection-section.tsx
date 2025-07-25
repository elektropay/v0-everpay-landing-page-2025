"use client"

import { useTranslations } from "next-intl"
import { ShieldAlertIcon, LockIcon, CreditCardIcon, KeyIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CheckoutProtectionSection() {
  const t = useTranslations("checkoutProtection")

  const features = [
    {
      icon: <ShieldAlertIcon className="h-8 w-8 text-primary" />,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: <LockIcon className="h-8 w-8 text-primary" />,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: <CreditCardIcon className="h-8 w-8 text-primary" />,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
    {
      icon: <KeyIcon className="h-8 w-8 text-primary" />,
      title: t("feature4Title"),
      description: t("feature4Description"),
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("title")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <CardHeader className="p-0 pb-4">{feature.icon}</CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-xl font-bold mb-2">{feature.title}</CardTitle>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
