import { DollarSign, Globe, Code, LifeBuoy } from "lucide-react"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.FeaturesSection.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.FeaturesSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    {dict.FeaturesSection.feature1Title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{dict.FeaturesSection.feature1Description}</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Globe className="h-6 w-6 text-primary" />
                    {dict.FeaturesSection.feature2Title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{dict.FeaturesSection.feature2Description}</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    {dict.FeaturesSection.feature3Title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{dict.FeaturesSection.feature3Description}</p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <LifeBuoy className="h-6 w-6 text-primary" />
                    {dict.FeaturesSection.feature4Title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{dict.FeaturesSection.feature4Description}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="400"
              src="/placeholder.png"
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
