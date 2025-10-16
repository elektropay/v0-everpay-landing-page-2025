import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img src="/favicon.png" alt="Everpay Logo" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "Manrope, sans-serif" }}>
                everpay
              </span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">Modern payment solutions for businesses of all sizes.</p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/retail" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  SaaS & Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/marketplace"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Marketplaces
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/fintech"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Fintech
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/enterprise"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/online-payments" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Online Payments
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Commerce
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="/fraud-prevention" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Fraud Prevention
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="rounded-full" />
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full">Subscribe</Button>
            </form>
          </div>
           <div className="flex items-center gap-4">
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Facebook className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Twitter className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Instagram className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Everpay Corporation. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-12" style={{ backgroundColor: "#081b1e" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 animate-fade-in-up">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold" style={{ fontFamily: "Manrope, sans-serif", color: "#ffffff" }}>
                everpay
              </span>
            </Link>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              The complete payment platform for businesses of all sizes. Accept payments, send payouts, and manage your
              finances all in one place.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Facebook className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Twitter className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <Instagram className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-100">
            <h3 className="text-sm font-bold mb-4" style={{ color: "#ffffff" }}>
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/online-payments"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Online Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/commerce"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/payments"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <h3 className="text-sm font-bold mb-4" style={{ color: "#ffffff" }}>
              Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/fraud-prevention"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Fraud Prevention
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="text-sm font-bold mb-4" style={{ color: "#ffffff" }}>
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2025 everpay. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm hover:underline" style={{ color: "rgba(255,255,255,0.5)" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline" style={{ color: "rgba(255,255,255,0.5)" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
