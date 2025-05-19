export function BusinessTypesSection() {
  const businessTypes = [
    {
      title: "Enterprise",
      description: "Scalable solutions for large organizations",
    },
    {
      title: "Small Business",
      description: "Perfect for growing companies",
    },
    {
      title: "Startups",
      description: "Launch fast and scale with confidence",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">We Drive Growth for All Business Types</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {businessTypes.map((business, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Business Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <button className="text-blue-600 hover:text-blue-700">Learn more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
