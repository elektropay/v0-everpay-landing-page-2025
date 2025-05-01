"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generatePaymentDescription } from "@/app/actions/ai-actions"

export function AiSolutionFinder() {
  const [businessType, setBusinessType] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!businessType) return

    setIsLoading(true)
    try {
      const result = await generatePaymentDescription(businessType)
      setDescription(result)
    } catch (error) {
      console.error("Failed to generate description:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">AI Payment Solution Finder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
            What type of business do you run?
          </label>
          <input
            id="business-type"
            type="text"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
            placeholder="e.g., e-commerce, restaurant, retail"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
        </div>

        <Button
          onClick={handleGenerate}
          className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
          disabled={isLoading || !businessType}
        >
          {isLoading ? "Generating..." : "Find the Perfect Solution"}
        </Button>

        {description && (
          <div className="mt-4 rounded-md bg-gray-50 p-4">
            <h3 className="mb-2 font-medium">Recommended Solution:</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
