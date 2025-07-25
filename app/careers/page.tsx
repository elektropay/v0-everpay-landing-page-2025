import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/lib/i18n/navigation"

interface CareersPageProps {
  params: {
    lang: Locale
  }
}

export default async function CareersPage({ params: { lang } }: CareersPageProps) {
  const dict = await getDictionary(lang)

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      location: "San Francisco, CA",
      description: "Join our engineering team to build scalable and secure payment infrastructure.",
    },
    {
      id: 2,
      title: "Product Manager",
      location: "New York, NY",
      description: "Lead the development of new payment products and features.",
    },
    {
      id: 3,
      title: "Sales Executive",
      location: "London, UK",
      description: "Drive revenue growth by expanding our client base in the EMEA region.",
    },
    {
      id: 4,
      title: "Customer Support Specialist",
      location: "Remote",
      description: "Provide exceptional support to our global merchant base.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {dict.header.careers}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join our team and help us shape the future of payments. We're looking for talented individuals who are
                passionate about innovation and making an impact.
              </p>
            </div>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Everpay, we foster a collaborative and inclusive environment where every team member can thrive. We
              offer competitive compensation, comprehensive benefits, and opportunities for professional growth.
            </p>
          </div>
          <Image
            alt="Careers"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="400"
            src="/placeholder.png?height=400&width=600"
            width="600"
          />
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Current Job Openings</h2>
          <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our open positions and find your next career opportunity.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobOpenings.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">{job.description}</p>
                <Button className="mt-4 w-full">
                  <Link href={`/${lang}/careers/${job.id}`}>Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
