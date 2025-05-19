// Basic validation functions for client-side validation

export const validateRequired = (value: string, fieldName: string): string | null => {
  return value.trim() === "" ? `${fieldName} is required` : null
}

export const validateMinLength = (value: string, minLength: number, fieldName: string): string | null => {
  return value.trim().length < minLength ? `${fieldName} must be at least ${minLength} characters long` : null
}

export const validateMaxLength = (value: string, maxLength: number, fieldName: string): string | null => {
  return value.trim().length > maxLength ? `${fieldName} must be no more than ${maxLength} characters long` : null
}

export const validateEmail = (value: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return !emailRegex.test(value.trim()) ? "Please enter a valid email address" : null
}

export const validateWebsite = (value: string): string | null => {
  if (value.trim() === "") return null // Allow empty website

  try {
    new URL(value.trim().startsWith("http") ? value.trim() : `https://${value.trim()}`)
    return null
  } catch {
    return "Please enter a valid website URL (e.g., https://example.com)"
  }
}

export const validatePhoneNumber = (value: string): string | null => {
  // Basic phone validation - allows various formats
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  return value.trim() !== "" && !phoneRegex.test(value.trim()) ? "Please enter a valid phone number" : null
}

// Helper to run multiple validations and return the first error
export const runValidations = (validations: (string | null)[]): string | null => {
  for (const validation of validations) {
    if (validation) return validation
  }
  return null
}
