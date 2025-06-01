import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-lg font-bold">Everpay</h3>
            <p className="text-sm text-gray-600">Empowering businesses with innovative payment solutions since 2020.</p>
          </div>

          {[
            {
              title: "Products",
              links: [
                { name: "Payment Gateway", href: "/products/gateway" },
                { name: "POS Systems", href: "/products/pos" },
                { name: "Online Checkout", href: "/products/checkout" },
                { name: "Mobile Payments", href: "/products/mobile" },
              ],
            },
            {
              title: "Resources",
              links: [
                { name: "Documentation", href: "/docs" },
                { name: "API Reference", href: "/api" },
                { name: "Blog", href: "/blog" },
                { name: "Support", href: "/support" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
                { name: "Partners", href: "/partners" },
              ],
            },
            {
              title: "Legal",
              links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Security", href: "/security" },
                { name: "Compliance", href: "/compliance" },
              ],
            },
          ].map((column, i) => (
            <div key={i}>
              <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Everpay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
