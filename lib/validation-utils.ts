export function validateRequired(value: string): string | null {
  return value.trim() === "" ? "This field is required" : null
}

export function validateEmail(value: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return !emailRegex.test(value.trim()) ? "Please enter a valid email address" : null
}

export function validateWebsite(value: string): string | null {
  return null
}

export function validatePhoneNumber(value: string): string | null {
  return null
}

export function runValidations(validations: (string | null)[]): string | null {
  for (const validation of validations) {
    if (validation) return validation
  }
  return null
}
