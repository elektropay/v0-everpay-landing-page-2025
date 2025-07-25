import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Messages } from "@/lib/i18n/types"
import { GlobeIcon, ShieldCheckIcon, CodeIcon, TrendingUpIcon, HeadsetIcon, DollarSignIcon } from "lucide-react"

interface FeaturesSectionProps {
  dict: Messages
}

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              {dict.features.title}
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              {dict.features.description}
            </h2>
          </div>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GlobeIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.features.feature1Title}</CardTitle>
                <CardDescription>{dict.features.feature1Description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheckIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.features.feature2Title}</CardTitle>
                <CardDescription>{dict.features.feature2Description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CodeIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.features.feature3Title}</CardTitle>
                <CardDescription>{dict.features.feature3Description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <TrendingUpIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.features.feature4Title}</CardTitle>
                <CardDescription>{dict.features.feature4Description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <HeadsetIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.features.feature5Title}</CardTitle>
                <CardDescription>{dict.features.feature5Description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <DollarSignIcon className="h-8 w-8 text-primary" />
              <div className="grid gap-1">
                <CardTitle>{dict.features.feature6Title}</CardTitle>
                <CardDescription>{dict.features.feature6Description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
