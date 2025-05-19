import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const securityFeatures = [
  {
    title: "Sophisticated Login Protection",
    description: "Multi-factor authentication and advanced security measures.",
  },
  {
    title: "Data-Loss Prevention",
    description: "Automatic backups and encryption for all sensitive data.",
  },
  {
    title: "Proactive Fraud Prevention",
    description: "AI-powered fraud detection and prevention systems.",
  },
]

export function CheckoutProtectionSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">Trusted Checkout Protection</h2>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-[#4CAF50] hover:bg-[#45a049]">Learn About Security</Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Security Features"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
