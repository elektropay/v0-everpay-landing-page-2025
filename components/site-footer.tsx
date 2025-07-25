"use client"

import Image from "next/image"
import { Link } from "@/lib/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { pathnames } from "@/lib/i18n/config"

export function SiteFooter({ lang }: { lang: string }) {
  const t = useTranslations("footer")
  const currentLocale = useLocale()

  const getLocalizedPath = (pathKey: keyof typeof pathnames, locale: string) => {
    const path = pathnames[pathKey]
    if (typeof path === "string") {
      return `/${locale}${path}`
    }
    return `/${locale}${path[locale as keyof typeof path] || path.en}`
  }

  return (
    <footer className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-5 md:px-6">
        <div className="space-y-4 md:col-span-2">
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <Image src="/placeholder-logo.png" alt="Everpay Logo" width={32} height={32} />
            <span className="text-2xl font-bold">Everpay</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t("copyright")}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-50">{t("company")}</h3>
            <nav className="space-y-2">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/about", currentLocale)}
              >
                {t("aboutUs")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/careers", currentLocale)}
              >
                {t("careers")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/blog", currentLocale)}
              >
                {t("blog")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/contact", currentLocale)}
              >
                {t("contactUs")}
              </Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-50">{t("products")}</h3>
            <nav className="space-y-2">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/online-payments", currentLocale)}
              >
                {t("onlinePayments")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/pos", currentLocale)}
              >
                {t("posSolutions")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/gateway", currentLocale)}
              >
                {t("paymentGateway")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/issuing", currentLocale)}
              >
                {t("issuing")}
              </Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-50">{t("solutions")}</h3>
            <nav className="space-y-2">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/solutions/ecommerce", currentLocale)}
              >
                {t("ecommerce")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/solutions/retail", currentLocale)}
              >
                {t("retail")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/solutions/marketplace", currentLocale)}
              >
                {t("marketplace")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/solutions/business", currentLocale)}
              >
                {t("business")}
              </Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-50">{t("resources")}</h3>
            <nav className="space-y-2">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/docs", currentLocale)}
              >
                {t("documentation")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/help", currentLocale)}
              >
                {t("helpCenter")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/api", currentLocale)}
              >
                {t("apiReference")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/partners", currentLocale)}
              >
                {t("partners")}
              </Link>
            </nav>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider text-gray-900 dark:text-gray-50">{t("legal")}</h3>
            <nav className="space-y-2">
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/privacy-policy", currentLocale)}
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/terms", currentLocale)}
              >
                {t("termsOfService")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/cookie-policy", currentLocale)}
              >
                {t("cookiePolicy")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/fraud-prevention", currentLocale)}
              >
                {t("fraudPrevention")}
              </Link>
              <Link
                className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={getLocalizedPath("/security", currentLocale)}
              >
                {t("security")}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
