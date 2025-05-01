import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"

const features = [
  {
    title: "Instant Onboarding Process",
    description: "Get started quickly with our streamlined onboarding process.",
    icon: <ArrowRight className="h-6 w-6 text-[#4CAF50]" />,
  },
  {
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows.",
    icon: <ArrowRight className="h-6 w-6 text-[#4CAF50]" />,
  },
  {
    title: "Real-time Analytics",
    description: "Track and analyze your payment data in real-time.",
    icon: <ArrowRight className="h-6 w-6 text-[#4CAF50]" />,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Rapidly Penetrate New Markets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scale your business globally with our comprehensive payment solutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="mb-4 h-12 w-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto text-[#4CAF50] hover:text-[#45a049]">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
