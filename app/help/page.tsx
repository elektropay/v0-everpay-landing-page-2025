import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, LifeBuoyIcon, BookOpenIcon, MessageSquareIcon } from "lucide-react"
import Link from "next/link"

interface HelpPageProps {
  params: {
    lang: Locale
  }
}

export default async function HelpPage({ params: { lang } }: HelpPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.footer.helpCenter}</h1>
        <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Find answers to your questions, explore documentation, and get support.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for articles or topics..."
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <LifeBuoyIcon className="h-8 w-8 text-primary" />
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Can't find what you're looking for? Our support team is here to help.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/${lang}/contact`}>
              <Button className="w-full">Get in Touch</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BookOpenIcon className="h-8 w-8 text-primary" />
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Explore our comprehensive documentation for developers and businesses.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/${lang}/docs`}>
              <Button className="w-full">View Docs</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <MessageSquareIcon className="h-8 w-8 text-primary" />
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Find answers to frequently asked questions about Everpay.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/${lang}/help`}>
              <Button className="w-full">Read FAQs</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
