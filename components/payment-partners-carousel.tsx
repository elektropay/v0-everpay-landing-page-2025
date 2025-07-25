"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const paymentPartners = [
  { src: "/images/visa.png", alt: "Visa" },
  { src: "/images/mastercard.png", alt: "Mastercard" },
  { src: "/images/interac.png", alt: "Interac" },
  { src: "/images/jcb.png", alt: "JCB" },
  { src: "/images/apple-pay.png", alt: "Apple Pay" },
  { src: "/images/google-pay.png", alt: "Google Pay" },
  { src: "/images/amex.png", alt: "American Express" },
  { src: "/images/paypal.png", alt: "PayPal" },
]

export function PaymentPartnersCarousel() {
  return (
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
      className="w-full max-w-full"
    >
      <CarouselContent className="-ml-4">
        {paymentPartners.map((partner, index) => (
          <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-1">
              <Image
                src={partner.src || "/placeholder.png"}
                alt={partner.alt}
                width={120}
                height={60}
                objectFit="contain"
                className="mx-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
