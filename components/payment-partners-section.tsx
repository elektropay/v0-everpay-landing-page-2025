import Image from "next/image"

export function PaymentPartnersSection() {
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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Supported Payment Methods</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
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
    </section>
  )
}
