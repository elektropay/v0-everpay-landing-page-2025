import Link from "next/link"
import { defaultLocale } from "@/lib/i18n/config"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Page Not Found</p>
      <p className="mt-2 text-gray-500 dark:text-gray-500">The page you are looking for does not exist.</p>
      <Link
        className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href={`/${defaultLocale}`}
      >
        Go to Homepage
      </Link>
    </div>
  )
}
