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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.StatsSection.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.StatsSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h3 className="text-4xl font-bold">{dict.StatsSection.stat1Value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.StatsSection.stat1Label}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h3 className="text-4xl font-bold">{dict.StatsSection.stat2Value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.StatsSection.stat2Label}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h3 className="text-4xl font-bold">{dict.StatsSection.stat3Value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.StatsSection.stat3Label}</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h3 className="text-4xl font-bold">{dict.StatsSection.stat4Value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.StatsSection.stat4Label}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
