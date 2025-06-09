import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function HomePage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <SiteFooter />
    </div>
  )
}
