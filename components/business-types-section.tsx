import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Messages } from "@/lib/i18n/types"
import type { Locale } from "@/lib/i18n/config"

interface BusinessTypesSectionProps {
  dict: Messages
  lang: Locale
}

export function BusinessTypesSection({ dict, lang }: BusinessTypesSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dict.BusinessTypesSection.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {dict.BusinessTypesSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-6">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">{dict.BusinessTypesSection.ecommerceTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400">{dict.BusinessTypesSection.ecommerceDescription}</p>
                <Link href={`/${lang}/solutions/ecommerce`} passHref>
                  <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">{dict.BusinessTypesSection.retailTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400">{dict.BusinessTypesSection.retailDescription}</p>
                <Link href={`/${lang}/solutions/retail`} passHref>
                  <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">{dict.BusinessTypesSection.marketplaceTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400">{dict.BusinessTypesSection.marketplaceDescription}</p>
                <Link href={`/${lang}/solutions/marketplace`} passHref>
                  <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">{dict.BusinessTypesSection.businessTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400">{dict.BusinessTypesSection.businessDescription}</p>
                <Link href={`/${lang}/solutions/business`} passHref>
                  <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Image
            alt="Business Types"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="400"
            src="/placeholder.png"
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
