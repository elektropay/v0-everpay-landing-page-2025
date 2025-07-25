import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type Props = {
  params: { lang: Locale }
}

export default async function CareersPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  // Placeholder job openings
  const jobOpenings = [
    { id: 1, title: "Senior Software Engineer", location: "Remote" },
    { id: 2, title: "Product Manager", location: "New York, NY" },
    { id: 3, title: "Marketing Specialist", location: "London, UK" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.CareersPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.CareersPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold mb-4">{messages.CareersPage.whyJoinUs}</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>{messages.CareersPage.reason1}</li>
            <li>{messages.CareersPage.reason2}</li>
            <li>{messages.CareersPage.reason3}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{messages.CareersPage.openPositions}</h2>
          <div className="space-y-4 mb-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{job.location}</p>
                </div>
                <Link href={`/${lang}/careers/${job.id}`} passHref>
                  <Button variant="outline">{messages.CareersPage.applyNow}</Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href={`/${lang}/contact`} passHref>
              <Button>{messages.CareersPage.applyNow}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
