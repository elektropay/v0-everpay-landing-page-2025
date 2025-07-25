import type { Messages } from "@/lib/i18n/types"

interface StatsSectionProps {
  dict: Messages
}

export function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.stats.title}</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {dict.stats.description}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">{dict.stats.transactions.value}</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{dict.stats.transactions.label}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">{dict.stats.businesses.value}</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{dict.stats.businesses.label}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">{dict.stats.countries.value}</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{dict.stats.countries.label}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl font-bold">{dict.stats.uptime.value}</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{dict.stats.uptime.label}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
