"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PaymentPartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const paymentMethods = [
    { name: "Visa", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop&q=80" },
    {
      name: "Mastercard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "American Express",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=200&h=100&fit=crop&q=80",
    },
    { name: "PayPal", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=100&fit=crop&q=80" },
    {
      name: "Apple Pay",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "Google Pay",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=200&h=100&fit=crop&q=80",
    },
    { name: "Stripe", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=200&h=100&fit=crop&q=80" },
    { name: "Square", image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=200&h=100&fit=crop&q=80" },
    {
      name: "Discover",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=100&fit=crop&q=80",
    },
    { name: "Alipay", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=100&fit=crop&q=80" },
    {
      name: "WeChat Pay",
      image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=200&h=100&fit=crop&q=80",
    },
    { name: "PIX", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop&q=80" },
    {
      name: "Mercado Pago",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=200&h=100&fit=crop&q=80",
    },
    { name: "PagSeguro", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop&q=80" },
    { name: "PayU", image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=200&h=100&fit=crop&q=80" },
    { name: "Boleto", image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=200&h=100&fit=crop&q=80" },
    { name: "OXXO", image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&q=80" },
    { name: "Klarna", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=200&h=100&fit=crop&q=80" },
    { name: "Affirm", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop&q=80" },
    {
      name: "Afterpay",
      image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=200&h=100&fit=crop&q=80",
    },
    { name: "Venmo", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=100&fit=crop&q=80" },
    {
      name: "Cash App",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=200&h=100&fit=crop&q=80",
    },
    { name: "Zelle", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&q=80" },
    {
      name: "Samsung Pay",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&h=100&fit=crop&q=80",
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Trusted Payment Methods Worldwide
          </p>
        </div>
        <div ref={scrollRef} className="flex gap-12 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
          {[...paymentMethods, ...paymentMethods].map((method, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={method.image || "/placeholder.svg"} alt={method.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
