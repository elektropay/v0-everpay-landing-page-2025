"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface PaymentPartnersCarouselProps {
  partners: { src: string; alt: string }[]
}

export function PaymentPartnersCarousel({ partners }: PaymentPartnersCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={partner.src || "/placeholder.png"}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
