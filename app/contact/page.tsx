import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"
import { ContactForm } from "@/components/contact-form"

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.contact.title}</h1>
        <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {dict.contact.description}
        </p>
        <div className="mt-8 w-full">
          <ContactForm dict={dict} />
        </div>
      </div>
    </main>
  )
}

// components/contact-form.tsx
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type { Messages } from "@/lib/i18n/types"

interface ContactFormProps {
  dict: Messages
}

function ContactFormComponent({ dict }: ContactFormProps) {
  return (
    <form className="grid gap-4">
      <Input placeholder={dict.contact.form.namePlaceholder} type="text" />
      <Input placeholder={dict.contact.form.emailPlaceholder} type="email" />
      <Input placeholder={dict.contact.form.subjectPlaceholder} type="text" />
      <Textarea className="min-h-[120px]" placeholder={dict.contact.form.messagePlaceholder} />
      <Button type="submit">{dict.contact.form.submitButton}</Button>
    </form>
  )
}

export { ContactFormComponent as ContactForm }
