"use client"

export function PaymentPartnersCarousel() {
  const partners = [
    { name: "Visa", logo: "/placeholder.svg?height=32&width=80" },
    { name: "Mastercard", logo: "/placeholder.svg?height=32&width=80" },
    { name: "PayPal", logo: "/placeholder.svg?height=32&width=80" },
    { name: "Apple Pay", logo: "/placeholder.svg?height=32&width=80" },
    { name: "Google Pay", logo: "/placeholder.svg?height=32&width=80" },
  ]

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex h-10 w-32 flex-shrink-0 items-center justify-center grayscale hover:grayscale-0"
            >
              <div className="h-8 w-20 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
