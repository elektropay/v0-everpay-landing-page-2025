"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Messages } from "@/lib/i18n/types"

interface ContactFormProps {
  dict: Messages
}

export function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to an API
    alert("Message sent successfully!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.nameLabel}
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={dict.contact.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.emailLabel}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={dict.contact.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.subjectLabel}
        </label>
        <Select onValueChange={handleSelectChange} value={formData.subject}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={dict.contact.subjectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">{dict.contact.subjectGeneral}</SelectItem>
            <SelectItem value="sales">{dict.contact.subjectSales}</SelectItem>
            <SelectItem value="support">{dict.contact.subjectSupport}</SelectItem>
            <SelectItem value="partnership">{dict.contact.subjectPartnership}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {dict.contact.messageLabel}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={dict.contact.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        {dict.contact.submitButton}
      </Button>
    </form>
  )
}
