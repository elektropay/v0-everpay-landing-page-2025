import { Link } from "@/lib/i18n/navigation"
import { getMessages } from "next-intl/server"
import type { Locale } from "@/lib/i18n/config"

type Props = {
  params: { lang: Locale }
}

export default async function NotFoundPage({ params: { lang } }: Props) {
  const messages = await getMessages({ locale: lang })

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href={`/${lang}`} passHref>
        <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Go to Homepage
        </button>
      </Link>
    </div>
  )
}
