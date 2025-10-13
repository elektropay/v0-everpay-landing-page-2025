"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#193638] backdrop-blur supports-[backdrop-filter]:bg-[#193638]/95 animate-slide-down">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">Digipay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/products"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors hover:scale-105 duration-200"
          >
            Products
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors hover:scale-105 duration-200"
          >
            Solutions
          </Link>
          <Link
            href="/developers"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors hover:scale-105 duration-200"
          >
            Developers
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors hover:scale-105 duration-200"
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors hover:scale-105 duration-200"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
            Contact us
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform duration-200">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#193638] border-t border-white/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/products"
              className="text-sm font-medium text-white/90 hover:text-white py-2 animate-fade-in-left animation-delay-100"
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-white/90 hover:text-white py-2 animate-fade-in-left animation-delay-200"
            >
              Solutions
            </Link>
            <Link
              href="/developers"
              className="text-sm font-medium text-white/90 hover:text-white py-2 animate-fade-in-left animation-delay-300"
            >
              Developers
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-white/90 hover:text-white py-2 animate-fade-in-left animation-delay-400"
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-white/90 hover:text-white py-2 animate-fade-in-left animation-delay-600"
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 pt-4 animate-fade-in-left animation-delay-800">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 w-full">
                Contact us
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
