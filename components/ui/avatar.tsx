import type * as React from "react"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
}

export function Avatar({ src, alt, size = "md", className, ...props }: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <div className={`relative overflow-hidden rounded-full bg-gray-200 ${sizeClasses[size]} ${className}`} {...props}>
      <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
