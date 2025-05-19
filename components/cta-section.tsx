export function CTASection() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <span className="text-blue-400">🛡️</span>
            </div>
            <div>
              <h3 className="text-sm font-medium">PCI DSS Level 1</h3>
              <p className="text-xs text-gray-400">Highest level of payment security certification</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <span className="text-blue-400">🔒</span>
            </div>
            <div>
              <h3 className="text-sm font-medium">End-to-End Encryption</h3>
              <p className="text-xs text-gray-400">Your data is always protected</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
              <span className="text-blue-400">🛡️</span>
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
              <button className="bg-blue-600 px-8 py-3 rounded-full text-white font-medium hover:bg-blue-700">
                Get Started
              </button>
              <button className="border-2 border-white bg-transparent px-8 py-3 rounded-full text-white font-medium hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </div>
          <div className="hidden md:block">{/* Placeholder for illustration */}</div>
        </div>
      </div>
    </section>
  )
}
