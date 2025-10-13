"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: "99.99%", label: "Uptime SLA", suffix: "" },
    { value: "135", label: "Currencies Supported", suffix: "+" },
    { value: "50", label: "Countries", suffix: "+" },
    { value: "100K", label: "Active Businesses", suffix: "+" },
  ]

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-zoom-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-count-up">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
