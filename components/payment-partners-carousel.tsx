"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const logos = [
  { src: "/images/visa.png", alt: "Visa" },
  { src: "/images/mastercard.png", alt: "Mastercard" },
  { src: "/images/amex.png", alt: "American Express" },
  { src: "/images/paypal.png", alt: "PayPal" },
  { src: "/images/apple-pay.png", alt: "Apple Pay" },
  { src: "/images/google-pay.png", alt: "Google Pay" },
  { src: "/images/interac.png", alt: "Interac" },
  { src: "/images/jcb.png", alt: "JCB" },
]

export function PaymentPartnersCarousel({
  className,
}: {
  className?: string
}) {
  return (
    <section className={cn("py-12 bg-gray-50", className)}>
      <h3 className="mb-6 text-center text-lg font-semibold text-gray-700">
        Trusted by the world’s leading payment networks
      </h3>

      {/* Continuous scroll container */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll gap-12" style={{ animationDuration: "30s" }}>
          {[...logos, ...logos].map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* Tailwind keyframes – automatically picked up by JIT compiler */
