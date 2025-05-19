import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const businessTypes = [
  {
    title: "Enterprise",
    description: "Scalable solutions for large organizations",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Small Business",
    description: "Perfect for growing companies",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Startups",
    description: "Launch fast and scale with confidence",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function BusinessTypesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">We Drive Growth for All Business Types</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {businessTypes.map((business, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={business.image || "/placeholder.svg"}
                    alt={business.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <Button variant="link" className="p-0 h-auto text-[#4CAF50] hover:text-[#45a049]">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
