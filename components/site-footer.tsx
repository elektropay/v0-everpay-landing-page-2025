import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-[#081B1E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1 */}
          <div className="col-span-2 md:col-span-1 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-display)]">Digipay</h3>
            <p className="text-white/60 text-sm mb-4">
              The trusted way to get paid globally. Design and customize processes for your business.
            </p>
          </div>

          {/* Products */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/payments" className="text-white/60 hover:text-white transition-colors">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/commerce" className="text-white/60 hover:text-white transition-colors">
                  Commerce
                </Link>
              </li>
              <li>
                <Link href="/payouts" className="text-white/60 hover:text-white transition-colors">
                  Payouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/e-commerce" className="text-white/60 hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/marketplaces" className="text-white/60 hover:text-white transition-colors">
                  Marketplaces
                </Link>
              </li>
              <li>
                <Link href="/saas" className="text-white/60 hover:text-white transition-colors">
                  SaaS
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up animation-delay-600">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="animate-fade-in-up animation-delay-800">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up animation-delay-1000">
          <p className="text-sm text-white/60">© 2025 Digipay. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
