"use client"
import { useTranslations } from "next-intl"
import { PaymentPartnersCarousel } from "./payment-partners-carousel"
import type { Messages } from "@/lib/i18n/types"

interface PaymentPartnersSectionProps {
  dict: Messages
}

export function PaymentPartnersSection({ dict }: PaymentPartnersSectionProps) {
  const t = useTranslations("paymentPartners")
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
        <PaymentPartnersCarousel />
      </div>
    </section>
  )
}
