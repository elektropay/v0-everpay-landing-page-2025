import type { Messages } from "@/lib/i18n/types"

interface StatsSectionProps {
  dict: Messages
}

export function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dict.stats.title}</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
          {dict.stats.description}
        </p>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">100M+</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.transactions}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">10K+</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.businesses}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">150+</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.countries}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">30%</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.growth}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
