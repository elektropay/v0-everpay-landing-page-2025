"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "@/lib/i18n/navigation"
import { usePathname } from "next/navigation"
import { useMessages } from "next-intl"
import type { Locale } from "@/lib/i18n/types"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, GlobeIcon } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { locales } from "@/lib/i18n/config"

interface SiteHeaderProps {
  lang: Locale
}

export function SiteHeader({ lang }: SiteHeaderProps) {
  const pathname = usePathname()
  const messages = useMessages()
  const dict = messages as any

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLocaleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`
    window.location.href = newPath
  }

  const navLinks = [
    { href: "/", label: dict.header.home },
    { href: "/about", label: dict.header.about },
    {
      label: dict.header.solutions,
      subLinks: [
        { href: "/solutions/business", label: dict.header.business },
        { href: "/solutions/ecommerce", label: dict.header.ecommerce },
        { href: "/solutions/marketplace", label: dict.header.marketplace },
        { href: "/solutions/retail", label: dict.header.retail },
      ],
    },
    {
      label: dict.header.developers,
      subLinks: [
        { href: "/api", label: dict.header.api },
        { href: "/docs", label: dict.header.docs },
        { href: "/gateway", label: dict.header.gateway },
        { href: "/issuing", label: dict.header.issuing },
        { href: "/online-payments", label: dict.header.onlinePayments },
        { href: "/pos", label: dict.header.pos },
        { href: "/payments", label: dict.header.payments },
        { href: "/fraud-prevention", label: dict.header.fraudPrevention },
        { href: "/security", label: dict.header.security },
      ],
    },
    { href: "/partners", label: dict.header.partners },
    { href: "/blog", label: dict.header.blog },
    { href: "/careers", label: dict.header.careers },
    { href: "/help", label: dict.header.help },
    { href: "/contact", label: dict.header.contact },
  ]

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href={`/${lang}`} onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/placeholder-logo.png" alt="Everpay Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <div className="grid gap-2 py-6">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.href ? (
                  <Link
                    href={`/${lang}${link.href}`}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div className="py-2 text-lg font-semibold">{link.label}</div>
                )}
                {link.subLinks && (
                  <div className="ml-4 grid gap-1">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`/${lang}${subLink.href}`}
                        className="flex w-full items-center py-2 text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Select onValueChange={handleLocaleChange} defaultValue={lang}>
                <SelectTrigger className="w-[180px]">
                  <GlobeIcon className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {locales.map((locale) => (
                    <SelectItem key={locale} value={locale}>
                      {locale.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Link
              className="mt-4 flex w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href={`/${lang}/signIn`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.header.signIn}
            </Link>
            <Link
              className="flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={`/${lang}/signUp`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dict.header.signUp}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href={`/${lang}`}>
        <Image src="/placeholder-logo.png" alt="Everpay Logo" width={120} height={40} className="h-10 w-auto" />
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
        {navLinks.map((link, index) => (
          <div key={index} className="relative group">
            {link.href ? (
              <Link className="flex items-center px-2 py-1 hover:underline" href={`/${lang}${link.href}`}>
                {link.label}
              </Link>
            ) : (
              <div className="flex items-center px-2 py-1 cursor-default">
                {link.label}
                {link.subLinks && (
                  <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </div>
            )}
            {link.subLinks && (
              <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 min-w-[160px]">
                {link.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    href={`/${lang}${subLink.href}`}
                  >
                    {subLink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <Select onValueChange={handleLocaleChange} defaultValue={lang}>
          <SelectTrigger className="w-[180px]">
            <GlobeIcon className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {locales.map((locale) => (
              <SelectItem key={locale} value={locale}>
                {locale.toUpperCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Link
          className="hidden rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 lg:flex"
          href={`/${lang}/signIn`}
        >
          {dict.header.signIn}
        </Link>
        <Link
          className="hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 lg:flex"
          href={`/${lang}/signUp`}
        >
          {dict.header.signUp}
        </Link>
      </div>
    </header>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
