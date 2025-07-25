"use client"

import Image from "next/image"

export function PaymentPartnersCarousel() {
  const partners = [
    { src: "/images/visa.png", alt: "Visa" },
    { src: "/images/mastercard.png", alt: "Mastercard" },
    { src: "/images/interac.png", alt: "Interac" },
    { src: "/images/jcb.png", alt: "JCB" },
    { src: "/images/apple-pay.png", alt: "Apple Pay" },
    { src: "/images/google-pay.png", alt: "Google Pay" },
    { src: "/images/amex.png", alt: "American Express" },
    { src: "/images/paypal.png", alt: "PayPal" },
  ]

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {partners.map((partner, index) => (
          <div key={index} className="mx-4 inline-block">
            <Image
              src={partner.src || "/placeholder.png"}
              alt={partner.alt}
              width={100}
              height={60}
              className="h-12 object-contain grayscale opacity-60 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
        {/* Duplicate partners for seamless looping */}
        {partners.map((partner, index) => (
          <div key={`duplicate-${index}`} className="mx-4 inline-block">
            <Image
              src={partner.src || "/placeholder.png"}
              alt={partner.alt}
              width={100}
              height={60}
              className="h-12 object-contain grayscale opacity-60 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
