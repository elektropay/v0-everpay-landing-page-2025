// Simple validation functions
export function isRequired(value: string): boolean {
  return value.trim().length > 0
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isUrl(value: string): boolean {
  try {
    new URL(value.startsWith("http") ? value : `https://${value}`)
    return true
  } catch {
    return false
  }
}
