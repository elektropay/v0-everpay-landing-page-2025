export function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="max-w-3xl flex flex-col justify-center">
            <h2 className="mb-6 text-4xl font-bold">Innovative Payment Solutions for Modern Businesses</h2>
            <p className="mb-8 text-xl text-gray-600">
              Streamline your payment processing with our secure, reliable, and easy-to-use platform.
            </p>
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-medium text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[500px] w-[250px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-800/40 to-gray-600/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[220px] rounded-3xl bg-white p-4 shadow-lg">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-xs font-semibold text-gray-500">Main View</div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs text-gray-500">Total Balance</div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">$123,981.00</div>
                      <div className="flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                        +8%
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-4 gap-2">
                    {["Deposit", "Withdraw", "Transfer", "Send"].map((action, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-xs">{action}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
