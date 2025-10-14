export function PaymentPartnersSection() {
  const partners = [
    { name: "Shopablue", logo: "S" },
    { name: "Lamnias", logo: "L" },
    { name: "Molester", logo: "M" },
    { name: "Flowpeet", logo: "F" },
    { name: "Dropbox", logo: "D" },
    { name: "Payverle", logo: "P" },
  ]

  return (
    <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-8" style={{ color: "#6b7280" }}>
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center animate-fade-in animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: "#193638", color: "#ffffff" }}
                >
                  {partner.logo}
                </div>
                <span className="font-medium text-sm" style={{ color: "#193638" }}>
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
