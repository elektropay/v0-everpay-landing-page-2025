export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">100M+</h2>
            <p className="text-gray-300 md:text-xl">Transactions processed annually</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">135+</h2>
            <p className="text-gray-300 md:text-xl">Currencies supported</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">99.9%</h2>
            <p className="text-gray-300 md:text-xl">Uptime reliability</p>
          </div>
        </div>
      </div>
    </section>
  )
}
