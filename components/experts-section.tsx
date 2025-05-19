import Link from "next/link"

export function ExpertsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid-layout">
          {/* First row */}
          <div className="grid-cell">
            <div className="globe mb-6"></div>
            <p className="text-sm">
              Easily manage their finances with access to transaction history, cashback rewards, credit management and
              other essential banking features.
            </p>
          </div>

          <div className="grid-cell"></div>

          <div className="grid-cell"></div>

          <div className="grid-cell">
            <div className="text-right">
              <p className="mb-1 text-xs font-medium">BANK THAT</p>
              <p className="mb-1 text-xs font-medium">MAKES LIFE</p>
              <p className="text-xs font-medium">EASY</p>
            </div>
          </div>

          {/* Second row */}
          <div className="grid-cell"></div>

          <div className="grid-cell col-span-2 row-span-2 flex flex-col items-center justify-center text-center">
            <div className="mb-6 text-5xl font-bold">
              <span className="inline-block">&</span>
            </div>
            <h2 className="mb-8 text-5xl font-bold text-center">
              WE ARE EXPERTS
              <br />
              IN BANKING
            </h2>
            <Link
              href="/open-card"
              className="group flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-all hover:bg-black/90"
            >
              Open a card
              <span className="ml-2 font-mono transition-transform group-hover:translate-x-0.5">→→→</span>
            </Link>
          </div>

          <div className="grid-cell">
            <div className="relative h-40 w-full">
              <div className="absolute -right-6 -top-6 h-full w-full">
                <div className="relative h-full w-full">
                  <div className="card-pros absolute bottom-0 left-0 h-32 w-48 -rotate-6 shadow-md">
                    <div className="relative z-10 p-3">
                      <div className="mb-10 text-sm font-bold">#PROS</div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-8 rounded bg-gray-200/50"></div>
                        <div className="text-xs">**** 4789</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-10 h-32 w-48 rounded-xl bg-black shadow-md">
                    <div className="p-3">
                      <div className="mb-10 text-sm font-bold text-white">#PROS</div>
                      <div className="flex items-center">
                        <div className="mr-2 h-6 w-8 rounded bg-gray-500"></div>
                        <div className="text-xs text-white">**** 5567</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="grid-cell"></div>

          <div className="grid-cell">
            <div className="globe"></div>
          </div>

          <div className="grid-cell">
            <p className="text-sm">
              Transfer money to other cards, including friends from their mobile contacts, top up their cards, utilize
              template payments and access a list of recent payments for streamlined financial transactions
            </p>
          </div>
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
      </div>
    </section>
  )
}
