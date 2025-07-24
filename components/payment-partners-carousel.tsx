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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Trusted by leading businesses</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* Duplicate partners to create a seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="inline-block mx-8">
                <Image
                  alt={partner.alt}
                  className="h-16 w-auto object-contain"
                  height="64"
                  src={partner.src || "/placeholder.svg"}
                  width="128"
                  unoptimized="true" // Corrected unoptimized prop
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
