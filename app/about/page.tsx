import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"
import Image from "next/image"

type Props = {
  params: { lang: Locale }
}

export default async function AboutPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.AboutPage.title}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.AboutPage.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold mb-4">{messages.AboutPage.missionTitle}</h2>
          <p className="mb-6">{messages.AboutPage.missionDescription}</p>

          <h2 className="text-2xl font-bold mb-4">{messages.AboutPage.valuesTitle}</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>{messages.AboutPage.value1}</li>
            <li>{messages.AboutPage.value2}</li>
            <li>{messages.AboutPage.value3}</li>
            <li>{messages.AboutPage.value4}</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{messages.AboutPage.teamTitle}</h2>
          <p className="mb-6">{messages.AboutPage.teamDescription}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mb-4"
                height="128"
                src="/placeholder-user.png"
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width="128"
              />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mb-4"
                height="128"
                src="/placeholder-user.png"
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width="128"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">CTO</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                alt="Team Member"
                className="rounded-full w-32 h-32 object-cover mb-4"
                height="128"
                src="/placeholder-user.png"
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width="128"
              />
              <h3 className="text-xl font-semibold">Emily White</h3>
              <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
