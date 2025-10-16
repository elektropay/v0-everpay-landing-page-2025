"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/favicon.png" alt="everpay Logo" className="h-8 w-8 rounded-lg" />
          <span
            className={`text-2xl font-bold transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            everpay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/online-payments"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1aa478]" : "text-white hover:text-white/80"
            }`}
          >
            Online Payments
          </Link>
          <Link
            href="/commerce"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1aa478]" : "text-white hover:text-white/80"
            }`}
          >
            Commerce
          </Link>
          <Link
            href="/payments"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1aa478]" : "text-white hover:text-white/80"
            }`}
          >
            Payments
          </Link>
          <Link
            href="/fraud-prevention"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1aa478]" : "text-white hover:text-white/80"
            }`}
          >
            Fraud Prevention
          </Link>
          <Link
            href="/security"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1aa478]" : "text-white hover:text-white/80"
            }`}
          >
            Security
          </Link>
          <Link
            href="/partners"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-[#1aa478]" : "text-white hover:text-white/80"
            }`}
          >
            Partners
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://app.everpayinc.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors px-4 py-2 rounded-full ${
              scrolled
                ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                : "text-white hover:text-white/80 hover:bg-white/10"
            }`}
          >
            Log in
          </a>
          <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#1aa478] hover:bg-[#158f64] text-white rounded-full shadow-lg">Get Started</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
          )}
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
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <a
                href="https://app.everpayinc.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                Log in
              </a>
              <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#1aa478] hover:bg-[#158f64] text-white rounded-full w-full shadow-lg">
                  Get Started
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
