import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer
      className="border-t border-gray-200 bg-gray-50 relative bg-no-repeat bg-center"
      style={{
        backgroundImage: "url(/footer-bg.png)",
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="absolute inset-0 bg-gray-50/80" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Branding */}
          <div></div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/retail" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/restaurant"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/ecommerce"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/mobile-payments"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Mobile Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/saas-platforms"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  SaaS & Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/marketplaces"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Marketplaces
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
                <Link
                  href="/products/payment-gateway"
                  className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors"
                >
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link href="/solutions/pos" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  POS & Kiosks
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Omni-Commerce
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
                <Link href="/funding" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Funding
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Plans & Pricing
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
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-gray-600 hover:text-[#1aa478] transition-colors">
                  Partners
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
            <a href="https://facebook.com/everpay/" className="hover:scale-110 transition-transform duration-200">
              <Facebook className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
            </a>
            <a href="https://twitter.com/everpay/" className="hover:scale-110 transition-transform duration-200">
              <Twitter className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
            </a>
            <a href="https://linkedin.com/in/everpay/" className="hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
            </a>
            <a href="https://github.com/everpay/" className="hover:scale-110 transition-transform duration-200">
              <Github className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Everpay Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-xs text-gray-600 hover:text-[#1aa478] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-600 hover:text-[#1aa478] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-xs text-gray-600 hover:text-[#1aa478] transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-xs text-gray-600 hover:text-[#1aa478] transition-colors">
                Security & Trust
              </Link>
              <Link
                href="https://status.everpayinc.com"
                className="text-xs text-gray-600 hover:text-[#1aa478] transition-colors"
              >
                System Status
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-2">
            <p className="text-xs text-gray-600">
              Everpay Corporation is a financial technology company and not a bank. Banking services are provided by Everpay's bank partners, Members FDIC. Visa® virtual debit cards are issued by Everpay's bank partners pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.
            </p>
            <p className="text-xs text-gray-600">
              Deposit sweep networks may be offered through select Everpay bank partners. Please refer to the applicable bank partner’s deposit sweep network disclosures for more information.
              Everpay is PCI DSS Level 1 certified, the highest level of security certification in the payments industry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
