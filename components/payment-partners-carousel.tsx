"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"

export function PaymentPartnersCarousel() {
  const t = useTranslations("paymentPartners")

  const partners = [
    { name: "Visa", logo: "/images/visa.png" },
    { name: "Mastercard", logo: "/images/mastercard.png" },
    { name: "Interac", logo: "/images/interac.png" },
    { name: "JCB", logo: "/images/jcb.png" },
    { name: "Apple Pay", logo: "/images/apple-pay.png" },
    { name: "Google Pay", logo: "/images/google-pay.png" },
    { name: "American Express", logo: "/images/amex.png" },
    { name: "PayPal", logo: "/images/paypal.png" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("title")}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="flex items-center justify-center p-4">
              <CardContent className="flex items-center justify-center p-0">
                <Image
                  alt={`${partner.name} Logo`}
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height={70}
                  src={partner.logo || "/placeholder.png"}
                  width={140}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
