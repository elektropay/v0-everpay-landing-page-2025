import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-xs text-gray-500">© {new Date().getFullYear()} PROS Corp. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-black">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-gray-500 hover:text-black">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
