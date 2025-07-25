"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Locale, Dictionary } from "@/lib/i18n/types"
import { locales, pathnames } from "@/lib/i18n/config"

interface SiteHeaderProps {
  dictionary: Dictionary
  lang: Locale
}

export function SiteHeader({ dictionary, lang }: SiteHeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale()

  const headerNav = [
    {
      title: dictionary.header.products,
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
      title: dictionary.header.solutions,
      links: [
        { href: "/solutions/business", text: dictionary.footer.businessSolutions },
        { href: "/solutions/ecommerce", text: dictionary.footer.ecommerceSolutions },
        { href: "/solutions/marketplace", text: dictionary.footer.marketplaceSolutions },
        { href: "/solutions/retail", text: dictionary.footer.retailSolutions },
      ],
    },
    {
      title: dictionary.header.resources,
      links: [
        { href: "/docs", text: dictionary.footer.documentation },
        { href: "/help", text: dictionary.footer.helpCenter },
        { href: "/blog", text: dictionary.footer.blog },
        { href: "/api", text: dictionary.footer.apiReference },
      ],
    },
    {
      title: dictionary.header.company,
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

  const handleLocaleChange = (newLocale: Locale) => {
    const currentPathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/"
    const newPath = getLocalizedPath(currentPathWithoutLocale, newLocale)
    router.push(newPath)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src="https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png"
            alt="Everpay Logo"
            className="h-8 w-auto"
            width={32}
            height={32}
            unoptimized
          />
          <span className="text-gray-900 text-2xl font-bold ml-2">everpay</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {headerNav.map((item) => (
            <DropdownMenu key={item.title}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  {item.title}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {item.links.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={getLocalizedPath(link.href, lang)} className="w-full">
                      {link.text}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((locale) => (
                <DropdownMenuItem key={locale} onClick={() => handleLocaleChange(locale)}>
                  {locale.toUpperCase()}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={`/${lang}/sign-in`}>
            <Button variant="ghost">{dictionary.header.signIn}</Button>
          </Link>
          <Link href={`/${lang}/sign-up`}>
            <Button>{dictionary.header.signUp}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
