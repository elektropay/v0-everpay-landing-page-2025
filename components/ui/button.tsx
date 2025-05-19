import type React from "react"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  children: React.ReactNode
  iconRight?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", children, iconRight, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variantStyles: Record<string, string> = {
      default: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
      outline: "border-2 border-current hover:bg-gray-100",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
    }

    const sizeStyles: Record<string, string> = {
      default: "h-10 px-4 py-2 text-sm rounded-md",
      sm: "h-8 px-3 text-sm rounded-md",
      lg: "h-12 px-6 text-base rounded-md",
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        <span>{children}</span>
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    )
  },
)

Button.displayName = "Button"
