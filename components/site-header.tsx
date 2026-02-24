"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  UtensilsCrossed,
  ShoppingCart,
  Smartphone,
  Laptop,
  Store,
  Building2,
  CreditCard,
  Plug,
  Globe,
  Shield,
  Lock,
  DollarSign,
} from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/favicon.png" alt="Everpay Logo" className="h-8 w-8 rounded-lg" />
          <span
            className="text-[22px] font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            everpay
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu("solutions")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Solutions
              <ChevronDown className="h-3.5 w-3.5 opacity-50" />
            </button>
            {activeMegaMenu === "solutions" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[520px]">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <div className="grid grid-cols-2 gap-1">
                    <p className="col-span-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">By Business Type</p>
                    <Link href="/solutions/retail" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <ShoppingBag className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Retail</span>
                    </Link>
                    <Link href="/solutions/restaurant" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <UtensilsCrossed className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Restaurant</span>
                    </Link>
                    <Link href="/solutions/ecommerce" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <ShoppingCart className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">E-commerce</span>
                    </Link>
                    <Link href="/solutions/mobile-payments" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Smartphone className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Mobile Payments</span>
                    </Link>
                    <div className="col-span-2 border-t border-gray-100 my-2" />
                    <p className="col-span-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">By Platform</p>
                    <Link href="/solutions/saas-platforms" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Laptop className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">{"SaaS & Platforms"}</span>
                    </Link>
                    <Link href="/solutions/marketplaces" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Store className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Marketplaces</span>
                    </Link>
                    <Link href="/solutions/enterprise" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Building2 className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Enterprise</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu("products")}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Products
              <ChevronDown className="h-3.5 w-3.5 opacity-50" />
            </button>
            {activeMegaMenu === "products" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[440px]">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <div className="grid grid-cols-2 gap-1">
                    <Link href="/online-payments" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <CreditCard className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Online Payments</span>
                    </Link>
                    <Link href="/products/payment-gateway" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Plug className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Payment Gateway</span>
                    </Link>
                    <Link href="/solutions/pos" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Store className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Point of Sale</span>
                    </Link>
                    <Link href="/fraud-prevention" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Shield className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Fraud Prevention</span>
                    </Link>
                    <Link href="/security" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Lock className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Security</span>
                    </Link>
                    <Link href="/payments" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <Globe className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Payment Methods</span>
                    </Link>
                    <Link href="/funding" className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" onClick={() => setActiveMegaMenu(null)}>
                      <DollarSign className="h-4 w-4 text-[#1aa478]" />
                      <span className="font-medium">Funding</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Simple links */}
          <Link href="/pricing" className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
            About
          </Link>
          <Link href="/blog" className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://app.everpayinc.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
          >
            Login
          </a>
          <Link href="/demo">
            <Button className="bg-[#1aa478] hover:bg-[#158f68] text-white rounded-full px-6 h-10 text-[15px] font-semibold shadow-none">
              Get a free demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto flex flex-col px-6 py-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Solutions</p>
              {[
                { href: "/solutions/retail", label: "Retail" },
                { href: "/solutions/restaurant", label: "Restaurant" },
                { href: "/solutions/ecommerce", label: "E-commerce" },
                { href: "/solutions/mobile-payments", label: "Mobile Payments" },
                { href: "/solutions/saas-platforms", label: "SaaS & Platforms" },
                { href: "/solutions/marketplaces", label: "Marketplaces" },
                { href: "/solutions/enterprise", label: "Enterprise" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block py-2 text-[15px] text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 mt-4 pt-4 space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Products</p>
              {[
                { href: "/online-payments", label: "Online Payments" },
                { href: "/products/payment-gateway", label: "Payment Gateway" },
                { href: "/solutions/pos", label: "Point of Sale" },
                { href: "/fraud-prevention", label: "Fraud Prevention" },
                { href: "/security", label: "Security" },
                { href: "/funding", label: "Funding" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block py-2 text-[15px] text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 mt-4 pt-4 space-y-1">
              {[
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block py-2 text-[15px] font-medium text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 mt-4 pt-6 flex flex-col gap-3">
              <a
                href="https://app.everpayinc.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[15px] font-medium text-gray-600 py-2.5"
              >
                Login
              </a>
              <Link href="/demo" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#1aa478] hover:bg-[#158f68] text-white rounded-full h-11 text-[15px] font-semibold">
                  Get a free demo
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
