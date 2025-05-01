import Link from "next/link"

export function AppShowcaseSection() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          {/* Phone mockups */}
          <div className="col-span-1 flex justify-center md:col-span-2">
            <div className="flex space-x-4">
              {/* Dark mode mockup */}
              <div className="relative h-[500px] w-[230px] overflow-hidden rounded-3xl bg-black p-3 shadow-xl">
                <div className="absolute inset-x-0 top-0 h-6 w-full rounded-t-3xl bg-black">
                  <div className="mx-auto mt-1.5 h-1 w-20 rounded-full bg-gray-800"></div>
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-900">
                  <div className="p-4">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Hello, Name</p>
                        <p className="text-sm font-medium text-white">Welcome back</p>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                        <div className="h-6 w-6 rounded-full bg-yellow-400"></div>
                      </div>
                    </div>

                    <div className="mb-6 rounded-xl bg-gray-800 p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs text-gray-400">Total Balance</span>
                        <span className="text-xs text-primary">#PROS</span>
                      </div>
                      <div className="mb-1 text-lg font-bold text-white">$2,748.00</div>
                      <div className="text-xs text-gray-400">+2.3% from last month</div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pb-6">
                      {["Send", "Request", "Bills", "More"].map((action, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                            <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                          </div>
                          <span className="text-xs text-white">{action}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Transactions</span>
                      <span className="text-xs text-primary">View all</span>
                    </div>

                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="mb-3 flex items-center justify-between rounded-lg bg-gray-800 p-2">
                        <div className="flex items-center">
                          <div className="mr-3 h-10 w-10 rounded-full bg-gray-700"></div>
                          <div>
                            <div className="text-xs font-medium text-white">Amazon</div>
                            <div className="text-xs text-gray-400">12 Apr</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-white">-$84.99</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Light mode mockup */}
              <div className="relative h-[500px] w-[230px] overflow-hidden rounded-3xl bg-black p-3 shadow-xl">
                <div className="absolute inset-x-0 top-0 h-6 w-full rounded-t-3xl bg-black">
                  <div className="mx-auto mt-1.5 h-1 w-20 rounded-full bg-gray-800"></div>
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white">
                  <div className="flex flex-col items-center justify-center p-4">
                    <div className="card-pros mb-4 h-[120px] w-full rounded-lg">
                      <div className="relative z-10 p-3">
                        <div className="mb-10 text-sm font-bold">#PROS</div>
                        <div className="flex items-center">
                          <div className="mr-2 h-6 w-8 rounded bg-gray-200/50"></div>
                          <div className="text-xs">**** 4789</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 h-[120px] w-full rounded-lg bg-black">
                      <div className="p-3">
                        <div className="mb-10 text-sm font-bold text-white">#PROS</div>
                        <div className="flex items-center">
                          <div className="mr-2 h-6 w-8 rounded bg-gray-500"></div>
                          <div className="text-xs text-white">**** 5567</div>
                        </div>
                      </div>
                    </div>

                    <div className="h-4"></div>

                    <div className="flex w-full justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-xs">1</span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-xs">2</span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <span className="text-xs">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App details */}
          <div className="flex flex-col items-start justify-center">
            <div className="mb-4 h-12 w-12">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8ZM12 20C12 15.582 15.582 12 20 12C24.418 12 28 15.582 28 20C28 24.418 24.418 28 20 28C15.582 28 12 24.418 12 20Z"
                  fill="white"
                />
                <path
                  d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 36C11.163 36 4 28.837 4 20C4 11.163 11.163 4 20 4C28.837 4 36 11.163 36 20C36 28.837 28.837 36 20 36Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="mb-8 flex flex-col gap-4">
              <Link
                href="/open-card"
                className="group flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-all hover:bg-black/90"
              >
                Open account
                <span className="ml-2 font-mono transition-transform group-hover:translate-x-0.5">→→→</span>
              </Link>

              <Link
                href="/get-app"
                className="group flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                Get the App
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
