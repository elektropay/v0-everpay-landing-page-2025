export default function PaymentPartnersSection() {
  const partners = ["Shopablue", "Lemnias", "Molester", "Flowpeet", "Dropbox", "Payverle"]

  return (
    <section className="py-16 animate-fade-in" style={{ backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-medium mb-8 animate-fade-in-up" style={{ color: "#6b7280" }}>
          TRUSTED BY LEADING COMPANIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center transition-transform duration-200 hover:scale-110">
              <span className="text-lg font-semibold" style={{ color: "#193638" }}>
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
