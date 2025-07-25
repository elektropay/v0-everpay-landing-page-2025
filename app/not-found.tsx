import { Link } from "@/lib/i18n/navigation"
import { defaultLocale } from "@/lib/i18n/config"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-background px-4 py-12 text-center">
      <h1 className="text-9xl font-bold tracking-tighter text-primary">404</h1>
      <p className="mt-4 text-2xl font-medium text-foreground">Page Not Found</p>
      <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
      <Link href={`/${defaultLocale}`} className="mt-8">
        <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Go to Homepage
        </button>
      </Link>
    </div>
  )
}
