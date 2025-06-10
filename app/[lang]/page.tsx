import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PaymentPartnersCarousel } from "@/components/payment-partners-carousel"
import { FeaturesSection } from "@/components/features-section"
import { CheckoutProtectionSection } from "@/components/checkout-protection-section"
import { BusinessTypesSection } from "@/components/business-types-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <HeroSection />
        <StatsSection />
        <PaymentPartnersCarousel />
        <FeaturesSection />
        <CheckoutProtectionSection />
        <BusinessTypesSection />
        <CTASection />
      </main>
    </div>
  )
}
