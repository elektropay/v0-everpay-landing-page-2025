"use client"

import Image from "next/image"

export function PaymentPartnersCarousel() {
  const partners = [
    { name: "Visa", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Mastercard", logo: "/placeholder.svg?height=40&width=120" },
    { name: "PayPal", logo: "/placeholder.svg?height=40&width=120" },
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
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={48}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
