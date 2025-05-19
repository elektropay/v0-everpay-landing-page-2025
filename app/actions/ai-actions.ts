"use server"

export async function generatePaymentDescription(businessType: string): Promise<string> {
  // In a real application, this would call an AI service
  return `Based on your ${businessType} business, we recommend our Integrated Payment Platform which includes online payments, point-of-sale integration, and fraud protection tailored for your industry.`
}

export async function generatePersonalizedCopy(userInfo: {
  businessSize: string
  industry: string
  region: string
}): Promise<string> {
  // In a real application, this would call an AI service
  return `Personalized payment solution for ${userInfo.businessSize} ${userInfo.industry} businesses in ${userInfo.region}.`
}
