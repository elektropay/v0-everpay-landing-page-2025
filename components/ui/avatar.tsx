interface AvatarProps {
  src?: string
  alt: string
  className?: string
}

export function Avatar({ alt, className = "" }: AvatarProps) {
  return (
    <div className={`relative h-10 w-10 overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs font-medium">
        {alt.charAt(0).toUpperCase()}
      </div>
    </div>
  )
}
