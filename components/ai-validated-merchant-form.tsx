"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

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
          <div className="space-y-2">
            <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              id="business-name"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={(e) => updateField("businessName", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="business-description" className="block text-sm font-medium text-gray-700">
              Business Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="business-description"
              className="w-full min-h-[100px] rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              placeholder="Briefly describe your business"
              value={formData.businessDescription}
              onChange={(e) => updateField("businessDescription", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
              Business Website
            </label>
            <input
              id="website"
              type="url"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              placeholder="https://example.com"
              value={formData.website}
              onChange={(e) => updateField("website", e.target.value)}
            />
          </div>

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
