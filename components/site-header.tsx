"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname, useRouter } from "@/lib/i18n/navigation"
import { type Locale, locales } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

interface SiteHeaderProps {
  dict: Dictionary
  lang: Locale
}

export function SiteHeader({ dict, lang }: SiteHeaderProps) {
  const { setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const onSelectChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale })
  }

  const navItems = [
    { href: "/", label: dict.header.home },
    {
      href: "/solutions/business",
      label: dict.header.solutions,
      children: [
        { href: "/solutions/ecommerce", label: dict.header.ecommerce },
        { href: "/solutions/retail", label: dict.header.retail },
        { href: "/solutions/marketplace", label: dict.header.marketplace },
        { href: "/solutions/business", label: dict.header.business },
      ],
    },
    {
      href: "/api",
      label: dict.header.developers,
      children: [
        { href: "/api", label: dict.header.api },
        { href: "/docs", label: dict.header.docs },
      ],
    },
    { href: "/pricing", label: dict.header.pricing },
    { href: "/contact", label: dict.header.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <span className="inline-block font-bold">Everpay</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className="capitalize flex items-center gap-1">
                    {item.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={`/${lang}${child.href}`}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={`/${lang}${item.href}`}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <span className="inline-block font-bold">Everpay</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.href}>
                      <h4 className="font-medium text-foreground/80">{item.label}</h4>
                      <nav className="grid gap-1 py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${lang}${child.href}`}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={`/${lang}${item.href}`}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            <Select value={lang} onValueChange={onSelectChange}>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild>
              <Link href={`/${lang}/login`}>{dict.header.login}</Link>
            </Button>
            <Button asChild>
              <Link href={`/${lang}/signup`}>{dict.header.signup}</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
