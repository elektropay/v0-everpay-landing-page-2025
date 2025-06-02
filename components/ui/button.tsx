import type React from "react"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variantStyles = {
      default: "bg-[#4CAF50] text-white hover:bg-[#45a049] focus:ring-[#4CAF50]",
      outline: "border-2 border-current hover:bg-white/10",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
    }
    const sizeStyles = {
      default: "h-10 px-4 py-2 text-sm rounded-full",
      sm: "h-8 px-3 text-sm rounded-full",
      lg: "h-12 px-8 text-base rounded-full",
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
