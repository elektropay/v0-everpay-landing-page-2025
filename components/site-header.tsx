"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-br from-white via-green-50 to-white backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/favicon.png" alt="Everpay Logo" className="h-8 w-8 rounded-lg" />
          <span className="text-2xl font-bold text-black" style={{ fontFamily: "Manrope, sans-serif" }}>
            everpay
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-sm font-medium text-black hover:text-black/80 transition-colors"
              onMouseEnter={() => setActiveMegaMenu("solutions")}
            >
              <span>Solutions</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "solutions" && (
              <div
                className="absolute left-0 top-full pt-2 w-screen max-w-4xl"
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">For Individual Locations</h3>
                      <p className="text-xs text-gray-500 mb-4">
                        Attract, retain and engage customers — all on one easy-to-use platform.
                      </p>
                      <div className="space-y-3">
                        <Link
                          href="/solutions/retail"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🛍️</span>
                          <span>Retail & E-commerce</span>
                        </Link>
                        <Link
                          href="/solutions/saas"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>💻</span>
                          <span>SaaS & Subscriptions</span>
                        </Link>
                        <Link
                          href="/solutions/marketplace"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🏪</span>
                          <span>Marketplaces</span>
                        </Link>
                        <Link
                          href="/solutions/fintech"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>💳</span>
                          <span>Fintech</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">For Enterprises</h3>
                      <p className="text-xs text-gray-500 mb-4">Unify multi-office operations.</p>
                      <div className="space-y-3">
                        <Link
                          href="/solutions/enterprise"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🏢</span>
                          <span>Enterprise Solutions</span>
                        </Link>
                        <Link
                          href="/solutions/global"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🌍</span>
                          <span>Global Payments</span>
                        </Link>
                        <Link
                          href="/solutions/platform"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>⚡</span>
                          <span>Platform Payments</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-sm font-medium text-black hover:text-black/80 transition-colors"
              onMouseEnter={() => setActiveMegaMenu("products")}
            >
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "products" && (
              <div
                className="absolute left-0 top-full pt-2 w-screen max-w-4xl"
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Payment Processing</h3>
                      <div className="space-y-3">
                        <Link
                          href="/online-payments"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>💳</span>
                          <span>Online Payments</span>
                        </Link>
                        <Link
                          href="/commerce"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🛒</span>
                          <span>Commerce</span>
                        </Link>
                        <Link
                          href="/payments"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>📱</span>
                          <span>Payment Methods</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Business Operations</h3>
                      <div className="space-y-3">
                        <Link
                          href="/fraud-prevention"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🛡️</span>
                          <span>Fraud Prevention</span>
                        </Link>
                        <Link
                          href="/security"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🔒</span>
                          <span>Security</span>
                        </Link>
                        <Link
                          href="/partners"
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#1aa478] transition-colors"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          <span>🤝</span>
                          <span>Partners</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-sm font-medium text-black hover:text-black/80 transition-colors"
              onMouseEnter={() => setActiveMegaMenu("resources")}
            >
              <span>Resources</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "resources" && (
              <div className="absolute left-0 top-full pt-2 w-48" onMouseLeave={() => setActiveMegaMenu(null)}>
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <div className="space-y-2">
                    <Link
                      href="/blog"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1aa478] rounded transition-colors"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1aa478] rounded transition-colors"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1aa478] rounded transition-colors"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-sm font-medium text-black hover:text-black/80 transition-colors"
              onMouseEnter={() => setActiveMegaMenu("company")}
            >
              <span>Company</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {activeMegaMenu === "company" && (
              <div className="absolute left-0 top-full pt-2 w-48" onMouseLeave={() => setActiveMegaMenu(null)}>
                <div className="bg-white rounded-lg shadow-xl p-4">
                  <div className="space-y-2">
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1aa478] rounded transition-colors"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/careers"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1aa478] rounded transition-colors"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Careers
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1aa478] rounded transition-colors"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Plans Link */}
          <Link href="/pricing" className="text-sm font-medium text-black hover:text-black/80 transition-colors">
            Plans
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://app.everpayinc.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
          >
            Log in
          </a>
          <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg">Get Started</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            {/* Solutions */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">SOLUTIONS</p>
              <Link
                href="/solutions/retail"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Retail & E-commerce
              </Link>
              <Link
                href="/solutions/saas"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                SaaS & Subscriptions
              </Link>
              <Link
                href="/solutions/marketplace"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplaces
              </Link>
              <Link
                href="/solutions/enterprise"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Enterprise Solutions
              </Link>
            </div>

            {/* Products */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">PRODUCTS</p>
              <Link
                href="/online-payments"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Payments
              </Link>
              <Link
                href="/commerce"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Commerce
              </Link>
              <Link
                href="/payments"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Payment Methods
              </Link>
              <Link
                href="/fraud-prevention"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Fraud Prevention
              </Link>
              <Link
                href="/security"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
            </div>

            {/* Resources */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">RESOURCES</p>
              <Link
                href="/blog"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">COMPANY</p>
              <Link
                href="/about"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-[#1aa478] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans
            </Link>

            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <a
                href="https://app.everpayinc.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                Log in
              </a>
              <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full w-full shadow-lg">
                  Get Started
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
