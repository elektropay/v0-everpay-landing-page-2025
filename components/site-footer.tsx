import Link from "next/link"
import type { getDictionary } from "@/lib/i18n"
import Image from "next/image"

interface SiteFooterProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export async function SiteFooter({ dictionary }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  const footerNav = [
    {
      title: dictionary.footer.products,
      links: [
        { href: "/payments", text: dictionary.footer.payments },
        { href: "/online-payments", text: dictionary.footer.onlinePayments },
        { href: "/commerce", text: dictionary.footer.commerce },
        { href: "/fraud-prevention", text: dictionary.footer.fraudPrevention },
        { href: "/card-issuing", text: dictionary.footer.cardIssuing },
        { href: "/pos-systems", text: dictionary.footer.posSystems },
      ],
    },
    {
      title: dictionary.footer.solutions,
      links: [
        { href: "/solutions/business", text: dictionary.footer.businessSolutions },
        { href: "/solutions/ecommerce", text: dictionary.footer.ecommerceSolutions },
        { href: "/solutions/marketplace", text: dictionary.footer.marketplaceSolutions },
        { href: "/solutions/retail", text: dictionary.footer.retailSolutions },
      ],
    },
    {
      title: dictionary.footer.resources,
      links: [
        { href: "/docs", text: dictionary.footer.documentation },
        { href: "/help", text: dictionary.footer.helpCenter },
        { href: "/blog", text: dictionary.footer.blog },
        { href: "/api", text: dictionary.footer.apiReference },
      ],
    },
    {
      title: dictionary.footer.company,
      links: [
        { href: "/about", text: dictionary.footer.aboutUs },
        { href: "/careers", text: dictionary.footer.careers },
        { href: "/partners", text: dictionary.footer.partners },
        { href: "/contact", text: dictionary.footer.contact },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <Image
              src="https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png"
              alt="Everpay Logo"
              className="h-8 w-auto"
              width={32}
              height={32}
              unoptimized="true" // Corrected unoptimized prop
            />
            <span className="text-white text-2xl font-bold ml-2">everpay</span>
          </div>
          <p className="text-sm leading-relaxed">{dictionary.footer.description}</p>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              {/* Placeholder for social icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              {/* Placeholder for social icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c1.105.214 2.23.323 3.37.323 3.67 0 7.14-1.53 9.57-4.39l-1.48-1.48c-1.78 2.03-4.33 3.3-7.2 3.3-2.95 0-5.64-1.25-7.5-3.25l-1.48 1.48c2.43 2.86 5.9 4.39 9.57 4.39z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        {footerNav.map((section) => (
          <div key={section.title}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white text-sm">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        <p>
          &copy; {currentYear} Everpay. {dictionary.footer.allRightsReserved}
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy-policy" className="hover:text-white">
            {dictionary.footer.privacyPolicy}
          </Link>
          <Link href="/terms" className="hover:text-white">
            {dictionary.footer.termsOfService}
          </Link>
          <Link href="/cookie-policy" className="hover:text-white">
            {dictionary.footer.cookiePolicy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
