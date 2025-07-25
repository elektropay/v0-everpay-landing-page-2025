"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Messages } from "@/lib/i18n/types"

interface ContactFormProps {
  dict: Messages
}

export function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("idle")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    console.log({ name, email, subject, message })

    // Simulate success or error based on some condition (e.g., email content)
    if (email && (email as string).includes("@")) {
      setStatus("success")
      event.currentTarget.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dict.contact.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              {dict.contact.nameLabel}
            </label>
            <Input id="name" name="name" placeholder={dict.contact.nameLabel} required />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              {dict.contact.emailLabel}
            </label>
            <Input id="email" name="email" type="email" placeholder={dict.contact.emailLabel} required />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              {dict.contact.subjectLabel}
            </label>
            <Input id="subject" name="subject" placeholder={dict.contact.subjectLabel} required />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              {dict.contact.messageLabel}
            </label>
            <Textarea id="message" name="message" placeholder={dict.contact.messageLabel} rows={5} required />
          </div>
          <Button type="submit" className="w-full">
            {dict.contact.submitButton}
          </Button>
          {status === "success" && <p className="text-center text-green-500 mt-4">{dict.contact.successMessage}</p>}
          {status === "error" && <p className="text-center text-red-500 mt-4">{dict.contact.errorMessage}</p>}
        </form>
      </CardContent>
    </Card>
  )
}
