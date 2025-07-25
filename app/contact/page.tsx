import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader dict={dict} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.contact.title}</h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {dict.contact.description}
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-xl space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold">{dict.contact.addressTitle}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {dict.contact.addressLine1}
                    <br />
                    {dict.contact.addressLine2}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.contact.contactInfoTitle}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {dict.contact.phone}: {dict.contact.phoneNumber}
                    <br />
                    {dict.contact.email}:{" "}
                    <a className="text-blue-600 hover:underline" href={`mailto:${dict.contact.emailAddress}`}>
                      {dict.contact.emailAddress}
                    </a>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{dict.contact.contactFormTitle}</h3>
                <form className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {dict.contact.formNameLabel}
                      </label>
                      <input
                        id="name"
                        placeholder={dict.contact.formNamePlaceholder}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {dict.contact.formEmailLabel}
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder={dict.contact.formEmailPlaceholder}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {dict.contact.formSubjectLabel}
                    </label>
                    <input
                      id="subject"
                      placeholder={dict.contact.formSubjectPlaceholder}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {dict.contact.formMessageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={dict.contact.formMessagePlaceholder}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    {dict.contact.formSubmitButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict} />
    </div>
  )
}
