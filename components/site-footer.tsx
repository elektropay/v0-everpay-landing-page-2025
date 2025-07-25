"use client"

import { Link } from "@/lib/i18n/navigation"
import { useMessages } from "next-intl"
import type { Locale } from "@/lib/i18n/types"
import Image from "next/image"

interface SiteFooterProps {
  lang: Locale
}

export function SiteFooter({ lang }: SiteFooterProps) {
  const messages = useMessages()
  const dict = messages as any

  return (
    <footer className="w-full bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-5 md:px-6">
        <div className="col-span-1 md:col-span-2">
          <Link className="flex items-center gap-2" href={`/${lang}`}>
            <Image src="/placeholder-logo.png" alt="Everpay Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{dict.footer.copyright}</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.company}</h3>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/about`}
          >
            {dict.footer.aboutUs}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/careers`}
          >
            {dict.footer.careers}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/blog`}
          >
            {dict.footer.blog}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/partners`}
          >
            {dict.footer.partners}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.solutions}</h3>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/solutions/ecommerce`}
          >
            {dict.footer.ecommerce}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/solutions/retail`}
          >
            {dict.footer.retail}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/solutions/marketplace`}
          >
            {dict.footer.marketplace}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/solutions/business`}
          >
            {dict.footer.business}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.developers}</h3>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/api`}
          >
            {dict.footer.apiReference}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/docs`}
          >
            {dict.footer.documentation}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/docs`}
          >
            {dict.footer.sdks}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.support}</h3>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/help`}
          >
            {dict.footer.helpCenter}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/contact`}
          >
            {dict.footer.contactUs}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/fraud-prevention`}
          >
            {dict.footer.fraudPrevention}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/security`}
          >
            {dict.footer.security}
          </Link>
          <h3 className="mt-4 text-lg font-semibold">{dict.footer.legal}</h3>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/privacy-policy`}
          >
            {dict.footer.privacyPolicy}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/terms`}
          >
            {dict.footer.termsOfService}
          </Link>
          <Link
            className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={`/${lang}/cookie-policy`}
          >
            {dict.footer.cookiePolicy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
