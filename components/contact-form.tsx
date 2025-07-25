"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
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

    if (name && email && subject && message) {
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", { name, email, subject, message })
      setStatus("success")
    } else {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.ContactPage.nameLabel}
        </label>
        <Input id="name" name="name" type="text" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.ContactPage.emailLabel}
        </label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.ContactPage.subjectLabel}
        </label>
        <Input id="subject" name="subject" type="text" required className="mt-1" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.ContactPage.messageLabel}
        </label>
        <Textarea id="message" name="message" required rows={5} className="mt-1" />
      </div>
      <Button type="submit" className="w-full">
        {dict.ContactPage.submitButton}
      </Button>
      {status === "success" && <p className="text-green-600 text-center mt-4">{dict.ContactPage.successMessage}</p>}
      {status === "error" && <p className="text-red-600 text-center mt-4">{dict.ContactPage.errorMessage}</p>}
    </form>
  )
}
