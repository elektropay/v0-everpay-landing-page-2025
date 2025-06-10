export function CheckoutProtectionSection() {
  const securityFeatures = [
    {
      title: "Sophisticated Login Protection",
      description: "Multi-factor authentication and advanced security measures.",
    },
    {
      title: "Data-Loss Prevention",
      description: "Automatic backups and encryption for all sensitive data.",
    },
    {
      title: "Proactive Fraud Prevention",
      description: "AI-powered fraud detection and prevention systems.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">Trusted Checkout Protection</h2>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#4CAF50"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2 rounded-lg">
              Learn About Security
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
