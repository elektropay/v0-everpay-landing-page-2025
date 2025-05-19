export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">Everpay</h1>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">Innovative Payment Solutions for Modern Businesses</h2>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your payment processing with our secure, reliable, and easy-to-use platform.
              </p>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 text-base font-medium text-white hover:bg-green-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Secure Payments",
                  description: "Industry-leading security protocols to protect your transactions.",
                },
                {
                  title: "Easy Integration",
                  description: "Simple API integration with your existing systems.",
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer support for all your needs.",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© {new Date().getFullYear()} Everpay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
