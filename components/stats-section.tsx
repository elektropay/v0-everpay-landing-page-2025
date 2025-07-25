import type { Messages } from "@/lib/i18n/types"

interface StatsSectionProps {
  dict: Messages
}

export function StatsSection({ dict }: StatsSectionProps) {
  const stats = [
    { value: dict.stats.transactions.value, label: dict.stats.transactions.label },
    { value: dict.stats.businesses.value, label: dict.stats.businesses.label },
    { value: dict.stats.countries.value, label: dict.stats.countries.label },
    { value: dict.stats.growth.value, label: dict.stats.growth.label },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50">{stat.value}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
