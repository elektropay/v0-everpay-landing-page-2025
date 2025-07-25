"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, DollarSign } from "lucide-react"
import { usePathname } from "next/navigation"
import { type Locale, locales } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/types"

interface SiteHeaderProps {
  lang: Locale
  dict: Messages
}

export function SiteHeader({ lang, dict }: SiteHeaderProps) {
  const pathname = usePathname()

  const getLocalizedPath = (path: string) => {
    const parts = pathname.split("/")
    const currentPathWithoutLocale = parts.length > 2 ? `/${parts.slice(2).join("/")}` : "/"
    return `/${lang}${path}`
  }

  const switchLocale = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.startsWith(`/${lang}`) ? pathname.substring(`/${lang}`.length) : pathname
    return `/${newLocale}${pathWithoutLocale}`
  }

  const navLinks = [
    { href: "/", label: dict.Header.home },
    { href: "/solutions/business", label: dict.Header.solutions },
    { href: "/docs", label: dict.Header.developers },
    { href: "/about", label: dict.Header.company },
    { href: "/pricing", label: dict.Header.pricing },
    { href: "/contact", label: dict.Header.contact },
  ]

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden bg-transparent" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href={`/${lang}`} passHref>
            <div className="mr-6 flex items-center">
              <DollarSign className="h-6 w-6" />
              <span className="sr-only">Everpay</span>
            </div>
          </Link>
          <div className="grid gap-2 py-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={getLocalizedPath(link.href)} passHref>
                <Button className="w-full justify-start" variant="ghost">
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              {locales.map((locale) => (
                <Link key={locale} href={switchLocale(locale)} passHref>
                  <Button className="w-full justify-start" variant={lang === locale ? "secondary" : "ghost"}>
                    {locale.toUpperCase()}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href={`/${lang}`} passHref>
        <div className="mr-6 flex items-center">
          <DollarSign className="h-6 w-6" />
          <span className="sr-only">Everpay</span>
        </div>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={getLocalizedPath(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden lg:flex gap-2">
          {locales.map((locale) => (
            <Link key={locale} href={switchLocale(locale)} passHref>
              <Button variant={lang === locale ? "secondary" : "ghost"} size="sm">
                {locale.toUpperCase()}
              </Button>
            </Link>
          ))}
        </div>
        <Link href={`/${lang}/signin`} passHref>
          <Button variant="outline">{dict.Header.signIn}</Button>
        </Link>
        <Link href={`/${lang}/signup`} passHref>
          <Button>{dict.Header.signUp}</Button>
        </Link>
      </div>
    </header>
  )
}
