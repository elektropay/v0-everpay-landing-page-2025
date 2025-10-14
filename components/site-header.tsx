"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1aa478]/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Everpay" className="h-8 w-8" />
            <span className="font-bold text-xl font-['Manrope'] text-[#193638]">Everpay</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/online-payments"
              className="text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Online Payments
            </Link>
            <Link
              href="/fraud-prevention"
              className="text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Fraud Prevention
            </Link>
            <Link
              href="/partners"
              className="text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Partners
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-[#193638] hover:text-[#1aa478] hover:bg-[#e3ffcc]/20 font-['Inter']"
            >
              Sign In
            </Button>
            <Button className="bg-[#1aa478] text-white hover:bg-[#158f63] font-['Inter']">Get Started</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <Menu className="h-6 w-6 text-[#193638]" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/online-payments"
              className="block text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Online Payments
            </Link>
            <Link
              href="/fraud-prevention"
              className="block text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Fraud Prevention
            </Link>
            <Link
              href="/partners"
              className="block text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Partners
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-[#193638] hover:text-[#1aa478] transition-colors font-['Inter']"
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="ghost"
                className="text-[#193638] hover:text-[#1aa478] hover:bg-[#e3ffcc]/20 font-['Inter']"
              >
                Sign In
              </Button>
              <Button className="bg-[#1aa478] text-white hover:bg-[#158f63] font-['Inter']">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
