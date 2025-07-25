"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Dictionary } from "@/lib/i18n/types"

interface ContactFormProps {
  dict: Dictionary
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
      <div className="grid gap-2">
        <Label htmlFor="name">{dict.contact.nameLabel}</Label>
        <Input id="name" name="name" placeholder="John Doe" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">{dict.contact.emailLabel}</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">{dict.contact.subjectLabel}</Label>
        <Select name="subject" required>
          <SelectTrigger>
            <SelectValue placeholder={dict.contact.subjectLabel} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">{dict.contact.generalInquiry}</SelectItem>
            <SelectItem value="sales">{dict.contact.salesQuestion}</SelectItem>
            <SelectItem value="support">{dict.contact.supportRequest}</SelectItem>
            <SelectItem value="feedback">{dict.contact.feedback}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">{dict.contact.messageLabel}</Label>
        <Textarea id="message" name="message" placeholder="Your message" required className="min-h-[120px]" />
      </div>
      <Button type="submit" className="w-full">
        {dict.contact.submitButton}
      </Button>
      {status === "success" && <p className="text-green-500 text-center mt-4">{dict.contact.successMessage}</p>}
      {status === "error" && <p className="text-red-500 text-center mt-4">{dict.contact.errorMessage}</p>}
    </form>
  )
}
