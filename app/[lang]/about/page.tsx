import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Transforming Global Commerce Through Innovation</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're building the future of digital payments, enabling businesses worldwide to thrive in the digital
                economy.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  To empower businesses of all sizes with innovative payment solutions that drive growth and enable
                  seamless commerce across borders.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">150+</div>
                    <p className="text-gray-600">Countries Served</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">$2B+</div>
                    <p className="text-gray-600">Processed Annually</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">50K+</div>
                    <p className="text-gray-600">Merchants</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">99.99%</div>
                    <p className="text-gray-600">Uptime</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Team collaboration image</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation First",
                  description: "Constantly pushing boundaries to create cutting-edge payment solutions.",
                },
                {
                  title: "Customer Success",
                  description: "Your growth is our priority. We succeed when you succeed.",
                },
                {
                  title: "Global Mindset",
                  description: "Building solutions that work seamlessly across borders and cultures.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future of Payments</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a small business or a large enterprise, we have the solutions to help you grow.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
