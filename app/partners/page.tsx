import Link from "next/link"
import Image from "next/image"

export default function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Partners</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Collaborating with industry leaders to provide comprehensive solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                alt="Partner Logo"
                className="mb-4"
                height="80"
                src="/placeholder.svg?height=80&width=160"
                width="160"
              />
              <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-gray-500 mb-4">
                Seamless integration with leading e-commerce platforms for online businesses.
              </p>
              <Link className="text-blue-600 hover:underline" href="#">
                Visit Website
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                alt="Partner Logo"
                className="mb-4"
                height="80"
                src="/placeholder.svg?height=80&width=160"
                width="160"
              />
              <h3 className="text-xl font-bold mb-2">Financial Institutions</h3>
              <p className="text-gray-500 mb-4">
                Partnerships with banks and financial institutions for secure and reliable transactions.
              </p>
              <Link className="text-blue-600 hover:underline" href="#">
                Visit Website
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                alt="Partner Logo"
                className="mb-4"
                height="80"
                src="/placeholder.svg?height=80&width=160"
                width="160"
              />
              <h3 className="text-xl font-bold mb-2">Technology Providers</h3>
              <p className="text-gray-500 mb-4">
                Collaborating with technology companies to enhance our payment solutions.
              </p>
              <Link className="text-blue-600 hover:underline" href="#">
                Visit Website
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
