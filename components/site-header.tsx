"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const menuItems = [
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
    title: "Solutions",
    items: [
      { title: "Security", href: "/security" },
      { title: "Partners", href: "/partners" },
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Careers", href: "/careers" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms", href: "/terms" },
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
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-9">
          <Link href="/" className={`text-xl font-bold ${scrolled ? "text-[#0A2F2F]" : "text-white"}`}>
            Everpay
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className={`group flex items-center gap-1 outline-none ${
                    scrolled ? "text-gray-600 hover:text-[#4CAF50]" : "text-white hover:text-white/80"
                  }`}
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="hidden group-hover:block absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border p-2 min-w-[200px]">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-full ${scrolled ? "" : "text-white hover:text-white hover:bg-white/10"}`}
            >
              Sign in
            </Button>
            <Button size="sm" className="rounded-full bg-[#4CAF50] hover:bg-[#45a049]">
              Try for free
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden rounded-full ${scrolled ? "" : "text-white hover:bg-white/10"}`}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0 bg-[#0A2F2F] border-none">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <Link href="/" className="text-xl font-bold text-white">
                    Everpay
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <Accordion type="single" collapsible className="w-full">
                    {menuItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b-0 px-4">
                        <AccordionTrigger className="py-4 text-white hover:no-underline text-xl font-semibold">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pt-1">
                          <div className="flex flex-col space-y-3">
                            {item.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <div className="mt-auto p-4 border-t border-white/10 space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/5 rounded-lg">
                    Sign in
                  </Button>
                  <Button className="w-full justify-start bg-[#4CAF50] hover:bg-[#45a049] rounded-lg">
                    Try for free
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
