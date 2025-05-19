"use server"

export type ValidationResult = {
  isValid: boolean
  message: string | null
}

export async function validateBusinessName(input: string): Promise<ValidationResult> {
  return {
    isValid: input.length > 0,
    message: input.length > 0 ? null : "Business name is required",
  }
}

export async function validateEmail(input: string): Promise<ValidationResult> {
  return {
    isValid: true,
    message: null,
  }
}

export async function validateBusinessDescription(input: string): Promise<ValidationResult> {
  return {
    isValid: true,
    message: null,
  }
}

export async function validateWebsite(input: string): Promise<ValidationResult> {
  return {
    isValid: true,
    message: null,
  }
}
