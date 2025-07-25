"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { Messages } from "@/lib/i18n/types"

interface PaymentPartnersCarouselProps {
  dict: Messages
}

export function PaymentPartnersCarousel({ dict }: PaymentPartnersCarouselProps) {
  const paymentPartners = [
    { src: "/images/visa.png", alt: dict.PaymentPartnersSection.visa },
    { src: "/images/mastercard.png", alt: dict.PaymentPartnersSection.mastercard },
    { src: "/images/amex.png", alt: dict.PaymentPartnersSection.amex },
    { src: "/images/paypal.png", alt: dict.PaymentPartnersSection.paypal },
    { src: "/images/apple-pay.png", alt: dict.PaymentPartnersSection.applePay },
    { src: "/images/google-pay.png", alt: dict.PaymentPartnersSection.googlePay },
    { src: "/images/interac.png", alt: dict.PaymentPartnersSection.interac },
    { src: "/images/jcb.png", alt: dict.PaymentPartnersSection.jcb },
  ]

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto"
    >
      <CarouselContent>
        {paymentPartners.map((partner, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    alt={partner.alt}
                    className="object-contain"
                    height="100"
                    src={partner.src || "/placeholder.png"}
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "contain",
                    }}
                    width="150"
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
