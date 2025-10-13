export function StatsSection() {
  const stats = [
    { value: "$2.5B+", label: "Processed annually" },
    { value: "135+", label: "Currencies supported" },
    { value: "99.99%", label: "Uptime guarantee" },
    { value: "<1s", label: "Average response time" },
  ]

  return (
    <section className="border-y border-border bg-muted/50 py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
