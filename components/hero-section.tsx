import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-heading">
                The payment infrastructure for the internet
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-sans">
                Millions of businesses of all sizes—from startups to large enterprises—use Everpay's software and APIs
                to accept payments, send payouts, and manage their businesses online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3 rounded-full text-lg font-medium font-sans"
              >
                Start now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-lg font-medium font-sans bg-transparent"
              >
                Contact sales
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500 font-sans">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Always available</span>
              </div>
              <div>No setup fees</div>
              <div>Cancel anytime</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 font-heading">Payment Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600 font-sans">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900 font-heading">$2,847,392</p>
                    </div>
                    <div className="text-green-500 text-sm font-medium font-sans">+12.5%</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600 font-sans">Transactions</p>
                      <p className="text-xl font-bold text-gray-900 font-heading">24,847</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-600 font-sans">Success Rate</p>
                      <p className="text-xl font-bold text-gray-900 font-heading">99.2%</p>
                    </div>
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
