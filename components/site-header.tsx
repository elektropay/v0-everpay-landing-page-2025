"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/favicon.png" alt="Everpay Logo" className="h-8 w-8 rounded-lg" />
          <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "Manrope, sans-serif" }}>
            Everpay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/online-payments"
            className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
          >
            Online Payments
          </Link>
          <Link href="/commerce" className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors">
            Commerce
          </Link>
          <Link href="/payments" className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors">
            Payments
          </Link>
          <Link
            href="/fraud-prevention"
            className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
          >
            Fraud Prevention
          </Link>
          <Link href="/security" className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors">
            Security
          </Link>
          <Link href="/partners" className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors">
            Partners
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-[#1aa478]">
            Sign In
          </Button>
          <Button className="bg-[#1aa478] hover:bg-[#158f64] text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/online-payments"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Online Payments
            </Link>
            <Link
              href="/commerce"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Commerce
            </Link>
            <Link
              href="/payments"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Payments
            </Link>
            <Link
              href="/fraud-prevention"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fraud Prevention
            </Link>
            <Link
              href="/security"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/partners"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="text-gray-700 hover:text-[#1aa478] w-full">
                Sign In
              </Button>
              <Button className="bg-[#1aa478] hover:bg-[#158f64] text-white w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
