import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const businessTypes = [
  {
    title: "Startups",
    description: "Move fast with Everpay's out-of-the-box payments solution",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    cta: "Start building",
  },
  {
    title: "Enterprises",
    description: "Customize and configure payments to fit your business",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    cta: "Contact sales",
  },
  {
    title: "Marketplaces",
    description: "Facilitate payments between multiple parties",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80",
    cta: "Learn about Connect",
  },
]

export function BusinessTypesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built for businesses of all sizes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From startups to Fortune 500s, Everpay powers payments for businesses around the world
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {businessTypes.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={business.image || "/placeholder.svg"}
                  alt={business.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <Button variant="link" className="p-0 h-auto text-[#4CAF50] hover:text-[#45a049]">
                  {business.cta} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
