import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import type { Dictionary } from "@/lib/i18n/types"

interface SiteFooterProps {
  dictionary: Dictionary
}

export function SiteFooter({ dictionary }: SiteFooterProps) {
  const footerNav = {
    solutions: [
      { href: "/solutions/ach-payments", text: "ACH Payments" },
      { href: "/solutions/credit-card-processing", text: "Credit Card Processing" },
      { href: "/solutions/digital-wallets", text: "Digital Wallets" },
      { href: "/solutions/recurring-billing", text: "Recurring Billing" },
      { href: "/solutions/high-risk-processing", text: "High-Risk Processing" },
      { href: "/solutions/ecommerce", text: "E-commerce" },
      { href: "/solutions/retail", text: "Retail" },
      { href: "/solutions/healthcare", text: "Healthcare" },
    ],
    products: [
      { href: "/payments", text: "Payments" },
      { href: "/online-payments", text: "Online Payments" },
      { href: "/commerce", text: "Commerce" },
      { href: "/fraud-prevention", text: "Fraud Prevention" },
      { href: "/card-acquiring", text: "Card Acquiring" },
      { href: "/payment-gateway", text: "Payment Gateway" },
    ],
    resources: [
      { href: "/blog", text: "Blog" },
      { href: "/docs", text: "Documentation" },
      { href: "/api", text: "API Reference" },
      { href: "/help", text: "Help Center" },
      { href: "/case-studies", text: "Case Studies" },
      { href: "/guides", text: "Guides" },
    ],
    company: [
      { href: "/about", text: "About Us" },
      { href: "/careers", text: "Careers" },
      { href: "/contact", text: "Contact" },
      { href: "/partners", text: "Partners" },
      { href: "/press", text: "Press" },
      { href: "/investors", text: "Investors" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Link className="flex items-center mb-4" href="/">
            <img
              alt="Everpay Logo"
              className="h-8 w-auto"
              src="/placeholder-logo.svg?height=32&width=120&query=everpay%20logo"
              unoptimized
            />
          </Link>
          <p className="text-sm mb-4">Transform your payments experience</p>
          <div className="flex items-center gap-2 mb-6">
            <img
              alt="United States flag"
              className="h-4 w-6"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBzdGF0ZXMlMjBmbGFnfGVufDB8fHx8MTcwOTg2NTY3MHww&ixlib=rb-4.0.3&q=80&w=400"
              unoptimized
            />
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white rounded-full">
                <SelectValue placeholder="United States" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="gb">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Input
              className="flex-1 bg-gray-800 border-gray-700 text-white rounded-full"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="rounded-full">Subscribe</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-3">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <nav className="grid gap-2">
              {footerNav.solutions.map((link) => (
                <Link key={link.href} className="hover:text-white" href={link.href}>
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <nav className="grid gap-2">
              {footerNav.products.map((link) => (
                <Link key={link.href} className="hover:text-white" href={link.href}>
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <nav className="grid gap-2">
              {footerNav.resources.map((link) => (
                <Link key={link.href} className="hover:text-white" href={link.href}>
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <nav className="grid gap-2">
              {footerNav.company.map((link) => (
                <Link key={link.href} className="hover:text-white" href={link.href}>
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Everpay Corp. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="hover:text-white" href="/cookie-policy">
              Cookie Settings
            </Link>
            <Link className="hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" href="/terms">
              Terms of Service
            </Link>
            <Link className="hover:text-white" href="/security">
              Security
            </Link>
          </nav>
        </div>
        <p className="mt-4 text-xs">
          Banking services are provided by Everpay Banking Partners, Members FDIC. The Everpay Card is issued by Everpay
          Banking Partners pursuant to licenses from Visa U.S.A. Inc. and Mastercard International.
        </p>
      </div>
    </footer>
  )
}
