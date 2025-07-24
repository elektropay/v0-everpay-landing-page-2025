export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-4xl font-bold text-primary">99.9%</h3>
            <p className="text-gray-500">Uptime Guarantee</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">24/7</h3>
            <p className="text-gray-500">Customer Support</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">100+</h3>
            <p className="text-gray-500">Currencies Supported</p>
          </div>
        </div>
      </div>
    </section>
  )
}
