"use client"

import { useTranslations } from "next-intl"
import { ShoppingCartIcon, StoreIcon, UsersIcon, CloudIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BusinessTypesSection() {
  const t = useTranslations("businessTypes")

  const businessTypes = [
    {
      icon: <ShoppingCartIcon className="h-8 w-8 text-primary" />,
      title: t("ecommerceTitle"),
      description: t("ecommerceDescription"),
    },
    {
      icon: <StoreIcon className="h-8 w-8 text-primary" />,
      title: t("retailTitle"),
      description: t("retailDescription"),
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-primary" />,
      title: t("marketplaceTitle"),
      description: t("marketplaceDescription"),
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-primary" />,
      title: t("saasTitle"),
      description: t("saasDescription"),
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
          {businessTypes.map((type, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
              <CardHeader className="p-0 pb-4">{type.icon}</CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-xl font-bold mb-2">{type.title}</CardTitle>
                <p className="text-gray-500 dark:text-gray-400">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
