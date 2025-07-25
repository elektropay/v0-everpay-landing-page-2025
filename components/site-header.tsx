"use client"

import type React from "react"

import { useState } from "react"
import { MenuIcon } from "lucide-react"
import { Link, usePathname } from "@/lib/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type Locale, locales } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/types"

interface SiteHeaderProps {
  dict: Messages
  lang: Locale
}

export function SiteHeader({ dict, lang }: SiteHeaderProps) {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleLocaleChange = (newLocale: string) => {
    // This is a client component, so we can use window.location
    // For a server component, you would use Next.js's redirect or router.push
    window.location.href = `/${newLocale}${pathname}`
  }

  const navLinks = [
    { href: "/", label: dict.navigation.home },
    { href: "/payments", label: dict.navigation.payments },
    { href: "/solutions/business", label: dict.navigation.solutions },
    { href: "/developers", label: dict.navigation.developers },
    { href: "/company", label: dict.navigation.company },
    { href: "/contact", label: dict.navigation.contact },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-semibold">
          <DollarSignIcon className="h-6 w-6" />
          <span className="sr-only">Everpay</span>
          Everpay
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Select onValueChange={handleLocaleChange} defaultValue={lang}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Lang" />
            </SelectTrigger>
            <SelectContent>
              {locales.map((locale) => (
                <SelectItem key={locale} value={locale}>
                  {locale.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="secondary" className="rounded-full">
            {dict.hero.getStartedButton}
          </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col items-start gap-4 p-4">
              <Link href={`/${lang}`} className="flex items-center gap-2 font-semibold">
                <DollarSignIcon className="h-6 w-6" />
                <span className="sr-only">Everpay</span>
                Everpay
              </Link>
              <nav className="flex flex-col items-start gap-4 text-sm font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Select onValueChange={handleLocaleChange} defaultValue={lang}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Lang" />
                  </SelectTrigger>
                  <SelectContent>
                    {locales.map((locale) => (
                      <SelectItem key={locale} value={locale}>
                        {locale.toUpperCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="secondary" className="rounded-full w-full">
                  {dict.hero.getStartedButton}
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
