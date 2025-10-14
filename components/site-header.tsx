"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full animate-slide-down" style={{ backgroundColor: "#193638" }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Everpay Logo" className="h-8 w-8 rounded-lg" />
            <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>
              everpay
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-sm font-medium transition-colors hover:scale-105 duration-200"
              style={{ color: "#ffffff" }}
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium transition-colors hover:scale-105 duration-200"
              style={{ color: "#ffffff" }}
            >
              Solutions
            </Link>
            <Link
              href="/developers"
              className="text-sm font-medium transition-colors hover:scale-105 duration-200"
              style={{ color: "#ffffff" }}
            >
              Developers
            </Link>
            <Link
              href="/company"
              className="text-sm font-medium transition-colors hover:scale-105 duration-200"
              style={{ color: "#ffffff" }}
            >
              Company
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors hover:scale-105 duration-200"
              style={{ color: "#ffffff" }}
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-sm font-medium hover:scale-105 transition-transform duration-200"
              style={{ color: "#ffffff" }}
            >
              Sign In
            </Button>
            <Button
              className="text-sm font-medium hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: "#1aa478", color: "#ffffff" }}
            >
              Get Started
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: "#ffffff" }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link href="/products" className="block text-sm font-medium py-2" style={{ color: "#ffffff" }}>
              Products
            </Link>
            <Link href="/solutions" className="block text-sm font-medium py-2" style={{ color: "#ffffff" }}>
              Solutions
            </Link>
            <Link href="/developers" className="block text-sm font-medium py-2" style={{ color: "#ffffff" }}>
              Developers
            </Link>
            <Link href="/company" className="block text-sm font-medium py-2" style={{ color: "#ffffff" }}>
              Company
            </Link>
            <Link href="/pricing" className="block text-sm font-medium py-2" style={{ color: "#ffffff" }}>
              Pricing
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" style={{ color: "#ffffff" }}>
                Sign In
              </Button>
              <Button className="w-full" style={{ backgroundColor: "#1aa478", color: "#ffffff" }}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
