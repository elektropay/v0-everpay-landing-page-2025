import Image from "next/image"

const paymentPartners = [
  { name: "Stripe", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
  { name: "PayPal", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
  { name: "Square", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
  { name: "Shopify", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
  { name: "Stripe", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
  { name: "PayPal", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3" },
]

export function PaymentPartnersSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 py-8">
        {paymentPartners.map((partner, index) => (
          <div key={index} className="grayscale hover:grayscale-0 transition-all">
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
