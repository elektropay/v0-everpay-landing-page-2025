"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generatePersonalizedCopy } from "@/app/actions/ai-actions"

const industries = [
  "Retail",
  "E-commerce",
  "Healthcare",
  "Hospitality",
  "Education",
  "Finance",
  "Technology",
  "Manufacturing",
]

const regions = ["North America", "Europe", "Asia-Pacific", "Latin America", "Middle East", "Africa", "Australia"]

export function PersonalizedSolutionGenerator() {
  const [businessSize, setBusinessSize] = useState<"small" | "medium" | "enterprise" | null>(null)
  const [industry, setIndustry] = useState("")
  const [region, setRegion] = useState("")
  const [copy, setCopy] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!businessSize || !industry || !region) return

    setIsLoading(true)
    try {
      const result = await generatePersonalizedCopy({
        businessSize,
        industry,
        region,
      })
      setCopy(result)
    } catch (error) {
      console.error("Failed to generate personalized copy:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const isFormComplete = businessSize && industry && region

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Personalized Payment Solution</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Business Size</label>
            <Select onValueChange={(value) => setBusinessSize(value as any)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select business size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small Business</SelectItem>
                <SelectItem value="medium">Medium Business</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Industry</label>
            <Select onValueChange={setIndustry}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind}>
                    {ind}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Region</label>
            <Select onValueChange={setRegion}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((reg) => (
                  <SelectItem key={reg} value={reg}>
                    {reg}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
          disabled={isLoading || !isFormComplete}
        >
          {isLoading ? "Generating..." : "Generate Personalized Solution"}
        </Button>

        {copy && (
          <div className="mt-4 rounded-md bg-gray-50 p-4">
            <h3 className="mb-2 font-medium">Your Personalized Solution:</h3>
            <p className="text-gray-700">{copy}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
