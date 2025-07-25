"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link } from "@/lib/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { locales, pathnames } from "@/lib/i18n/config"
import { usePathname } from "@/lib/i18n/navigation"

export function SiteHeader({ lang }: { lang: string }) {
  const t = useTranslations("header")
  const currentLocale = useLocale()
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const getLocalizedPath = (pathKey: keyof typeof pathnames, locale: string) => {
    const path = pathnames[pathKey]
    if (typeof path === "string") {
      return `/${locale}${path}`
    }
    return `/${locale}${path[locale as keyof typeof path] || path.en}`
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <Image src="/placeholder-logo.png" alt="Everpay Logo" width={24} height={24} />
            <span className="inline-block font-bold">Everpay</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href={getLocalizedPath("/", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("home")}
            </Link>
            <Link
              href={getLocalizedPath("/solutions/business", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("solutions")}
            </Link>
            <Link
              href={getLocalizedPath("/docs", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("developers")}
            </Link>
            <Link
              href={getLocalizedPath("/contact", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("contact")}
            </Link>
            <Link
              href={getLocalizedPath("/about", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("about")}
            </Link>
            <Link
              href={getLocalizedPath("/blog", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("blog")}
            </Link>
            <Link
              href={getLocalizedPath("/careers", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("careers")}
            </Link>
            <Link
              href={getLocalizedPath("/help", currentLocale)}
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              {t("help")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={`/${currentLocale}/login`}>
              <Button variant="ghost">{t("login")}</Button>
            </Link>
            <Link href={`/${currentLocale}/signup`}>
              <Button>{t("signup")}</Button>
            </Link>
            <div className="relative">
              <select
                value={currentLocale}
                onChange={(e) => {
                  const newLocale = e.target.value
                  const newPath = getLocalizedPath(pathname as keyof typeof pathnames, newLocale)
                  window.location.href = newPath
                }}
                className="appearance-none bg-transparent border-none text-sm font-medium focus:outline-none focus:ring-0"
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {locale.toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <Link
                  href={`/${currentLocale}`}
                  className="flex items-center space-x-2"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <Image src="/placeholder-logo.png" alt="Everpay Logo" width={24} height={24} />
                  <span className="font-bold">Everpay</span>
                </Link>
                <div className="h-full overflow-y-auto">
                  <nav className="flex flex-col gap-2 py-6">
                    <Link
                      href={getLocalizedPath("/", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("home")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/solutions/business", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("solutions")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/docs", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("developers")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/contact", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("contact")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/about", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("about")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/blog", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("blog")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/careers", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("careers")}
                    </Link>
                    <Link
                      href={getLocalizedPath("/help", currentLocale)}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("help")}
                    </Link>
                    <Link
                      href={`/${currentLocale}/login`}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("login")}
                    </Link>
                    <Link
                      href={`/${currentLocale}/signup`}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {t("signup")}
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
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
