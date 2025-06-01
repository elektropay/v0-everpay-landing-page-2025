"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

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

interface FooterLink {
  name: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerLinks: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { name: "Payment", href: "/payment" },
      { name: "Checkout", href: "/checkout" },
      { name: "Terminal", href: "/terminal" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "Docs", href: "/docs" },
      { name: "API Reference", href: "/api-reference" },
      { name: "Guides", href: "/guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
]

export function SiteFooter({ dictionary = {} }: { dictionary?: any }) {
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const router = useRouter()

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country)
    setIsCountryMenuOpen(false)
    router.push(`/${country.locale}${router.pathname}`)
  }

  const footerDictionary = dictionary.footer || {
    copyright: "© {year} Everpay Corp. All rights reserved.",
    legal: {
      cookieSettings: "Cookie Settings",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      security: "Security",
    },
    disclaimer: {
      banking:
        "Banking services are provided by Everpay Banking Partners, Members FDIC. The Everpay Card is issued by Everpay Banking Partners pursuant to licenses from Visa U.S.A. Inc. and Mastercard International.",
      regulation:
        "Everpay Services are regulated as a Money Services Business by FinCEN. Everpay is PCI DSS Level 1 certified, the highest level of security certification in the payments industry.",
    },
  }

  return (
    <footer className="bg-[#081B1E] pt-16 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">Everpay</div>
            <p className="text-sm mb-4">Transform your payments experience</p>
            <div className="relative">
              <button
                onClick={() => setIsCountryMenuOpen(!isCountryMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
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
                      className="flex items-center gap-2 w-full px-3 py-2 text-xs hover:bg-gray-700/50 transition-colors"
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
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">
              {footerDictionary.copyright.replace("{year}", new Date().getFullYear().toString())}
            </p>
            <div className="flex gap-6">
              <Link href="/cookie-policy" className="text-xs hover:text-white transition-colors">
                {footerDictionary.legal.cookieSettings}
              </Link>
              <Link href="/privacy-policy" className="text-xs hover:text-white transition-colors">
                {footerDictionary.legal.privacyPolicy}
              </Link>
              <Link href="/terms" className="text-xs hover:text-white transition-colors">
                {footerDictionary.legal.termsOfService}
              </Link>
              <Link href="/security" className="text-xs hover:text-white transition-colors">
                {footerDictionary.legal.security}
              </Link>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-xs text-gray-400">{footerDictionary.disclaimer.banking}</p>
            <p className="text-xs text-gray-400">{footerDictionary.disclaimer.regulation}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
