"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { AiValidatedInput } from "@/components/ai-validated-input"
import {
  validateBusinessName,
  validateBusinessDescription,
  validateWebsite,
} from "@/app/actions/form-validation-actions"

export function AiValidatedMerchantForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessDescription: "",
    website: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setSubmitMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      // Simulate successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitMessage({
        type: "success",
        text: "Merchant application submitted successfully!",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage({
        type: "error",
        text: "An error occurred while submitting the form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Merchant Application</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <AiValidatedInput
            id="business-name"
            label="Business Name"
            placeholder="Enter your business name"
            value={formData.businessName}
            onChange={(value) => updateField("businessName", value)}
            onValidate={validateBusinessName}
          />

          <AiValidatedInput
            id="business-description"
            label="Business Description"
            placeholder="Briefly describe your business"
            type="textarea"
            value={formData.businessDescription}
            onChange={(value) => updateField("businessDescription", value)}
            onValidate={validateBusinessDescription}
          />

          <AiValidatedInput
            id="website"
            label="Business Website"
            placeholder="https://example.com"
            type="url"
            value={formData.website}
            onChange={(value) => updateField("website", value)}
            onValidate={validateWebsite}
          />

          {submitMessage && (
            <div
              className={`p-4 rounded-md ${
                submitMessage.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#45a049]" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-gray-500 border-t pt-4">
        <p>All information is validated using AI to ensure accuracy.</p>
      </CardFooter>
    </Card>
  )
}
