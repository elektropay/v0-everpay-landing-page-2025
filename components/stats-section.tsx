export function StatsSection() {
  const stats = [
    { value: "94%", label: "Customer satisfaction", delay: "100" },
    { value: "$105", label: "Avg transaction value", delay: "200" },
    { value: "1K+", label: "Active merchants", delay: "300" },
    { value: "18%", label: "Revenue growth rate", delay: "400" },
  ]

  return (
    <section className="py-16" style={{ backgroundColor: "#fbf9f9" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center animate-zoom-in animate-delay-${stat.delay}`}>
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "#193638" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "#6b7280" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
