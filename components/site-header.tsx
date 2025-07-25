"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { type Locale, locales } from "@/lib/i18n/config"
import { usePathname } from "@/lib/i18n/navigation"
import { cn } from "@/lib/utils"
import type { Messages } from "@/lib/i18n/types"
import Image from "next/image"

interface SiteHeaderProps {
  dict: Messages
  lang: Locale
}

export function SiteHeader({ dict, lang }: SiteHeaderProps) {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const createLocalizedPath = (path: string, locale: Locale) => {
    if (path === "/") return `/${locale}`
    return `/${locale}${path}`
  }

  const navLinks = [
    { href: "/", label: dict.header.home },
    { href: "/solutions/business", label: dict.header.solutions },
    { href: "/docs", label: dict.header.developers },
    { href: "/payments", label: dict.header.pricing },
    { href: "/contact", label: dict.header.contact },
  ]

  const solutionLinks = [
    { href: "/solutions/business", label: dict.header.businessSolutions },
    { href: "/solutions/ecommerce", label: dict.header.ecommerceSolutions },
    { href: "/solutions/marketplace", label: dict.header.marketplaceSolutions },
    { href: "/solutions/retail", label: dict.header.retailSolutions },
  ]

  const productLinks = [
    { href: "/payments", label: dict.footer.payments },
    { href: "/pos", label: dict.footer.pos },
    { href: "/issuing", label: dict.footer.issuing },
    { href: "/online-payments", label: dict.footer.onlinePayments },
    { href: "/gateway", label: dict.footer.gateway },
    { href: "/fraud-prevention", label: dict.footer.fraudPrevention },
    { href: "/security", label: dict.footer.security },
  ]

  const companyLinks = [
    { href: "/about", label: dict.footer.aboutUs },
    { href: "/careers", label: dict.footer.careers },
    { href: "/blog", label: dict.footer.blog },
    { href: "/partners", label: dict.footer.partners },
    { href: "/contact", label: dict.footer.contactUs },
  ]

  const resourceLinks = [
    { href: "/docs", label: dict.footer.documentation },
    { href: "/help", label: dict.footer.helpCenter },
    { href: "/api", label: dict.footer.apiReference },
  ]

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="mr-6 flex items-center" href={createLocalizedPath("/", lang)}>
        <Image src="/placeholder-logo.png" width={32} height={32} alt="Everpay Logo" className="h-8 w-8" />
        <span className="sr-only">Everpay</span>
      </Link>
      <nav className="hidden md:flex gap-6 lg:gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={cn(
              "text-lg font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50",
              pathname === link.href ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400",
            )}
            href={createLocalizedPath(link.href, lang)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href={createLocalizedPath("/signin", lang)}
          >
            {dict.header.signIn}
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href={createLocalizedPath("/signup", lang)}
          >
            {dict.header.signUp}
          </Link>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-lg font-medium hover:underline"
                  href={createLocalizedPath(link.href, lang)}
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="grid gap-2 py-4">
                <h4 className="font-semibold">{dict.header.solutions}</h4>
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="text-base font-medium hover:underline"
                    href={createLocalizedPath(link.href, lang)}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="grid gap-2 py-4">
                <h4 className="font-semibold">{dict.footer.products}</h4>
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="text-base font-medium hover:underline"
                    href={createLocalizedPath(link.href, lang)}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="grid gap-2 py-4">
                <h4 className="font-semibold">{dict.footer.company}</h4>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="text-base font-medium hover:underline"
                    href={createLocalizedPath(link.href, lang)}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="grid gap-2 py-4">
                <h4 className="font-semibold">{dict.footer.resources}</h4>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="text-base font-medium hover:underline"
                    href={createLocalizedPath(link.href, lang)}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href={createLocalizedPath("/signin", lang)}
                  onClick={() => setIsSheetOpen(false)}
                >
                  {dict.header.signIn}
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={createLocalizedPath("/signup", lang)}
                  onClick={() => setIsSheetOpen(false)}
                >
                  {dict.header.signUp}
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={createLocalizedPath(pathname, locale)}
              className={cn(
                "text-sm font-medium",
                lang === locale ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400",
              )}
            >
              {locale.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
