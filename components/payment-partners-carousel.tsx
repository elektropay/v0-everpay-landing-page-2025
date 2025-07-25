"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface PaymentPartnersCarouselProps {
  partners: { src: string; alt: string }[]
}

export function PaymentPartnersCarousel({ partners }: PaymentPartnersCarouselProps) {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="relative"
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="p-1">
                <Image
                  alt={partner.alt}
                  className="aspect-[2/1] object-contain"
                  height="60"
                  src={partner.src || "/placeholder.png"}
                  width="120"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  )
}

// components/ui/carousel.tsx
// This is a simplified version. In a real project, you would use the full shadcn/ui carousel component.
// For brevity, I'm including a minimal version here.
import * as React from "react"
import useEmblaCarousel, { type EmblaCarouselType, type EmblaOptionsType } from "embla-carousel-react"

import { cn } from "@/lib/utils"

type CarouselContextProps = {
  carouselRef: React.MutableRefObject<EmblaCarouselType | null>
  opts: EmblaOptionsType | undefined
  orientation: "horizontal" | "vertical"
  scrollNext: () => void
  scrollPrev: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

type CarouselProps = {
  opts?: EmblaOptionsType
  orientation?: "horizontal" | "vertical"
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const CarouselComponent = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = "horizontal", opts, plugins, children, className, ...props }, ref) => {
    const [carouselRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext()
    }, [emblaApi])

    const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }, [])

    React.useEffect(() => {
      if (!emblaApi) {
        return
      }

      onSelect(emblaApi)
      emblaApi.on("reInit", onSelect)
      emblaApi.on("select", onSelect)
    }, [emblaApi, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          opts,
          orientation,
          scrollNext,
          scrollPrev,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div ref={ref} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
CarouselComponent.displayName = "Carousel"

const CarouselContentComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    )
  },
)
CarouselContentComponent.displayName = "CarouselContent"

const CarouselItemComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    )
  },
)
CarouselItemComponent.displayName = "CarouselItem"

export {
  CarouselComponent as Carousel,
  CarouselContentComponent as CarouselContent,
  CarouselItemComponent as CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
