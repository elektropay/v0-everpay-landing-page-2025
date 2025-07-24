"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const menuItems = [
  {
    title: "Solutions",
    items: [
      { title: "ACH Payments", href: "/solutions/ach-payments" },
      { title: "Credit Card Processing", href: "/solutions/credit-card-processing" },
      { title: "Digital Wallets", href: "/solutions/digital-wallets" },
      { title: "Recurring Billing", href: "/solutions/recurring-billing" },
      { title: "High-Risk Processing", href: "/solutions/high-risk-processing" },
      { title: "E-commerce", href: "/solutions/ecommerce" },
      { title: "Retail", href: "/solutions/retail" },
      { title: "Healthcare", href: "/solutions/healthcare" },
    ],
  },
  {
    title: "Products",
    items: [
      { title: "Payments", href: "/payments" },
      { title: "Online Payments", href: "/online-payments" },
      { title: "Commerce", href: "/commerce" },
      { title: "Fraud Prevention", href: "/fraud-prevention" },
      { title: "Card Acquiring", href: "/products/card-acquiring" },
      { title: "Payment Gateway", href: "/products/payment-gateway" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/api" },
      { title: "Help Center", href: "/help" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Guides", href: "/resources/guides" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
      { title: "Partners", href: "/partners" },
      { title: "Press", href: "/company/press" },
      { title: "Investors", href: "/company/investors" },
    ],
  },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png"
              alt="Everpay"
              className="h-8 w-auto"
              width={32}
              height={32}
              unoptimized="true"
            />
            <Link href="/" className="text-xl font-bold ml-2 text-gray-900 font-sans">
              everpay
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-900 hover:text-gray-700 font-medium text-sm py-2 font-sans">
                  <span>{item.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md font-sans"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/login"
              className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium font-sans"
            >
              <span className="mr-2">👤</span>
              Log in
            </Link>

            <div className="text-gray-700 text-sm font-medium font-sans">Sales: 888-579-5668</div>

            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2 rounded-full text-sm font-medium font-sans">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="text-xl font-bold text-gray-900 font-heading">
                    Everpay
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>

                <div className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    {menuItems.map((item) => (
                      <div key={item.title}>
                        <div className="font-semibold text-gray-900 mb-2 font-heading">{item.title}</div>
                        <div className="space-y-2 ml-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-gray-900 font-sans"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto p-4 border-t space-y-3">
                  <Link
                    href="/login"
                    className="flex items-center font-medium text-gray-900 hover:text-gray-700 font-sans"
                  >
                    <span className="mr-2">👤</span>
                    Log in
                  </Link>
                  <div className="text-gray-900 text-sm font-sans">
                    <span className="font-medium">Sales:</span> 888-579-5668
                  </div>
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full font-sans">
                    Get started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
