"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
      setStatus("success")
      event.currentTarget.reset()
    } else {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.nameLabel}
        </label>
        <Input id="name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.emailLabel}
        </label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.subjectLabel}
        </label>
        <Select name="subject" required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={dict.contact.generalInquiry} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">{dict.contact.generalInquiry}</SelectItem>
            <SelectItem value="sales">{dict.contact.salesQuestion}</SelectItem>
            <SelectItem value="support">{dict.contact.supportRequest}</SelectItem>
            <SelectItem value="feedback">{dict.contact.feedback}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.messageLabel}
        </label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" className="w-full">
        {dict.contact.submitButton}
      </Button>
      {status === "success" && <p className="mt-4 text-center text-green-600">{dict.contact.successMessage}</p>}
      {status === "error" && <p className="mt-4 text-center text-red-600">{dict.contact.errorMessage}</p>}
    </form>
  )
}
