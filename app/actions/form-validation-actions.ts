"use server"

export type ValidationResult = {
  isValid: boolean
  message: string | null
  correctedValue?: string
}

export async function validateBusinessName(input: string): Promise<ValidationResult> {
  if (!input.trim()) {
    return {
      isValid: false,
      message: "Business name is required",
    }
  }

  return {
    isValid: true,
    message: null,
  }
}

export async function validateBusinessDescription(input: string): Promise<ValidationResult> {
  if (!input.trim()) {
    return {
      isValid: false,
      message: "Description is required",
    }
  }

  if (input.trim().length < 20) {
    return {
      isValid: false,
      message: "Description should be at least 20 characters",
    }
  }

  return {
    isValid: true,
    message: null,
  }
}

export async function validateEmail(input: string): Promise<ValidationResult> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isValid = emailRegex.test(input)

  return {
    isValid,
    message: isValid ? null : "Please enter a valid email address",
  }
}

export async function validateWebsite(input: string): Promise<ValidationResult> {
  if (!input) {
    return { isValid: true, message: null }
  }

  try {
    new URL(input.startsWith("http") ? input : `https://${input}`)
    return { isValid: true, message: null }
  } catch {
    return {
      isValid: false,
      message: "Please enter a valid website URL",
    }
  }
}
