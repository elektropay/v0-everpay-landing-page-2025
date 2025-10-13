export function StatsSection() {
  const stats = [
    { value: "94%", label: "Customer satisfaction" },
    { value: "$105", label: "Avg. transaction" },
    { value: "1K+", label: "Active businesses" },
    { value: "18%", label: "Annual growth rate" },
  ]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-sm font-semibold text-[#1AA478] uppercase tracking-wider">DIGITAL EXCHANGE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#193638] mt-4 mb-6">Linking Commerce Via Transactions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Efficiently facilitating transactions, our platform seamlessly connects consumers and businesses for digital
            commerce.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-zoom-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-[#193638] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
