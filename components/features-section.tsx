import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GlobeIcon, ShieldCheckIcon, ZapIcon, ScaleIcon, HeadsetIcon, DollarSignIcon } from "lucide-react"
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
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <GlobeIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.features.feature1Title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.features.feature1Description}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheckIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.features.feature2Title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.features.feature2Description}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ZapIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.features.feature3Title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.features.feature3Description}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ScaleIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.features.feature4Title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.features.feature4Description}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HeadsetIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.features.feature5Title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.features.feature5Description}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSignIcon className="h-8 w-8 text-primary" />
              <CardTitle>{dict.features.feature6Title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{dict.features.feature6Description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
