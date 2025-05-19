export function FeaturesSection() {
  const features = [
    {
      title: "Instant Onboarding Process",
      description: "Get started quickly with our streamlined onboarding process.",
    },
    {
      title: "Seamless Integration",
      description: "Easy integration with your existing systems and workflows.",
    },
    {
      title: "Real-time Analytics",
      description: "Track and analyze your payment data in real-time.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Rapidly Penetrate New Markets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scale your business globally with our comprehensive payment solutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="border-2 border-gray-100 p-6 rounded-lg">
              <div className="mb-4 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">→</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-700">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
