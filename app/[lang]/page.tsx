import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PaymentsSection } from "@/components/payments-section"
import { ExpertsSection } from "@/components/experts-section"
import { AppShowcaseSection } from "@/components/app-showcase-section"
import { ProductsSection } from "@/components/products-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PaymentsSection />
        <ExpertsSection />
        <AppShowcaseSection />
        <ProductsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
