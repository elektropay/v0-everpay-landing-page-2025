"use server"

export async function generatePaymentDescription(businessType: string) {
  return `Payment solution for ${businessType} businesses.`
}

export async function generatePersonalizedCopy(userInfo: {
  businessSize: string
  industry: string
  region: string
}) {
  return `Personalized payment solution for ${userInfo.businessSize} ${userInfo.industry} businesses in ${userInfo.region}.`
}
