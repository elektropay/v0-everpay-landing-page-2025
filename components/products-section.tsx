export function ProductsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">
            Convenience,
            <br />
            security, trust,
            <br />
            reliability
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="font-bold">PRODUCTS</h3>
        </div>

        <div className="border-t border-gray-200">
          {[
            { code: "[00-1]", name: "Basic card" },
            { code: "[00-2]", name: "Youth card" },
            { code: "[00-3]", name: "Premium Black" },
            { code: "[00-4]", name: "Business card" },
            { code: "[00-5]", name: "All game card" },
          ].map((product, i) => (
            <div key={i} className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center gap-8">
                <span className="text-sm text-gray-500">{product.code}</span>
                <span className="text-sm">{product.name}</span>
              </div>
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 5L21 12M21 12L14 19M21 12H3"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center justify-center rounded-full text-xs">
              <span className="mr-2 h-2 w-2 rounded-full bg-black"></span>
              Open a card
            </a>
            <a href="#" className="flex items-center justify-center rounded-full text-xs">
              <span className="mr-2 h-2 w-2 rounded-full bg-black"></span>
              Get the App
            </a>
            <a href="#" className="flex items-center justify-center rounded-full text-xs">
              <span className="mr-2 h-2 w-2 rounded-full bg-black"></span>
              Learn more about products
            </a>
            <a href="#" className="flex items-center justify-center rounded-full text-xs">
              <span className="mr-2 h-2 w-2 rounded-full bg-black"></span>
              Open a credit card
            </a>
            <a href="#" className="flex items-center justify-center rounded-full text-xs">
              <span className="mr-2 h-2 w-2 rounded-full bg-black"></span>
              Explore cards
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-xs">
              Articles
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300">
                <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 text-xs">
              LinkedIn
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300">
                <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 text-xs">
              Instagram
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300">
                <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 text-xs">
              Twitter
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-300">
                <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
