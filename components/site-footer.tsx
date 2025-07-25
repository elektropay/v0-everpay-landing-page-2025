"use client"

import Link from "next/link"
import type { getDictionary } from "@/lib/i18n"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { useLocale } from "next-intl"
import { pathnames } from "@/lib/i18n/config"
import type { Locale } from "@/lib/i18n/types"

interface SiteFooterProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
}

export async function SiteFooter({ dictionary }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()
  const currentLocale = useLocale() as Locale

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

  const getLocalizedPath = (path: string, locale: Locale) => {
    const entry = Object.entries(pathnames).find(([, value]) => {
      if (typeof value === "string") {
        return value === path
      }
      return Object.values(value).includes(path)
    })

    if (entry) {
      const [key, value] = entry
      if (typeof value === "string") {
        return `/${locale}${value}`
      }
      return `/${locale}${value[locale] || value.en}` // Fallback to English if specific locale path not found
    }
    return `/${locale}${path}` // Fallback if path not in pathnames
  }

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
              unoptimized
            />
            <span className="text-white text-2xl font-bold ml-2">everpay</span>
          </div>
          <p className="text-sm leading-relaxed">{dictionary.footer.description}</p>
          <div className="flex space-x-4 mt-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {footerNav.map((section) => (
          <div key={section.title}>
            <h3 className="text-white font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={getLocalizedPath(link.href, currentLocale)} className="hover:text-white text-sm">
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
          <Link href={getLocalizedPath("/privacy-policy", currentLocale)} className="hover:text-white">
            {dictionary.footer.privacyPolicy}
          </Link>
          <Link href={getLocalizedPath("/terms", currentLocale)} className="hover:text-white">
            {dictionary.footer.termsOfService}
          </Link>
          <Link href={getLocalizedPath("/cookie-policy", currentLocale)} className="hover:text-white">
            {dictionary.footer.cookiePolicy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
