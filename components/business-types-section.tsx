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
              <div className="p-0">
                <div className="relative h-48 bg-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <button className="text-[#4CAF50] hover:text-[#45a049] flex items-center">
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
