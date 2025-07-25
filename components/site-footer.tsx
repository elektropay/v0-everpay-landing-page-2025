import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/types"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

interface SiteFooterProps {
  dict: Messages
  lang?: Locale
}

export function SiteFooter({ dict, lang = "en" }: SiteFooterProps) {
  const footerNav = [
    {
      title: dict.footer.company.title,
      items: [
        { href: `/${lang}/about`, label: dict.footer.company.about },
        { href: `/${lang}/careers`, label: dict.footer.company.careers },
        { href: `/${lang}/partners`, label: dict.footer.company.partners },
        { href: `/${lang}/blog`, label: dict.footer.company.blog },
      ],
    },
    {
      title: dict.footer.solutions.title,
      items: [
        { href: `/${lang}/solutions/ecommerce`, label: dict.footer.solutions.ecommerce },
        { href: `/${lang}/solutions/retail`, label: dict.footer.solutions.retail },
        { href: `/${lang}/solutions/marketplace`, label: dict.footer.solutions.marketplace },
        { href: `/${lang}/solutions/business`, label: dict.footer.solutions.business },
      ],
    },
    {
      title: dict.footer.products.title,
      items: [
        { href: `/${lang}/payments`, label: dict.footer.products.payments },
        { href: `/${lang}/pos`, label: dict.footer.products.pos },
        { href: `/${lang}/issuing`, label: dict.footer.products.issuing },
        { href: `/${lang}/online-payments`, label: dict.footer.products.onlinePayments },
        { href: `/${lang}/gateway`, label: dict.footer.products.gateway },
        { href: `/${lang}/api`, label: dict.footer.products.api },
      ],
    },
    {
      title: dict.footer.resources.title,
      items: [
        { href: `/${lang}/docs`, label: dict.footer.resources.documentation },
        { href: `/${lang}/help`, label: dict.footer.resources.helpCenter },
        { href: `/${lang}/security`, label: dict.footer.resources.security },
        { href: `/${lang}/fraud-prevention`, label: dict.footer.resources.fraudPrevention },
      ],
    },
    {
      title: dict.footer.legal.title,
      items: [
        { href: `/${lang}/privacy-policy`, label: dict.footer.legal.privacyPolicy },
        { href: `/${lang}/terms`, label: dict.footer.legal.termsOfService },
        { href: `/${lang}/cookie-policy`, label: dict.footer.legal.cookiePolicy },
      ],
    },
    {
      title: dict.footer.contact.title,
      items: [{ href: `/${lang}/contact`, label: dict.footer.contact.contactUs }],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div className="col-span-full lg:col-span-1 flex flex-col items-start">
          <Link className="flex items-center gap-2" href={`/${lang}`}>
            <Image src="/placeholder-logo.png" alt="Everpay Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">Everpay</span>
          </Link>
          <p className="mt-4 text-sm">{dict.footer.tagline}</p>
          <div className="flex gap-4 mt-6">
            <Link className="text-gray-400 hover:text-white" href="#">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="text-gray-400 hover:text-white" href="#">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        {footerNav.map((section, index) => (
          <div key={index} className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link className="text-sm hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container px-4 md:px-6 mt-12 border-t border-gray-800 pt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Everpay. {dict.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
