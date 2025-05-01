export function StatsSection() {
  const stats = [
    { value: "94%", label: "Customer satisfaction" },
    { value: "$105", label: "Avg. transaction" },
    { value: "1K+", label: "Active businesses" },
    { value: "18%", label: "Annual growth rate" },
  ]

  return (
    <section className="py-16 border-b">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <div className="text-sm font-medium text-[#4CAF50] tracking-wide">DIGITAL EXCHANGE</div>
            <h2 className="text-4xl font-bold text-[#0A2F2F] leading-tight lg:text-5xl">
              Linking Commerce Via Transactions
            </h2>
            <p className="text-gray-600 text-lg">
              Efficiently facilitating transactions, our platform seamlessly connects consumers and businesses for
              digital commerce.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-[#0A2F2F] lg:text-5xl">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
