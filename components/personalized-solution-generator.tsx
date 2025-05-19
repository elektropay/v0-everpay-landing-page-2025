"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PersonalizedSolutionGenerator() {
  const [businessSize, setBusinessSize] = useState("")
  const [industry, setIndustry] = useState("")
  const [region, setRegion] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [recommendation, setRecommendation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setRecommendation(
        `Personalized payment solution for ${businessSize} businesses in the ${industry} industry, optimized for the ${region} market.`,
      )
      setIsLoading(false)
    }, 1500)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Personalized Solution Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="business-size" className="block text-sm font-medium text-gray-700">
              Business Size
            </label>
            <select
              id="business-size"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              value={businessSize}
              onChange={(e) => setBusinessSize(e.target.value)}
              required
            >
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              id="industry"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            >
              <option value="">Select industry</option>
              <option value="Retail">Retail</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Professional Services">Professional Services</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
              Region
            </label>
            <select
              id="region"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#4CAF50] focus:outline-none focus:ring-1 focus:ring-[#4CAF50]"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="">Select region</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Latin America">Latin America</option>
              <option value="Middle East & Africa">Middle East & Africa</option>
            </select>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#4CAF50] hover:bg-[#45a049]"
            disabled={isLoading || !businessSize || !industry || !region}
          >
            {isLoading ? "Generating..." : "Generate Recommendation"}
          </Button>
        </form>

        {recommendation && (
          <div className="mt-6 rounded-md bg-gray-50 p-4">
            <h3 className="mb-2 font-medium">Your Personalized Recommendation:</h3>
            <p className="text-gray-700">{recommendation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
