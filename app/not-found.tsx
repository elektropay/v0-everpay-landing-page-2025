import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
          <div className="space-y-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-[#4CAF50]/10 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-[#4CAF50]/20 animate-pulse delay-100"></div>
              <div className="absolute inset-8 rounded-full bg-[#4CAF50]/30 animate-pulse delay-200"></div>
              <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-[#4CAF50]">
                404
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
              <p className="text-lg text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
            </div>

            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-[#4CAF50] rounded-full hover:bg-[#45a049] transition-colors"
              >
                Go back home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
