import Image from "next/image"
import type { Messages } from "@/lib/i18n/types"

interface PaymentPartnersSectionProps {
  dict: Messages
}

export function PaymentPartnersSection({ dict }: PaymentPartnersSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.PaymentPartnersSection.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.PaymentPartnersSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          <Image
            alt={dict.PaymentPartnersSection.visa}
            className="mx-auto object-contain"
            height="50"
            src="/images/visa.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.mastercard}
            className="mx-auto object-contain"
            height="50"
            src="/images/mastercard.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.amex}
            className="mx-auto object-contain"
            height="50"
            src="/images/amex.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.paypal}
            className="mx-auto object-contain"
            height="50"
            src="/images/paypal.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.applePay}
            className="mx-auto object-contain"
            height="50"
            src="/images/apple-pay.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.googlePay}
            className="mx-auto object-contain"
            height="50"
            src="/images/google-pay.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.interac}
            className="mx-auto object-contain"
            height="50"
            src="/images/interac.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
          <Image
            alt={dict.PaymentPartnersSection.jcb}
            className="mx-auto object-contain"
            height="50"
            src="/images/jcb.png"
            style={{
              aspectRatio: "100/50",
              objectFit: "contain",
            }}
            width="100"
          />
        </div>
      </div>
    </section>
  )
}
