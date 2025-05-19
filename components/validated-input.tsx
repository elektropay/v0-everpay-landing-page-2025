"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"

type ValidationResult = {
  isValid: boolean
  message: string | null
  correctedValue?: string
}

interface ValidatedInputProps {
  id: string
  label: string
  placeholder?: string
  type?: "text" | "email" | "url" | "tel" | "textarea"
  value: string
  onChange: (value: string) => void
  required?: boolean
  minLength?: number
  maxLength?: number
  clientValidations?: ((value: string) => string | null)[]
  aiValidate?: (value: string) => Promise<ValidationResult>
  validateOnBlur?: boolean
  validateOnChange?: boolean
  debounceMs?: number
}

export function ValidatedInput({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
  minLength,
  maxLength,
  clientValidations = [],
  aiValidate,
  validateOnBlur = true,
  validateOnChange = false,
  debounceMs = 800,
}: ValidatedInputProps) {
  const [error, setError] = useState<string | null>(null)
  const [isValidating, setIsValidating] = useState(false)
  const [aiResult, setAiResult] = useState<ValidationResult | null>(null)
  const [isDirty, setIsDirty] = useState(false)

  // Client-side validation
  const validateClientSide = () => {
    // Skip validation if the field is empty and not required
    if (!value.trim() && !required) {
      setError(null)
      return true
    }

    // Required validation
    if (required && value.trim() === "") {
      setError(`${label} is required`)
      return false
    }

    // Min length validation
    if (minLength && value.trim().length < minLength) {
      setError(`${label} must be at least ${minLength} characters`)
      return false
    }

    // Max length validation
    if (maxLength && value.trim().length > maxLength) {
      setError(`${label} must be no more than ${maxLength} characters`)
      return false
    }

    // Custom client validations
    for (const validate of clientValidations) {
      const result = validate(value)
      if (result) {
        setError(result)
        return false
      }
    }

    setError(null)
    return true
  }

  // Handle input change
  const handleChange = (newValue: string) => {
    onChange(newValue)
    setIsDirty(true)
    setAiResult(null)

    if (validateOnChange) {
      validateClientSide()
    }
  }

  // Handle blur event
  const handleBlur = () => {
    if (!isDirty) return

    const isValid = validateClientSide()

    if (isValid && validateOnBlur && aiValidate) {
      setIsValidating(true)
      aiValidate(value)
        .then((result) => {
          setAiResult(result)
          if (!result.isValid) {
            setError(result.message || "Invalid input")
          }
        })
        .catch((err) => {
          console.error("Validation error:", err)
        })
        .finally(() => {
          setIsValidating(false)
        })
    }
  }

  // Apply AI suggestion
  const applySuggestion = () => {
    if (aiResult?.correctedValue) {
      onChange(aiResult.correctedValue)
      setAiResult({
        ...aiResult,
        isValid: true,
        message: "Correction applied",
      })
      setError(null)
    }
  }

  // Determine border color based on validation state
  const getBorderColor = () => {
    if (error) return "border-red-300 focus:ring-red-500"
    if (aiResult?.isValid && isDirty) return "border-green-300 focus:ring-green-500"
    return "border-gray-300 focus:ring-[#4CAF50]"
  }

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        {type === "textarea" ? (
          <textarea
            id={id}
            className={`w-full min-h-[100px] rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${getBorderColor()}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            maxLength={maxLength}
          />
        ) : (
          <input
            id={id}
            type={type}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${getBorderColor()}`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            maxLength={maxLength}
          />
        )}

        {isValidating && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Clock className="h-5 w-5 text-gray-400 animate-pulse" />
          </div>
        )}

        {!isValidating && aiResult?.isValid && isDirty && !error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        )}

        {!isValidating && error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {!error && aiResult?.message && <p className="text-sm text-green-600">{aiResult.message}</p>}

      {aiResult?.correctedValue && error && (
        <Button
          type="button"
          onClick={applySuggestion}
          variant="outline"
          size="sm"
          className="mt-1 text-[#4CAF50] border-[#4CAF50] hover:bg-[#4CAF50]/10"
        >
          Apply suggestion: {aiResult.correctedValue}
        </Button>
      )}
    </div>
  )
}
