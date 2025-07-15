import Image from "next/image"

const partners = [
  { name: "Visa", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80" },
  {
    name: "Mastercard",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
  },
  {
    name: "American Express",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
  },
  { name: "PayPal", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80" },
  { name: "Apple Pay", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80" },
  {
    name: "Google Pay",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
  },
]

export function PaymentPartnersSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Accept payments from anywhere</h2>
          <p className="text-gray-600">Support for all major payment methods and currencies</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative h-12 w-24 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
