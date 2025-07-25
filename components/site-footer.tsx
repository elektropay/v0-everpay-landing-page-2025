"use client"

import type React from "react"

import { Link } from "@/lib/i18n/navigation"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/types"

interface SiteFooterProps {
  dict: Messages
  lang: Locale
}

export function SiteFooter({ dict, lang }: SiteFooterProps) {
  return (
    <footer className="w-full border-t bg-background py-8 md:py-12">
      <div className="container grid grid-cols-2 gap-8 px-4 md:grid-cols-5 md:px-6">
        <div className="col-span-2 md:col-span-1">
          <Link href={`/${lang}`} className="flex items-center gap-2 font-semibold">
            <DollarSignIcon className="h-6 w-6" />
            <span className="sr-only">Everpay</span>
            Everpay
          </Link>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{dict.footer.copyright}</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.company.title}</h3>
          <Link className="text-sm hover:underline" href={`/${lang}/about`}>
            {dict.footer.company.about}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/careers`}>
            {dict.footer.company.careers}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/blog`}>
            {dict.footer.company.blog}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/partners`}>
            {dict.footer.company.partners}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.products.title}</h3>
          <Link className="text-sm hover:underline" href={`/${lang}/payments`}>
            {dict.footer.products.payments}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/online-payments`}>
            {dict.footer.products.onlinePayments}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/fraud-prevention`}>
            {dict.footer.products.fraudPrevention}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/issuing`}>
            {dict.footer.products.cardIssuing}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/pos`}>
            {dict.footer.products.posSystems}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.solutions.title}</h3>
          <Link className="text-sm hover:underline" href={`/${lang}/solutions/business`}>
            {dict.footer.solutions.business}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/solutions/ecommerce`}>
            {dict.footer.solutions.ecommerce}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/solutions/marketplace`}>
            {dict.footer.solutions.marketplace}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/solutions/retail`}>
            {dict.footer.solutions.retail}
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">{dict.footer.resources.title}</h3>
          <Link className="text-sm hover:underline" href={`/${lang}/docs`}>
            {dict.footer.resources.docs}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/help`}>
            {dict.footer.resources.help}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/api`}>
            {dict.footer.resources.api}
          </Link>
          <h3 className="text-lg font-semibold mt-4">{dict.footer.legal.title}</h3>
          <Link className="text-sm hover:underline" href={`/${lang}/privacy-policy`}>
            {dict.footer.legal.privacyPolicy}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/terms`}>
            {dict.footer.legal.termsOfService}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/cookie-policy`}>
            {dict.footer.legal.cookiePolicy}
          </Link>
        </div>
      </div>
    </footer>
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
