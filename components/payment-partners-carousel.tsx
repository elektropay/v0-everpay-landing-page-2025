"use client"

import Image from "next/image"
import type { Messages } from "@/lib/i18n/types"

interface PaymentPartnersCarouselProps {
  dict: Messages
}

export function PaymentPartnersCarousel({ dict }: PaymentPartnersCarouselProps) {
  const partners = [
    { src: "/images/visa.png", alt: dict.paymentPartners.visa },
    { src: "/images/mastercard.png", alt: dict.paymentPartners.mastercard },
    { src: "/images/amex.png", alt: dict.paymentPartners.amex },
    { src: "/images/paypal.png", alt: dict.paymentPartners.paypal },
    { src: "/images/apple-pay.png", alt: dict.paymentPartners.applePay },
    { src: "/images/google-pay.png", alt: dict.paymentPartners.googlePay },
    { src: "/images/interac.png", alt: dict.paymentPartners.interac },
    { src: "/images/jcb.png", alt: dict.paymentPartners.jcb },
  ]

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {partners.map((partner, index) => (
          <div key={index} className="mx-4 inline-block">
            <Image
              alt={partner.alt}
              className="h-12 object-contain"
              height="48"
              src={partner.src || "/placeholder.svg"}
              style={{
                aspectRatio: "120/48",
                objectFit: "contain",
              }}
              width="120"
            />
          </div>
        ))}
        {/* Duplicate partners for seamless looping */}
        {partners.map((partner, index) => (
          <div key={`duplicate-${index}`} className="mx-4 inline-block">
            <Image
              alt={partner.alt}
              className="h-12 object-contain"
              height="48"
              src={partner.src || "/placeholder.svg"}
              style={{
                aspectRatio: "120/48",
                objectFit: "contain",
              }}
              width="120"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
