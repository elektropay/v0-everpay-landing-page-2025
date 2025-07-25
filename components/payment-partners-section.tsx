import { PaymentPartnersCarousel } from "@/components/payment-partners-carousel"
import type { Messages } from "@/lib/i18n/types"

interface PaymentPartnersSectionProps {
  dict: Messages
}

export function PaymentPartnersSection({ dict }: PaymentPartnersSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.paymentPartners.title}</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
          {dict.paymentPartners.description}
        </p>
        <PaymentPartnersCarousel dict={dict} />
      </div>
    </section>
  )
}
