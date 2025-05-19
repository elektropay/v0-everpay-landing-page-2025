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
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Learn About Security
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-500">Security Features Illustration</span>
          </div>
        </div>
      </div>
    </section>
  )
}
