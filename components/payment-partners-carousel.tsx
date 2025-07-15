"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const paymentPartners = [
  {
    name: "Visa",
    logo: "/images/visa.png",
  },
  {
    name: "Mastercard",
    logo: "/images/mastercard.png",
  },
  {
    name: "American Express",
    logo: "/images/amex.png",
  },
  {
    name: "PayPal",
    logo: "/images/paypal.png",
  },
  {
    name: "Apple Pay",
    logo: "/images/apple-pay.png",
  },
  {
    name: "Google Pay",
    logo: "/images/google-pay.png",
  },
  {
    name: "JCB",
    logo: "/images/jcb.png",
  },
  {
    name: "Interac",
    logo: "/images/interac.png",
  },
]

export function PaymentPartnersCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const duration = 30000 // 30 seconds for one complete cycle
    const start = Date.now()
    const totalWidth = paymentPartners.length * 200 // Assuming each logo takes ~200px

    const animate = () => {
      const now = Date.now()
      const elapsed = now - start
      const progress = (elapsed % duration) / duration
      setScrollPosition(-progress * totalWidth)
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Accept payments from anywhere</h2>
        <p className="text-gray-600 text-center">Support for all major payment methods and currencies</p>
      </div>
      <div className="relative">
        <div
          className="flex items-center gap-16 transition-transform duration-1000"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {/* Original set */}
          {paymentPartners.map((partner, index) => (
            <div
              key={index}
              className={cn(
                "flex h-16 w-40 flex-shrink-0 items-center justify-center",
                "grayscale transition-all duration-300 hover:grayscale-0",
              )}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={160}
                height={64}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {paymentPartners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className={cn(
                "flex h-16 w-40 flex-shrink-0 items-center justify-center",
                "grayscale transition-all duration-300 hover:grayscale-0",
              )}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={160}
                height={64}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}
