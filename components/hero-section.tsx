"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32" style={{ backgroundColor: "#193638" }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-medium animate-fade-in"
              style={{ backgroundColor: "#1aa478", color: "#ffffff" }}
            >
              PAYMENT SOLUTIONS
            </div>

            <h1
              className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in-up animate-delay-100"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              Global Shift With Digital Payments
            </h1>

            <p className="text-lg animate-fade-in-up animate-delay-200" style={{ color: "rgba(255,255,255,0.8)" }}>
              We provide seamless payment solutions for businesses of all sizes. Accept payments globally with
              industry-leading security and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Button
                size="lg"
                className="text-base font-medium hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: "#1aa478", color: "#ffffff" }}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium hover:scale-105 transition-transform duration-200 bg-transparent"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                Contact Sales
              </Button>
            </div>

            <div className="flex items-center gap-6 animate-fade-in-up animate-delay-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: "#1aa478" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  No setup fees
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: "#1aa478" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right animate-delay-200">
            <Card className="p-6 shadow-2xl animate-float" style={{ backgroundColor: "#ffffff" }}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: "#193638" }}>
                    Payment Dashboard
                  </span>
                  <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "#e3ffcc", color: "#193638" }}>
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#fbf9f9" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#1aa478" }}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: "#193638" }}>
                          Transaction #12345
                        </div>
                        <div className="text-xs" style={{ color: "#6b7280" }}>
                          2 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold" style={{ color: "#193638" }}>
                        $2,450.00
                      </div>
                      <div className="text-xs" style={{ color: "#1aa478" }}>
                        Completed
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#fbf9f9" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#1aa478" }}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: "#193638" }}>
                          Transaction #12344
                        </div>
                        <div className="text-xs" style={{ color: "#6b7280" }}>
                          5 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold" style={{ color: "#193638" }}>
                        $1,250.00
                      </div>
                      <div className="text-xs" style={{ color: "#1aa478" }}>
                        Completed
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "#fbf9f9" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#1aa478" }}
                      >
                        <span className="text-white font-bold">$</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: "#193638" }}>
                          Transaction #12343
                        </div>
                        <div className="text-xs" style={{ color: "#6b7280" }}>
                          10 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold" style={{ color: "#193638" }}>
                        $3,750.00
                      </div>
                      <div className="text-xs" style={{ color: "#1aa478" }}>
                        Completed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t" style={{ borderColor: "#e5e7eb" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: "#6b7280" }}>
                      Total Volume
                    </span>
                    <span
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)", color: "#193638" }}
                    >
                      $7,450.00
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
