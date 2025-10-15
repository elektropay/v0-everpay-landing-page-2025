"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Everpay Logo" className="h-8 w-8 rounded-lg" />
            <span className="text-2xl font-bold text-[#193638]">Everpay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1aa478] transition-colors">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">For Individual Locations</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Dental
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Eye Care
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Medical
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Veterinary
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Medical Spa
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Plastic Surgery
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Physical Therapy
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Mental Health
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Primary Care
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">For Enterprises</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Dental Service Organizations (DSO)
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Vision Groups
                        </Link>
                      </li>
                      <li>
                        <Link href="/commerce" className="text-gray-700 hover:text-[#1aa478]">
                          Medical Groups
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1aa478] transition-colors">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[400px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/online-payments" className="text-gray-700 hover:text-[#1aa478]">
                        Online Payments
                      </Link>
                    </li>
                    <li>
                      <Link href="/payments" className="text-gray-700 hover:text-[#1aa478]">
                        Payment Processing
                      </Link>
                    </li>
                    <li>
                      <Link href="/fraud-prevention" className="text-gray-700 hover:text-[#1aa478]">
                        Fraud Prevention
                      </Link>
                    </li>
                    <li>
                      <Link href="/security" className="text-gray-700 hover:text-[#1aa478]">
                        Security & Compliance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1aa478] transition-colors">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[200px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/blog" className="text-gray-700 hover:text-[#1aa478]">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/partners" className="text-gray-700 hover:text-[#1aa478]">
                        Partners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1aa478] transition-colors">
                <span>Company</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[200px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-gray-700 hover:text-[#1aa478]">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-gray-700 hover:text-[#1aa478]">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-700 hover:text-[#1aa478]">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Plans Link */}
            <Link href="/pricing" className="text-gray-700 hover:text-[#1aa478] transition-colors">
              Plans
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://app.everpayinc.com/login"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Log in
            </a>
            <Button asChild className="rounded-full bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
              <a href="https://app.everpayinc.com/sign-up">Get started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-4">
              {/* Solutions */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">SOLUTIONS</h3>
                <div className="pl-4 space-y-2">
                  <p className="text-sm text-gray-500">For Individual Locations</p>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Dental
                  </Link>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Eye Care
                  </Link>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Medical
                  </Link>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Veterinary
                  </Link>
                  <p className="text-sm text-gray-500 mt-3">For Enterprises</p>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    DSO
                  </Link>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Vision Groups
                  </Link>
                  <Link href="/commerce" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Medical Groups
                  </Link>
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">PRODUCTS</h3>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/online-payments"
                    className="block text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Online Payments
                  </Link>
                  <Link href="/payments" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Payment Processing
                  </Link>
                  <Link
                    href="/fraud-prevention"
                    className="block text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Fraud Prevention
                  </Link>
                  <Link href="/security" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Security
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">RESOURCES</h3>
                <div className="pl-4 space-y-2">
                  <Link href="/blog" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link href="/partners" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Partners
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">COMPANY</h3>
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link href="/careers" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Careers
                  </Link>
                  <Link href="/contact" className="block text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </div>
              </div>

              {/* Plans */}
              <Link
                href="/pricing"
                className="block font-semibold text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                PLANS
              </Link>

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-2">
                <a href="https://app.everpayinc.com/login" className="block text-center py-2 text-gray-700">
                  Log in
                </a>
                <Button asChild className="w-full rounded-full bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
                  <a href="https://app.everpayinc.com/sign-up">Get started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
