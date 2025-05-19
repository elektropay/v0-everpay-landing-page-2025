"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SimpleMerchantForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    website: "",
  })

  const [errors, setErrors] = useState({
    businessName: "",
    email: "",
    website: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })

    // Clear error when typing
    if (errors[field as keyof typeof errors]) {
      setErrors({
        ...errors,
        [field]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {
      businessName: !formData.businessName.trim() ? "Business name is required" : "",
      email: !formData.email.trim()
        ? "Email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Please enter a valid email"
          : "",
      website: formData.website && !isValidUrl(formData.website) ? "Please enter a valid URL" : "",
    }

    setErrors(newErrors)

    return !Object.values(newErrors).some((error) => error)
  }

  const isValidUrl = (url: string) => {
    try {
      new URL(url.startsWith("http") ? url : `https://${url}`)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setSubmitMessage("Form submitted successfully!")
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Merchant Application</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Business Name *</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.businessName}
                onChange={(e) => handleChange("businessName", e.target.value)}
              />
              {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
              />
              {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
            </div>

            {submitMessage && <div className={submitSuccess ? "text-green-500" : "text-red-500"}>{submitMessage}</div>}

            <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#45a049]" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
