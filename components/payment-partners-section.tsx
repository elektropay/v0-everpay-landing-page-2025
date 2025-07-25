import { PaymentPartnersCarousel } from "@/components/payment-partners-carousel"
import type { Dictionary } from "@/lib/i18n/types"

interface PaymentPartnersSectionProps {
  dict: Dictionary
}

export function PaymentPartnersSection({ dict }: PaymentPartnersSectionProps) {
  const paymentPartners = [
    { src: "/images/visa.png", alt: "Visa" },
    { src: "/images/mastercard.png", alt: "Mastercard" },
    { src: "/images/interac.png", alt: "Interac" },
    { src: "/images/jcb.png", alt: "JCB" },
    { src: "/images/apple-pay.png", alt: "Apple Pay" },
    { src: "/images/google-pay.png", alt: "Google Pay" },
    { src: "/images/amex.png", alt: "American Express" },
    { src: "/images/paypal.png", alt: "PayPal" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.paymentPartners.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.paymentPartners.description}
            </p>
          </div>
        </div>
        <div className="mx-auto py-12">
          <PaymentPartnersCarousel images={paymentPartners} />
        </div>
      </div>
    </section>
  )
}
