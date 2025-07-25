import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

interface SiteFooterProps {
  dict: Dictionary
  lang: Locale
}

export function SiteFooter({ dict, lang }: SiteFooterProps) {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-5">
        <div className="col-span-1 md:col-span-2">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="inline-block font-bold">Everpay</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">{dict.footer.copyright}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">{dict.footer.company}</h3>
            <nav className="mt-4 space-y-2">
              <Link href={`/${lang}/about`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.aboutUs}
              </Link>
              <Link href={`/${lang}/careers`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.careers}
              </Link>
              <Link href={`/${lang}/blog`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.blog}
              </Link>
              <Link href={`/${lang}/partners`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.partners}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">{dict.footer.solutions}</h3>
            <nav className="mt-4 space-y-2">
              <Link
                href={`/${lang}/online-payments`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.onlinePayments}
              </Link>
              <Link href={`/${lang}/pos`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.posPayments}
              </Link>
              <Link href={`/${lang}/issuing`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.issuing}
              </Link>
              <Link href={`/${lang}/gateway`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.gateway}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">{dict.footer.businessTypes}</h3>
            <nav className="mt-4 space-y-2">
              <Link
                href={`/${lang}/solutions/ecommerce`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.ecommerce}
              </Link>
              <Link
                href={`/${lang}/solutions/retail`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.retail}
              </Link>
              <Link
                href={`/${lang}/solutions/marketplace`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.marketplace}
              </Link>
              <Link
                href={`/${lang}/solutions/business`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.business}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">{dict.footer.resources}</h3>
            <nav className="mt-4 space-y-2">
              <Link href={`/${lang}/docs`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.docs}
              </Link>
              <Link href={`/${lang}/help`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.helpCenter}
              </Link>
              <Link href={`/${lang}/security`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.security}
              </Link>
              <Link
                href={`/${lang}/fraud-prevention`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.fraudPrevention}
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-foreground">{dict.footer.legal}</h3>
            <nav className="mt-4 space-y-2">
              <Link
                href={`/${lang}/privacy-policy`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.privacyPolicy}
              </Link>
              <Link href={`/${lang}/terms`} className="block text-sm text-muted-foreground hover:text-foreground">
                {dict.footer.termsOfService}
              </Link>
              <Link
                href={`/${lang}/cookie-policy`}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.footer.cookiePolicy}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
