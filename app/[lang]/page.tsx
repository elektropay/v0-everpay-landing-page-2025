import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { PaymentPartnersCarousel } from "@/components/payment-partners-carousel"
import { CheckoutProtectionSection } from "@/components/checkout-protection-section"
import { BusinessTypesSection } from "@/components/business-types-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <StatsSection />
      <FeaturesSection />

      <PaymentPartnersCarousel />

      <CheckoutProtectionSection />
      <BusinessTypesSection />

      <CTASection />
    </div>
  )
}
