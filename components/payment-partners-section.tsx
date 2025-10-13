export function PaymentPartnersSection() {
  const partners = [
    { name: "Shopablue", logo: "SB" },
    { name: "Lemnias", logo: "LM" },
    { name: "Molester", logo: "MT" },
    { name: "Flowpeet", logo: "FP" },
    { name: "Dropbox", logo: "DB" },
    { name: "Payverle", logo: "PV" },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="container px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">{partner.logo}</span>
              </div>
              <span className="text-lg font-semibold">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
