import { getDictionary } from "@/lib/i18n"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { PaymentPartnersSection } from "@/components/payment-partners-section"
import { PaymentPartnersCarousel } from "@/components/payment-partners-carousel"
import { CheckoutProtectionSection } from "@/components/checkout-protection-section"
import { BusinessTypesSection } from "@/components/business-types-section"
import { CtaSection } from "@/components/cta-section"

interface PageProps {
  params: {
    lang: string
  }
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang)

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PaymentPartnersCarousel />
      <PaymentPartnersSection />
      <CheckoutProtectionSection />
      <BusinessTypesSection />
      <CtaSection />
    </div>
  )
}
