"use client"

import * as React from "react"
import Image from "next/image"

interface PaymentPartnersCarouselProps {
  images: { src: string; alt: string }[]
}

export function PaymentPartnersCarousel({ images }: PaymentPartnersCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const carouselRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${images.length * 100}%` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center justify-center p-4">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
