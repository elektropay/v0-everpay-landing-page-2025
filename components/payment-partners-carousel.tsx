"use client"

export function PaymentPartnersCarousel() {
  const partners = [
    { name: "Visa", logo: "/images/visa.png" },
    { name: "Mastercard", logo: "/images/mastercard.png" },
    { name: "American Express", logo: "/images/amex.png" },
    { name: "PayPal", logo: "/images/paypal.png" },
    { name: "Apple Pay", logo: "/images/apple-pay.png" },
    { name: "Google Pay", logo: "/images/google-pay.png" },
    { name: "JCB", logo: "/images/jcb.png" },
    { name: "Interac", logo: "/images/interac.png" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-heading">
            Trusted by leading payment networks
          </h2>
          <p className="text-lg text-gray-600 font-sans">Accept payments from all major cards and digital wallets</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex space-x-12 animate-scroll"
            style={{
              width: "calc(200% + 3rem)",
              animationDuration: "30s",
            }}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-24 max-h-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-24 max-h-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
