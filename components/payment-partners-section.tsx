export default function PaymentPartnersSection() {
  const partners = ["Shopablue", "Lemnias", "Molester", "Flowpeet", "Dropbox", "Payverle"]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            CONNECT YOUR STORE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Linking Commerce Via Transactions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide you 24/7 service to help our customers link their commerce to our marketplace to enhance their
            business growth and transaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="text-center animate-fade-in-up hover:scale-110 transition-transform duration-200 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
