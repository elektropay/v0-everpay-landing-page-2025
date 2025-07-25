import type { Messages } from "@/lib/i18n/types"

interface StatsSectionProps {
  dict: Messages
}

export function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.stats.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.stats.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-5xl font-bold">10M+</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.transactions}</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-5xl font-bold">5000+</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.businesses}</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-5xl font-bold">100+</div>
            <p className="text-gray-500 dark:text-gray-400">{dict.stats.countries}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
