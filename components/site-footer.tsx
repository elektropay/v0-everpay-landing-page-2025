"use client"

import Link from "next/link"
import { useState } from "react"

interface Country {
  code: string
  name: string
  flag: string
  locale: string
  currency: string
}

const countries: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", locale: "en", currency: "USD" },
  { code: "ES", name: "España", flag: "🇪🇸", locale: "es", currency: "EUR" },
  { code: "FR", name: "France", flag: "🇫🇷", locale: "fr", currency: "EUR" },
  { code: "DE", name: "Deutschland", flag: "🇩🇪", locale: "de", currency: "EUR" },
  { code: "CN", name: "中国", flag: "🇨🇳", locale: "zh", currency: "CNY" },
]

const footerLinks = {
  solutions: [
    { name: "ACH Payments", href: "/solutions/ach-payments" },
    { name: "Credit Card Processing", href: "/solutions/credit-card-processing" },
    { name: "Digital Wallets", href: "/solutions/digital-wallets" },
    { name: "Recurring Billing", href: "/solutions/recurring-billing" },
    { name: "High-Risk Processing", href: "/solutions/high-risk-processing" },
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "Retail", href: "/solutions/retail" },
    { name: "Healthcare", href: "/solutions/healthcare" },
  ],
  products: [
    { name: "Payments", href: "/payments" },
    { name: "Online Payments", href: "/online-payments" },
    { name: "Commerce", href: "/commerce" },
    { name: "Fraud Prevention", href: "/fraud-prevention" },
    { name: "Card Acquiring", href: "/products/card-acquiring" },
    { name: "Payment Gateway", href: "/products/payment-gateway" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Help Center", href: "/help" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Guides", href: "/resources/guides" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
    { name: "Press", href: "/company/press" },
    { name: "Investors", href: "/company/investors" },
  ],
}

export function SiteFooter({ dictionary = {} }: { dictionary?: any }) {
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country)
    setIsCountryMenuOpen(false)
  }

  return (
    <footer className="bg-[#081B1E] pt-16 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4 font-heading">Everpay</div>
            <p className="text-sm mb-4 font-sans">Transform your payments experience</p>
            <div className="relative">
              <button
                onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border border-gray-700 hover:border-gray-500 transition-colors font-sans"
              >
                <span>{selectedCountry.flag}</span>
                <span className="text-xs">{selectedCountry.name}</span>
                <svg
                  className={`h-3 w-3 transition-transform ${isCountryMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCountryMenuOpen && (
                <div className="absolute bottom-full mb-2 w-48 bg-[#0A2F2F] border border-gray-700 rounded-lg shadow-lg">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleCountryChange(country)}
                      className="flex items-center gap-2 w-full px-3 py-2 text-xs hover:bg-gray-700/50 transition-colors font-sans"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                      <span className="ml-auto text-gray-400">{country.currency}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-heading">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-heading">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-heading">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-heading">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-xs font-sans">© 2025 Everpay Corp. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/cookie-policy" className="text-xs hover:text-white transition-colors font-sans">
                Cookie Settings
              </Link>
              <Link href="/privacy-policy" className="text-xs hover:text-white transition-colors font-sans">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs hover:text-white transition-colors font-sans">
                Terms of Service
              </Link>
              <Link href="/security" className="text-xs hover:text-white transition-colors font-sans">
                Security
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-gray-400 font-sans">
              Banking services are provided by Everpay Banking Partners, Members FDIC. The Everpay Card is issued by
              Everpay Banking Partners pursuant to licenses from Visa U.S.A. Inc. and Mastercard International.
            </p>
            <p className="text-xs text-gray-400 font-sans">
              Everpay Services are regulated as a Money Services Business by FinCEN. Everpay is PCI DSS Level 1
              certified, the highest level of security certification in the payments industry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
