"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function generatePaymentDescription(businessType: string) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt: `Write a concise 2-3 sentence payment solution description for a ${businessType} business. Focus on benefits like security, ease of integration, and scalability. Use professional language suitable for a fintech website.`,
  })

  return text
}

export async function generatePersonalizedCopy(userInfo: {
  businessSize: "small" | "medium" | "enterprise"
  industry: string
  region: string
}) {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    system: "You are a fintech copywriting expert who specializes in concise, compelling copy for payment solutions.",
    prompt: `Generate a personalized paragraph about how Everpay's payment solutions can benefit a ${userInfo.businessSize} business in the ${userInfo.industry} industry operating in ${userInfo.region}. Focus on specific pain points and solutions.`,
  })

  return text
}
