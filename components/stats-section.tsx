export default function StatsSection() {
  const stats = [
    {
      value: "94%",
      label: "Customer satisfaction",
    },
    {
      value: "$105",
      label: "Avg. transaction",
    },
    {
      value: "1K+",
      label: "Satisfied merchants",
    },
    {
      value: "18%",
      label: "Revenue growth rate",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">RECENT STATS</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-zoom-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
