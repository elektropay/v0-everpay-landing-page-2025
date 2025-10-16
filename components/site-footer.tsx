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
