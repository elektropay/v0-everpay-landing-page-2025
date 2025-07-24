import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HelpCenterPage() {
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
                <div className="w-full max-w-md mx-auto">
                  <form className="flex space-x-2">
                    <Input className="flex-1 rounded-full" placeholder="Search for articles..." type="search" />
                    <Button className="rounded-full" type="submit">
                      Search
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link className="hover:underline" href="#">
                      How to create an Everpay account
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      Connecting your bank account
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      Making your first payment
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Payments & Transactions</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link className="hover:underline" href="#">
                      Understanding transaction fees
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      Managing refunds and disputes
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      International payments
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <Link className="hover:underline" href="#">
                      PCI DSS compliance
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      Fraud prevention best practices
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="#">
                      Protecting your account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
