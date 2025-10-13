"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
          <span className="text-2xl font-bold text-primary">Everpay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/payments"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Payments
          </Link>
          <Link
            href="/commerce"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Commerce
          </Link>
          <Link
            href="/security"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Security
          </Link>
          <Link
            href="/partners"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transition-transform"
          >
            Partners
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="hover:scale-105 transition-transform" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform shadow-sm"
            asChild
          >
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground animate-rotate-in" />
          ) : (
            <Menu className="h-6 w-6 text-foreground animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-down">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/payments"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 hover:bg-accent rounded-lg px-3 animate-fade-in-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Payments
            </Link>
            <Link
              href="/commerce"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 hover:bg-accent rounded-lg px-3 animate-fade-in-left animation-delay-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Commerce
            </Link>
            <Link
              href="/security"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 hover:bg-accent rounded-lg px-3 animate-fade-in-left animation-delay-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/partners"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 hover:bg-accent rounded-lg px-3 animate-fade-in-left animation-delay-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <div className="pt-4 space-y-2 animate-fade-in-up animation-delay-400">
              <Button variant="ghost" className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
