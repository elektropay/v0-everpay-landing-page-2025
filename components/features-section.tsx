import { DollarSign, Lock, Code, BarChart, LifeBuoy, Cloud } from "lucide-react"
import type { Messages } from "@/lib/i18n/types"

interface FeaturesSectionProps {
  dict: Messages
}

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.features.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.features.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.features.feature1Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.features.feature1Description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.features.feature2Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.features.feature2Description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.features.feature3Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.features.feature3Description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <BarChart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.features.feature4Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.features.feature4Description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <LifeBuoy className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.features.feature5Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.features.feature5Description}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{dict.features.feature6Title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{dict.features.feature6Description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
