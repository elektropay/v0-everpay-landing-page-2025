export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left column with text */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center space-x-2">
              <div className="flex items-center">
                <span className="h-1 w-1 rounded-full bg-black"></span>
                <span className="ml-2 text-xs">01</span>
                <span className="ml-1 text-xs">........</span>
              </div>
              <div className="text-xs">Send, receive and pay anywhere in the world in the most convenient way</div>
            </div>

            <h1 className="mb-8 text-6xl font-bold leading-tight">Smart Payment Solutions</h1>

            <div className="mb-12">
              <p className="text-sm text-black/70">Modern banking solutions for all of your financial needs</p>
            </div>

            <div className="flex items-center space-x-3">
              <button className="group flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-all hover:bg-black/90">
                Get Started
                <span className="ml-2 font-mono transition-transform group-hover:translate-x-0.5">→→→</span>
              </button>
            </div>
          </div>

          {/* Right column with card image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[300px] w-[400px]">
              {/* Credit card image */}
              <div className="absolute right-0 top-0 h-[200px] w-[320px] rotate-6 overflow-hidden rounded-xl shadow-lg">
                <div className="card-pros h-full w-full p-4">
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex justify-between">
                      <span className="font-bold">#PROS</span>
                      <div className="h-6 w-10">
                        <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M35 0H5C2.23858 0 0 2.23858 0 5V19C0 21.7614 2.23858 24 5 24H35C37.7614 24 40 21.7614 40 19V5C40 2.23858 37.7614 0 35 0Z"
                            fill="white"
                          />
                          <path
                            d="M23.5 12C23.5 14.7 21.2 17 18.5 17C15.8 17 13.5 14.7 13.5 12C13.5 9.3 15.8 7 18.5 7C21.2 7 23.5 9.3 23.5 12Z"
                            fill="#EB001B"
                          />
                          <path
                            d="M30.2 7C28.9 7 27.7 7.5 26.9 8.3C26.1 9.1 25.6 10.2 25.6 11.5C25.6 12.8 26.1 13.9 26.9 14.7C27.7 15.5 28.8 16 30.1 16C31.4 16 32.5 15.5 33.3 14.7C34.1 13.9 34.6 12.8 34.6 11.5C34.6 10.2 34.1 9.1 33.3 8.3C32.5 7.5 31.4 7 30.2 7Z"
                            fill="#F79E1B"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-3 h-8 w-12 rounded bg-gray-200/50"></div>
                      <div className="text-xs">**** **** **** 4789</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card interface */}
              <div className="absolute bottom-0 left-0 h-[220px] w-[320px] overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">CARD CONNECTED</span>
                  <span className="text-xs font-medium text-gray-500">STATS</span>
                </div>
                <div className="mb-4 h-px w-full bg-gray-100"></div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500">Main balance</div>
                    <div className="text-xl font-bold">$1,824.50</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Card limit</div>
                    <div className="text-xl font-bold">$10,000</div>
                  </div>
                </div>
                <div className="mb-2 h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 w-1/5 rounded-full bg-primary"></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">$0</span>
                  <span className="text-xs text-gray-500">$10,000</span>
                </div>
              </div>
            </div>

            {/* Dots navigation */}
            <div className="absolute bottom-0 right-0 flex space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
