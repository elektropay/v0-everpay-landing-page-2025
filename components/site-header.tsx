"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">EverPay</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-foreground/80">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/solutions/business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Business
                  </Link>
                  <Link href="/solutions/ecommerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    E-commerce
                  </Link>
                  <Link
                    href="/solutions/marketplace"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Marketplace
                  </Link>
                  <Link href="/solutions/retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Retail
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-foreground/80">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/payments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Payments
                  </Link>
                  <Link href="/online-payments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Online Payments
                  </Link>
                  <Link href="/pos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Point of Sale
                  </Link>
                  <Link href="/issuing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Card Issuing
                  </Link>
                  <Link href="/gateway" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Payment Gateway
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-foreground/80">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Documentation
                  </Link>
                  <Link href="/api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    API
                  </Link>
                  <Link href="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Help Center
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link className="flex items-center" href="/" onClick={() => setIsOpen(false)}>
              <span className="font-bold">EverPay</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-3">
                  <h4 className="font-medium">Solutions</h4>
                  <Link href="/solutions/business" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Business
                  </Link>
                  <Link href="/solutions/ecommerce" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    E-commerce
                  </Link>
                  <Link
                    href="/solutions/marketplace"
                    className="text-muted-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    Marketplace
                  </Link>
                  <Link href="/solutions/retail" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Retail
                  </Link>
                </div>
                <div className="flex flex-col space-y-3">
                  <h4 className="font-medium">Products</h4>
                  <Link href="/payments" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Payments
                  </Link>
                  <Link href="/online-payments" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Online Payments
                  </Link>
                  <Link href="/pos" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Point of Sale
                  </Link>
                  <Link href="/issuing" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Card Issuing
                  </Link>
                  <Link href="/gateway" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Payment Gateway
                  </Link>
                </div>
                <div className="flex flex-col space-y-3">
                  <h4 className="font-medium">Resources</h4>
                  <Link href="/docs" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Documentation
                  </Link>
                  <Link href="/api" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    API
                  </Link>
                  <Link href="/help" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Help Center
                  </Link>
                  <Link href="/blog" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                </div>
                <Link href="/about" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-muted-foreground" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="mr-6 flex items-center space-x-2 md:hidden" href="/">
              <span className="font-bold">EverPay</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="ml-2">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
