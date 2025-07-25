import Link from "next/link"
import { DollarSign } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/types"

interface SiteFooterProps {
  lang: Locale
  dict: Messages
}

export function SiteFooter({ lang, dict }: SiteFooterProps) {
  const getLocalizedPath = (path: string) => `/${lang}${path}`

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <aside className="flex items-center gap-2">
        <Link href={`/${lang}`} passHref>
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            <span className="font-semibold">Everpay</span>
          </div>
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-400">{dict.Footer.copyright}</p>
      </aside>
      <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6 text-sm">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{dict.Footer.products}</h3>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/payments")}
          >
            {dict.Footer.payments}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/gateway")}
          >
            {dict.Footer.gateway}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/issuing")}
          >
            {dict.Footer.issuing}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/pos")}
          >
            {dict.Footer.pos}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/online-payments")}
          >
            {dict.Footer.onlinePayments}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{dict.Footer.solutions}</h3>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/solutions/ecommerce")}
          >
            {dict.Footer.ecommerce}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/solutions/retail")}
          >
            {dict.Footer.retail}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/solutions/marketplace")}
          >
            {dict.Footer.marketplace}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/solutions/business")}
          >
            {dict.Footer.business}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{dict.Footer.developers}</h3>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/docs")}
          >
            {dict.Footer.docs}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/api")}
          >
            {dict.Footer.apiReference}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/docs")}
          >
            {dict.Footer.sdks}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/help")}
          >
            {dict.Footer.community}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{dict.Footer.company}</h3>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/about")}
          >
            {dict.Footer.aboutUs}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/careers")}
          >
            {dict.Footer.careers}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/partners")}
          >
            {dict.Footer.partners}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/blog")}
          >
            {dict.Footer.blog}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/contact")}
          >
            {dict.Footer.contactUs}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{dict.Footer.legal}</h3>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/privacy-policy")}
          >
            {dict.Footer.privacyPolicy}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/terms")}
          >
            {dict.Footer.termsOfService}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/cookie-policy")}
          >
            {dict.Footer.cookiePolicy}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/fraud-prevention")}
          >
            {dict.Footer.fraudPrevention}
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={getLocalizedPath("/security")}
          >
            {dict.Footer.security}
          </Link>
        </div>
      </nav>
    </footer>
  )
}
