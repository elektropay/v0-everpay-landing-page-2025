"use client"

import { useEffect, useState } from "react"

export function PaymentPartnersCarousel() {
  const partners = [
    { name: "Visa", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Mastercard", logo: "/placeholder.svg?height=60&width=120" },
    { name: "American Express", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PayPal", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Apple Pay", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Google Pay", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Stripe", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Square", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [partners.length])

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-8 animate-pulse">
        {partners.map((partner, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-muted rounded-lg">
            <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
