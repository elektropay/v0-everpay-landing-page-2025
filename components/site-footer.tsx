import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/types"
import Image from "next/image"

interface SiteFooterProps {
  dict: Messages
  lang: Locale
}

export function SiteFooter({ dict, lang }: SiteFooterProps) {
  const createLocalizedPath = (path: string, locale: Locale) => {
    if (path === "/") return `/${locale}`
    return `/${locale}${path}`
  }

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        <div className="flex flex-col items-start gap-4">
          <Link className="flex items-center gap-2" href={createLocalizedPath("/", lang)}>
            <Image src="/placeholder-logo.png" width={32} height={32} alt="Everpay Logo" className="h-8 w-8" />
            <span className="sr-only">Everpay</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">{dict.footer.copyright}</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">{dict.footer.company}</h3>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/about", lang)}>
            {dict.footer.aboutUs}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/careers", lang)}>
            {dict.footer.careers}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/blog", lang)}>
            {dict.footer.blog}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/partners", lang)}>
            {dict.footer.partners}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/contact", lang)}>
            {dict.footer.contactUs}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">{dict.footer.products}</h3>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/payments", lang)}>
            {dict.footer.payments}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/pos", lang)}>
            {dict.footer.pos}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/issuing", lang)}>
            {dict.footer.issuing}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/online-payments", lang)}>
            {dict.footer.onlinePayments}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/gateway", lang)}>
            {dict.footer.gateway}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/fraud-prevention", lang)}>
            {dict.footer.fraudPrevention}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/security", lang)}>
            {dict.footer.security}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">{dict.footer.resources}</h3>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/docs", lang)}>
            {dict.footer.documentation}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/help", lang)}>
            {dict.footer.helpCenter}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/api", lang)}>
            {dict.footer.apiReference}
          </Link>
          <h3 className="font-semibold mt-4">{dict.footer.legal}</h3>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/privacy-policy", lang)}>
            {dict.footer.privacyPolicy}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/terms", lang)}>
            {dict.footer.termsOfService}
          </Link>
          <Link className="text-sm hover:underline" href={createLocalizedPath("/cookie-policy", lang)}>
            {dict.footer.cookiePolicy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
