import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#193638] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/commerce" className="text-gray-300 hover:text-white">
                  Dental
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-gray-300 hover:text-white">
                  Eye Care
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-gray-300 hover:text-white">
                  Medical
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-gray-300 hover:text-white">
                  Veterinary
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-gray-300 hover:text-white">
                  Medical Spa
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/online-payments" className="text-gray-300 hover:text-white">
                  Online Payments
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-gray-300 hover:text-white">
                  Payment Processing
                </Link>
              </li>
              <li>
                <Link href="/fraud-prevention" className="text-gray-300 hover:text-white">
                  Fraud Prevention
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-300 hover:text-white">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Everpay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
