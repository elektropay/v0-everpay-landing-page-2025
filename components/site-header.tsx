"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader({ lang }: { lang: string }) {
  const pathname = usePathname()

  const navLinks = [
    { href: `/${lang}/payments`, label: "Payments" },
    { href: `/${lang}/solutions/business`, label: "Solutions" },
    { href: `/${lang}/partners`, label: "Partners" },
    { href: `/${lang}/developers`, label: "Developers" },
    { href: `/${lang}/company`, label: "Company" },
  ]

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white text-everpay-dark shadow-sm">
      <Link className="mr-6 flex items-center" href={`/${lang}`}>
        <Image src="/placeholder-logo.svg" alt="Everpay Logo" width={32} height={32} className="h-8 w-8" />
        <span className="ml-2 text-2xl font-bold font-display">everpay</span>
      </Link>
      <nav className="ml-auto hidden gap-6 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={cn(
              "text-lg font-medium transition-colors hover:text-everpay-green",
              pathname === link.href ? "text-everpay-green" : "text-everpay-dark",
            )}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <Button className="hidden lg:inline-flex" variant="ghost">
          Log in
        </Button>
        <Button className="hidden lg:inline-flex bg-everpay-green text-white rounded-full hover:bg-everpay-green/90">
          Get started
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden bg-transparent" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              {navLinks.map((link) => (
                <Link key={link.href} className="flex w-full items-center py-2 text-lg font-semibold" href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Button className="w-full" variant="ghost">
                Log in
              </Button>
              <Button className="w-full bg-everpay-green text-white rounded-full hover:bg-everpay-green/90">
                Get started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
