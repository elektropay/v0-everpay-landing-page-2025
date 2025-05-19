import { AiSolutionFinder } from "@/components/ai-solution-finder"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AiSolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">AI-Powered Payment Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover tailored payment solutions for your business using our AI recommendation engine.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <AiSolutionFinder />
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
