import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Control your financial future</h1>
          <p className="text-gray-600 mb-6">Streamline your business payments with our intuitive platform</p>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
}
