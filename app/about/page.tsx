export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">Everpay</h1>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Everpay is a leading provider of payment solutions for businesses of all sizes. Founded in 2009, we've
              been helping companies of all sizes streamline their payment processes and improve their bottom line.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Our mission is to make payments simple, secure, and accessible for everyone. We believe that businesses
              should be able to focus on what they do best, without worrying about payment processing.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Security First",
                    description: "We prioritize the security of your transactions above all else.",
                  },
                  {
                    title: "Customer Focus",
                    description: "Our customers' success is our success.",
                  },
                  {
                    title: "Innovation",
                    description: "We're constantly improving our solutions to meet evolving needs.",
                  },
                  {
                    title: "Transparency",
                    description: "We believe in clear, honest communication with our customers.",
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

  
    </div>
  )
}
