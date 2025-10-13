"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">Everpay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/payments"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Payments
          </Link>
          <Link
            href="/commerce"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Commerce
          </Link>
          <Link
            href="/security"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Security
          </Link>
          <Link
            href="/partners"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Partners
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/payments"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Payments
            </Link>
            <Link
              href="/commerce"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Commerce
            </Link>
            <Link
              href="/security"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Security
            </Link>
            <Link
              href="/partners"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Partners
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
