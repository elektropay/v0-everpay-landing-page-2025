import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { PaymentPartnersSection } from "@/components/payment-partners-section"
import { CheckoutProtectionSection } from "@/components/checkout-protection-section"
import { BusinessTypesSection } from "@/components/business-types-section"
import { CtaSection } from "@/components/cta-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Messages } from "@/lib/i18n/types"
import type { Locale } from "@/lib/i18n/config"

interface HomePageContentProps {
  dict: Messages
  lang: Locale
}

export function HomePageContent({ dict, lang }: HomePageContentProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader dict={dict} lang={lang} />
      <main className="flex-1">
        <HeroSection dict={dict} lang={lang} />
        <FeaturesSection dict={dict} />
        <StatsSection dict={dict} />
        <PaymentPartnersSection dict={dict} />
        <CheckoutProtectionSection dict={dict} />
        <BusinessTypesSection dict={dict} />
        <CtaSection dict={dict} lang={lang} />
      </main>
      <SiteFooter dict={dict} lang={lang} />
    </div>
  )
}
