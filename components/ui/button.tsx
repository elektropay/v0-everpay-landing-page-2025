"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
  onClick?: () => void
}

export function Button({ children, className = "", variant = "default", onClick }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium"
  const variantStyles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      : "bg-blue-600 text-white hover:bg-blue-700"

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
