export function CTASection() {
  return (
    <section className="bg-[#0A2F2F] py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 1.66667L12.5 6.66667L18.3333 7.5L14.1667 11.5833L15.0833 17.5L10 14.8333L4.91667 17.5L5.83333 11.5833L1.66667 7.5L7.5 6.66667L10 1.66667Z"
                  stroke="#4CAF50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">PCI DSS Level 1</h3>
              <p className="text-xs text-gray-400">Highest level of payment security certification</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 10L8.33333 13.3333L15 6.66667"
                  stroke="#4CAF50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">End-to-End Encryption</h3>
              <p className="text-xs text-gray-400">Your data is always protected</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 1.66667L12.5 6.66667L18.3333 7.5L14.1667 11.5833L15.0833 17.5L10 14.8333L4.91667 17.5L5.83333 11.5833L1.66667 7.5L7.5 6.66667L10 1.66667Z"
                  stroke="#4CAF50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Fraud Prevention</h3>
              <p className="text-xs text-gray-400">AI-powered fraud detection and prevention</p>
            </div>
          </div>
        </div>

        {/* CTA Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">Join thousands of businesses transforming their payment experience</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-[#4CAF50] px-8 text-base font-medium text-white transition-colors hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2">
                Get Started
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Contact Us
              </button>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  )
}
