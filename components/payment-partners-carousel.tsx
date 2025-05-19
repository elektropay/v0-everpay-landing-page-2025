export function PaymentPartnersCarousel() {
  const partners = ["Visa", "Mastercard", "PayPal", "American Express", "Discover", "Apple Pay"]

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex h-10 w-32 items-center justify-center rounded-md bg-gray-100 p-2">
              <span className="text-gray-700 font-medium">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
