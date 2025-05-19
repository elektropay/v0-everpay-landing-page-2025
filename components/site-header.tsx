export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="mr-6 text-xl font-bold">
            Everpay
          </a>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <a href="/products" className="text-gray-600 hover:text-gray-900">
                  Products
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-gray-600 hover:text-gray-900">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/developers" className="text-gray-600 hover:text-gray-900">
                  Developers
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
