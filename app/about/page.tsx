export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Everpay</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about our mission, values, and the team behind Everpay.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Everpay, our mission is to empower businesses of all sizes to thrive in the digital economy by
                  providing secure, reliable, and innovative payment solutions. We believe in simplifying complex
                  financial processes so our clients can focus on what they do best: growing their business.
                </p>
              </div>
            </div>
            <img
              alt="Mission"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg?height=310&width=550"
              width="550"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Values"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg?height=310&width=550"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                <ul className="grid gap-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <li>
                    <span className="font-semibold">Innovation:</span> We constantly seek new ways to improve and
                    deliver cutting-edge solutions.
                  </li>
                  <li>
                    <span className="font-semibold">Integrity:</span> We operate with transparency, honesty, and ethical
                    practices.
                  </li>
                  <li>
                    <span className="font-semibold">Customer Focus:</span> Our clients' success is our top priority.
                  </li>
                  <li>
                    <span className="font-semibold">Excellence:</span> We strive for the highest quality in everything
                    we do.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
