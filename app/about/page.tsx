import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white via-green-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Transforming Global Commerce Through Innovation
              </h1>
              <p
                className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
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
              <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  To empower businesses of all sizes with innovative payment solutions that drive growth and enable
                  seamless commerce across borders.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="animate-zoom-in animation-delay-300">
                    <div className="text-4xl font-bold text-[#1aa478] mb-2">150+</div>
                    <p className="text-gray-600">Countries Served</p>
                  </div>
                  <div className="animate-zoom-in animation-delay-400">
                    <div className="text-4xl font-bold text-[#1aa478] mb-2">$2B+</div>
                    <p className="text-gray-600">Processed Annually</p>
                  </div>
                  <div className="animate-zoom-in animation-delay-500">
                    <div className="text-4xl font-bold text-[#1aa478] mb-2">50K+</div>
                    <p className="text-gray-600">Merchants</p>
                  </div>
                  <div className="animate-zoom-in animation-delay-600">
                    <div className="text-4xl font-bold text-[#1aa478] mb-2">99.99%</div>
                    <p className="text-gray-600">Uptime</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-right">
                <Image
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Our Values
            </h2>
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
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1aa478] to-[#158f64]">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Join Us in Shaping the Future of Payments
            </h2>
            <p
              className="text-white/90 mb-8 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Whether you're a small business or a large enterprise, we have the solutions to help you grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-xl">
                Get Started
              </Button>
              </a>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1aa478] rounded-full"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
