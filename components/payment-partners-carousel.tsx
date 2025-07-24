"use client"

import Image from "next/image"

export function PaymentPartnersCarousel() {
  const partners = [
    { src: "/images/visa.png", alt: "Visa" },
    { src: "/images/mastercard.png", alt: "Mastercard" },
    { src: "/images/amex.png", alt: "American Express" },
    { src: "/images/paypal.png", alt: "PayPal" },
    { src: "/images/apple-pay.png", alt: "Apple Pay" },
    { src: "/images/google-pay.png", alt: "Google Pay" },
    { src: "/images/interac.png", alt: "Interac" },
    { src: "/images/jcb.png", alt: "JCB" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Trusted by leading businesses worldwide
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl mb-12">
          Everpay integrates with all major payment methods and platforms to ensure seamless transactions for your
          customers.
        </p>
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-carousel-slow">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center mx-4">
                <Image
                  alt={partner.alt}
                  className="object-contain max-h-full max-w-full"
                  height="80"
                  src={partner.src || "/placeholder.svg"}
                  style={{
                    aspectRatio: "160/80",
                    objectFit: "contain",
                  }}
                  width="160"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
