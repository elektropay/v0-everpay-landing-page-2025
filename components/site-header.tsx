"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "Solutions",
    items: [
      {
        category: "For Individual Locations",
        description: "Attract, retain and engage patients — all on one easy-to-use platform.",
        items: [
          { title: "Dental", href: "/solutions/dental" },
          { title: "Eye Care", href: "/solutions/eye-care" },
          { title: "Medical", href: "/solutions/medical" },
          { title: "Veterinary", href: "/solutions/veterinary" },
          { title: "Medical Spa", href: "/solutions/medical-spa" },
          { title: "Plastic Surgery", href: "/solutions/plastic-surgery" },
          { title: "Physical Therapy", href: "/solutions/physical-therapy" },
          { title: "Mental Health", href: "/solutions/mental-health" },
          { title: "Primary Care", href: "/solutions/primary-care" },
        ],
      },
      {
        category: "For Enterprises",
        description: "Unify multi-office operations.",
        items: [
          { title: "Dental Service Organizations (DSO)", href: "/solutions/dso" },
          { title: "Vision Groups", href: "/solutions/vision-groups" },
          { title: "Medical Groups", href: "/solutions/medical-groups" },
        ],
      },
    ],
  },
  {
    title: "Products",
    items: [
      { title: "Payments", href: "/payments" },
      { title: "Online Payments", href: "/online-payments" },
      { title: "Commerce", href: "/commerce" },
      { title: "Fraud Prevention", href: "/fraud-prevention" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/api" },
      { title: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Contact", href: "/contact" },
      { title: "Partners", href: "/partners" },
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
            <Link href="/" className="text-2xl font-bold text-black" style={{ fontFamily: "Manrope, sans-serif" }}>
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
                <button
                  className="flex items-center space-x-1 text-black hover:text-gray-900 font-bold text-sm py-2"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <span>{item.title}</span>
                  {item.title === "Solutions" && <ChevronDown className="h-4 w-4" />}
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-1 w-screen max-w-4xl bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {item.title === "Solutions" ? (
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-8">
                          {item.items.map((section: any, idx) => (
                            <div key={idx}>
                              <div className="mb-4">
                                <h3
                                  className="font-bold text-gray-900 mb-1"
                                  style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                  {section.category}
                                </h3>
                                <p className="text-sm text-gray-600" style={{ fontFamily: "Manrope, sans-serif" }}>
                                  {section.description}
                                </p>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                {section.items.map((subItem: any) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50 text-sm text-black hover:text-gray-900"
                                    style={{ fontFamily: "Manrope, sans-serif" }}
                                  >
                                    <span>{subItem.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-1">
                          {item.items.map((subItem: any) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md"
                              style={{ fontFamily: "Manrope, sans-serif" }}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/plans"
              className="text-black hover:text-gray-900 font-bold text-sm"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Plans
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="//app.everpayinc.com/login"
              className="flex items-center text-black hover:text-gray-900 text-sm font-bold"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <span className="mr-2 font-bold">👤</span>
              Log in
            </Link>

            <div className="text-gray-700 text-sm font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
              Sales: 888-579-5668
            </div>

            <Button
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2 rounded-full text-sm font-medium"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
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
                  <Link
                    href="/"
                    className="text-xl font-bold text-black"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    everpay
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
                        <div className="font-bold text-black mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                          {item.title}
                        </div>
                        <div className="space-y-2 ml-4">
                          {item.title === "Solutions"
                            ? item.items.map((section: any, idx) => (
                                <div key={idx} className="space-y-2">
                                  <div
                                    className="font-medium text-gray-900 text-sm"
                                    style={{ fontFamily: "Manrope, sans-serif" }}
                                  >
                                    {section.category}
                                  </div>
                                  {section.items.map((subItem: any) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="block text-sm text-grey-600 hover:text-gray-600 ml-4"
                                      style={{ fontFamily: "Manrope, sans-serif" }}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              ))
                            : item.items.map((subItem: any) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block text-sm text-black hover:text-gray-900"
                                  style={{ fontFamily: "Manrope, sans-serif" }}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href="/plans"
                      className="block font-bold text-black"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Plans
                    </Link>
                  </div>
                </div>

                <div className="mt-auto p-4 border-t space-y-3">
                  <Link
                    href="//app.everpayinc.com/login"
                    className="flex items-center text-black hover:text-gray-900"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    span className="mr-2 font-bold">👤</span>
                    Log in
                  </Link>
                  <div className="text-black text-sm font-bold" style={{ fontFamily: "Manrope, sans-serif" }}>
                    Sales: 888-579-5668
                  </div>
                  <Button
                    className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white rounded-full"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
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
