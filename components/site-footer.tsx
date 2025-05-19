export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Everpay</h3>
            <p className="text-sm text-gray-600">Empowering businesses with innovative payment solutions since 2020.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products/gateway" className="text-sm text-gray-600 hover:text-gray-900">
                  Payment Gateway
                </a>
              </li>
              <li>
                <a href="/products/pos" className="text-sm text-gray-600 hover:text-gray-900">
                  POS Systems
                </a>
              </li>
              <li>
                <a href="/products/checkout" className="text-sm text-gray-600 hover:text-gray-900">
                  Online Checkout
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Everpay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
