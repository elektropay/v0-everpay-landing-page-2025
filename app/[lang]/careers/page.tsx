import { Button } from "@/components/ui/button"
import Link from "next/link"

const departments = [
  {
    name: "Engineering",
    positions: [
      { title: "Senior Backend Engineer", location: "New York", type: "Full-time" },
      { title: "Frontend Developer", location: "Remote", type: "Full-time" },
      { title: "DevOps Engineer", location: "London", type: "Full-time" },
    ],
  },
  {
    name: "Product & Design",
    positions: [
      { title: "Product Manager", location: "Singapore", type: "Full-time" },
      { title: "UX Designer", location: "Remote", type: "Full-time" },
    ],
  },
  {
    name: "Sales & Marketing",
    positions: [
      { title: "Account Executive", location: "New York", type: "Full-time" },
      { title: "Marketing Manager", location: "London", type: "Full-time" },
      { title: "Sales Development Representative", location: "Singapore", type: "Full-time" },
    ],
  },
]

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and unlimited PTO",
  },
  {
    title: "Growth & Development",
    description: "Learning stipend, conference attendance, and career development opportunities",
  },
  {
    title: "Equity",
    description: "Competitive equity package to share in the company's success",
  },
]

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Join Our Mission to Transform Global Commerce</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're looking for exceptional people to help us build the future of payments.
              </p>
              <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="text-gray-600 mb-6">
                  At Everpay, we're building more than just a payment platform. We're creating an environment where
                  innovation thrives, ideas are valued, and people can do their best work.
                </p>
                <ul className="space-y-4">
                  {[
                    "Innovation and creativity are encouraged",
                    "Diverse and inclusive workplace",
                    "Focus on impact and results",
                    "Continuous learning and growth",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Team collaboration image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-12">
              {departments.map((dept, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-6">{dept.name}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dept.positions.map((position, posIndex) => (
                      <Link
                        key={posIndex}
                        href="#"
                        className="block p-6 rounded-lg border hover:border-[#4CAF50] transition-colors"
                      >
                        <h4 className="font-semibold mb-2">{position.title}</h4>
                        <div className="text-sm text-gray-600">
                          <p>{position.location}</p>
                          <p>{position.type}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind
              for future opportunities.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Submit Your Resume
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
