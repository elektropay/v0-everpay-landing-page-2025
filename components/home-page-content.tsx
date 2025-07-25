import type { Messages } from "@/lib/i18n/types"
import type { Locale } from "@/lib/i18n/config"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { PaymentPartnersSection } from "@/components/payment-partners-section"
import { CheckoutProtectionSection } from "@/components/checkout-protection-section"
import { BusinessTypesSection } from "@/components/business-types-section"
import { CtaSection } from "@/components/cta-section"

interface HomePageContentProps {
  dict: Messages
  lang: Locale
}

export function HomePageContent({ dict, lang }: HomePageContentProps) {
  return (
    <>
      <HeroSection dict={dict} lang={lang} />
      <FeaturesSection dict={dict} />
      <StatsSection dict={dict} />
      <PaymentPartnersSection dict={dict} />
      <CheckoutProtectionSection dict={dict} />
      <BusinessTypesSection dict={dict} />
      <CtaSection dict={dict} lang={lang} />
    </>
  )
}
