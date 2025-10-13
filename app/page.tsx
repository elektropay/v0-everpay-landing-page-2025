import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import PaymentPartnersSection from "@/components/payment-partners-section"
import FeaturesSection from "@/components/features-section"
import CheckoutProtectionSection from "@/components/checkout-protection-section"
import BusinessTypesSection from "@/components/business-types-section"
import CTASection from "@/components/cta-section"
import SiteFooter from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <PaymentPartnersSection />
        <FeaturesSection />
        <CheckoutProtectionSection />
        <BusinessTypesSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
