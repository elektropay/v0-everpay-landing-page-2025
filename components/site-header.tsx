import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">Everpay</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
        <Button>Sign In</Button>
      </div>
    </header>
  )
}
