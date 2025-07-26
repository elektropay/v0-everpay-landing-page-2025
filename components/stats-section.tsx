export function StatsSection() {
  const stats = [
    {
      value: "$50B+",
      label: "Transactions Processed",
    },
    {
      value: "150+",
      label: "Countries Supported",
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
    },
    {
      value: "10K+",
      label: "Happy Customers",
    },
  ]

  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold text-3xl">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
