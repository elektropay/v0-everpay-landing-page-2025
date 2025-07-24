import Link from "next/link"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Help Center</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to your questions, guides, and support resources.
                </p>
              </div>
              <div className="w-full max-w-md relative">
                <Input className="w-full pl-10 rounded-full" placeholder="Search for articles..." type="search" />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Getting Started</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    Account Setup
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    First Transaction
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    Dashboard Overview
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Payments & Payouts</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    Accepting Payments
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    Managing Payouts
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    Refunds & Disputes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Integrations</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    API Integration
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    E-commerce Platforms
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-900" href="#">
                    POS Systems
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
