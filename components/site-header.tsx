"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function SiteHeader() {
  const navLinks = [
    {
      title: "Solutions",
      links: [
        { href: "/solutions/ach-payments", text: "ACH Payments" },
        { href: "/solutions/credit-card-processing", text: "Credit Card Processing" },
        { href: "/solutions/digital-wallets", text: "Digital Wallets" },
        { href: "/solutions/recurring-billing", text: "Recurring Billing" },
        { href: "/solutions/high-risk-processing", text: "High-Risk Processing" },
        { href: "/solutions/ecommerce", text: "E-commerce" },
        { href: "/solutions/retail", text: "Retail" },
        { href: "/solutions/healthcare", text: "Healthcare" },
      ],
    },
    {
      title: "Products",
      links: [
        { href: "/payments", text: "Payments" },
        { href: "/online-payments", text: "Online Payments" },
        { href: "/commerce", text: "Commerce" },
        { href: "/fraud-prevention", text: "Fraud Prevention" },
        { href: "/card-acquiring", text: "Card Acquiring" },
        { href: "/payment-gateway", text: "Payment Gateway" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", text: "Blog" },
        { href: "/docs", text: "Documentation" },
        { href: "/api", text: "API Reference" },
        { href: "/help", text: "Help Center" },
        { href: "/case-studies", text: "Case Studies" },
        { href: "/guides", text: "Guides" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", text: "About Us" },
        { href: "/careers", text: "Careers" },
        { href: "/contact", text: "Contact" },
        { href: "/partners", text: "Partners" },
        { href: "/press", text: "Press" },
        { href: "/investors", text: "Investors" },
      ],
    },
  ]

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
      <Link className="mr-6 flex items-center" href="/">
        <span className="sr-only">Everpay</span>
        <img
          alt="Everpay Logo"
          className="h-8 w-auto"
          src="/placeholder-logo.svg?height=32&width=120&query=everpay%20logo"
          unoptimized
        />
      </Link>
      <nav className="hidden lg:flex gap-6">
        {navLinks.map((section) => (
          <div key={section.title} className="relative group">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              {section.title}
            </Button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-gray-900 rounded-md shadow-lg p-4 min-w-[200px] z-10">
              {section.links.map((link) => (
                <Link key={link.href} className="block px-4 py-2 hover:bg-gray-100 rounded-md" href={link.href}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Button className="rounded-full bg-transparent" variant="outline">
          Sign In
        </Button>
        <Button className="rounded-full">Sign Up</Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              {navLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                  <div className="grid gap-2">
                    {section.links.map((link) => (
                      <Link key={link.href} className="text-gray-700 hover:text-gray-900" href={link.href}>
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
