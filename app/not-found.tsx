import { getDictionary } from "@/lib/i18n"
import { defaultLocale } from "@/lib/i18n/config"
import { Link } from "@/lib/i18n/navigation"

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold">{dict.notFound.title}</h1>
      <p className="mt-4 text-xl text-muted-foreground">{dict.notFound.description}</p>
      <Link href={`/${defaultLocale}`} className="mt-8 text-primary hover:underline">
        {dict.notFound.goHome}
      </Link>
    </div>
  )
}
