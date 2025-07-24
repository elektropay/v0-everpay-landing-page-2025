import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Careers at Everpay</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our team and help us build the future of payments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Work With Us?</h2>
                <ul className="grid gap-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <li>
                    <span className="font-semibold">Innovative Environment:</span> Work on cutting-edge payment
                    technologies.
                  </li>
                  <li>
                    <span className="font-semibold">Growth Opportunities:</span> Develop your skills and advance your
                    career.
                  </li>
                  <li>
                    <span className="font-semibold">Collaborative Culture:</span> Be part of a supportive and diverse
                    team.
                  </li>
                  <li>
                    <span className="font-semibold">Impactful Work:</span> Contribute to solutions that empower
                    businesses globally.
                  </li>
                </ul>
              </div>
            </div>
            <Image
              alt="Careers"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXJlZXJzJTIwdGVhbXxlbnwwfHx8fDE3MDk4NjU2NzB8MA&ixlib=rb-4.0.3&q=80&w=800"
              width="550"
              unoptimized="true"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Open Positions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Software Engineer (Backend)</h3>
                <p className="text-gray-500 mb-4">Develop and maintain our core payment processing systems.</p>
                <Button className="text-blue-600 hover:underline" variant="link" href="#">
                  Apply Now
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Product Manager</h3>
                <p className="text-gray-500 mb-4">Define and execute the product roadmap for our payment solutions.</p>
                <Button className="text-blue-600 hover:underline" variant="link" href="#">
                  Apply Now
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Sales Executive</h3>
                <p className="text-gray-500 mb-4">
                  Drive revenue growth by expanding our client base and partnerships.
                </p>
                <Button className="text-blue-600 hover:underline" variant="link" href="#">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
