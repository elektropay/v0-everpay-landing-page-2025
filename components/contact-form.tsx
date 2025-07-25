"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import type { Messages } from "@/lib/i18n/types"

interface ContactFormProps {
  dict: Messages
}

export function ContactForm({ dict }: ContactFormProps) {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("idle") // Reset status

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
      console.log("Form submitted:", formData)
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("nameLabel")}
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("emailLabel")}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("subjectLabel")}
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("messageLabel")}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 block w-full"
        />
      </div>
      <Button type="submit" className="w-full">
        {t("submitButton")}
      </Button>
      {status === "success" && <p className="text-center text-green-600 mt-4">{t("successMessage")}</p>}
      {status === "error" && <p className="text-center text-red-600 mt-4">{t("errorMessage")}</p>}
    </form>
  )
}
