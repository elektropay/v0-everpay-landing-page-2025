"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const paymentPartners = [
  {
    name: "Stripe",
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  },
  {
    name: "PayPal",
    logo: "https://cdn.worldvectorlogo.com/logos/paypal.svg",
  },
  {
    name: "Square",
    logo: "https://cdn.worldvectorlogo.com/logos/square.svg",
  },
  {
    name: "Adyen",
    logo: "https://cdn.worldvectorlogo.com/logos/adyen.svg",
  },
  {
    name: "Worldpay",
    logo: "https://cdn.worldvectorlogo.com/logos/worldpay.svg",
  },
  {
    name: "Braintree",
    logo: "https://cdn.worldvectorlogo.com/logos/braintree.svg",
  },
  {
    name: "Klarna",
    logo: "https://cdn.worldvectorlogo.com/logos/klarna-1.svg",
  },
  {
    name: "Visa",
    logo: "https://cdn.worldvectorlogo.com/logos/visa.svg",
  },
  {
    name: "Mastercard",
    logo: "https://cdn.worldvectorlogo.com/logos/mastercard.svg",
  },
]

export function PaymentPartnersCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const duration = 20000 // 20 seconds for one complete cycle
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
                "flex h-10 w-32 flex-shrink-0 items-center justify-center",
                "grayscale transition-all duration-300 hover:grayscale-0",
              )}
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
          {/* Duplicate set for seamless loop */}
          {paymentPartners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className={cn(
                "flex h-10 w-32 flex-shrink-0 items-center justify-center",
                "grayscale transition-all duration-300 hover:grayscale-0",
              )}
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
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}
