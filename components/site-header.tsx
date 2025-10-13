"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/solutions" },
    { label: "Developers", href: "/developers" },
    { label: "Resources", href: "/resources" },
    { label: "Pricing", href: "/pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#193638] text-white animate-slide-down">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold">everpay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1"
            >
              {item.label}
              <ChevronDown className="h-3 w-3" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
            <Link href="https://app.everpayinc.com/login">Login</Link>
          </Button>
          <Button className="bg-[#1AA478] text-white hover:bg-[#1AA478]/90 rounded-md" asChild>
            <Link href="https://app.everpayinc.com/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#193638] border-t border-white/10 animate-slide-down">
          <nav className="container py-4 flex flex-col space-y-4 px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2 animate-fade-in-left"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-white/10"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="https://app.everpayinc.com/login">Contact Us</Link>
              </Button>
              <Button
                className="w-full bg-[#1AA478] text-white hover:bg-[#1AA478]/90"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="https://everpayinc.com/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
