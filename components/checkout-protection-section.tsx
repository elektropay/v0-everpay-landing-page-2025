import { Shield, Lock, CheckCircle } from "lucide-react"
import Image from "next/image"

const securityFeatures = [
  {
    icon: Shield,
    title: "Fraud prevention",
    description: "Machine learning models trained on billions of data points help detect and prevent fraud.",
  },
  {
    icon: Lock,
    title: "Data security",
    description: "Your data is encrypted and stored securely with bank-level security standards.",
  },
  {
    icon: CheckCircle,
    title: "Compliance",
    description: "We're certified to the highest industry standards including PCI DSS Level 1.",
  },
]

export function CheckoutProtectionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Designed to increase conversion and reduce fraud</h2>
            <p className="text-gray-600 mb-8">
              Our machine learning models train on billions of data points and help increase revenue across conversion,
              fraud, and revenue recovery.
            </p>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1563986768494-4dee9223994e?auto=format&fit=crop&q=80"
              alt="Security Dashboard"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
