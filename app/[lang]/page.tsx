import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        {/* Payment Gateway Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold leading-tight">
                  Seamless Payment Gateway Solutions for Your Business
                </h2>
                <p className="mb-6 text-gray-600">
                  Our payment gateway integrates effortlessly with your existing systems, allowing you to accept
                  payments across multiple channels. With industry-leading security features and optimized checkout
                  experiences, you can focus on growing your business.
                </p>
                <div>
                  <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                  alt="Payment gateway"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Secure Payment Processing Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold leading-tight">
                  Secure Payment Processing Solutions for Your Business
                </h2>
                <p className="mb-6 text-gray-600">
                  Protect your business and customers with our advanced security features, including encryption, fraud
                  detection, and compliance with industry standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">PCI DSS Compliance</h3>
                      <p className="text-sm text-gray-600">Highest level of payment security certification</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Fraud Prevention</h3>
                      <p className="text-sm text-gray-600">Advanced AI-powered fraud detection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
                  alt="Secure payment processing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Payments Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Seamless Mobile Payments for On-the-Go Transactions and Customer Convenience
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Accept Payments Anywhere",
                  description:
                    "Turn your smartphone or tablet into a mobile point-of-sale system and accept payments on the go.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                      <path
                        fillRule="evenodd"
                        d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Contactless Payments",
                  description:
                    "Enable fast, secure contactless payments with NFC technology for a seamless customer experience.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                      <path
                        fillRule="evenodd"
                        d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Digital Wallet Integration",
                  description:
                    "Integrate with popular digital wallets like Apple Pay and Google Pay for convenient customer payments.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Discover the seamless journey of our payment solutions from start to finish
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Register for integration in just minutes",
                  description: "Our streamlined onboarding process gets you up and running quickly",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
                },
                {
                  title: "Choose the right payment methods for your business",
                  description: "Customize your payment stack to meet your specific needs",
                  image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80",
                },
                {
                  title: "Start accepting payments and grow your business",
                  description: "Begin processing transactions securely and efficiently",
                  image: "https://images.unsplash.com/photo-1556742188-a301076d9d18?auto=format&fit=crop&q=80",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative mb-4 h-[200px]">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unlock Power Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold leading-tight">Unlock the Power of Seamless Payments</h2>
                <p className="mb-6 text-gray-600">
                  Our comprehensive payment platform enables businesses of all sizes to accept payments anywhere,
                  anytime. With cutting-edge security features and intuitive interfaces, we make payment processing
                  simple and efficient.
                </p>
                <div>
                  <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1556742205-e10c9486e506?auto=format&fit=crop&q=80"
                  alt="Seamless payments"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* POS Solutions Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold leading-tight">Discover Our Cutting-Edge POS Solutions</h2>
                <p className="mb-6 text-gray-600">
                  Transform your in-store experience with our advanced point-of-sale systems. Designed for speed,
                  reliability, and ease of use.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                    <span>Intuitive touchscreen interface</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                    <span>Integrated inventory management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                    <span>Real-time sales analytics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                    <span>Customer relationship tools</span>
                  </li>
                </ul>
                <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80"
                  alt="POS solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Happy customer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mb-4 text-lg font-medium italic">
                  "Implementing Everpay has transformed our business. The seamless checkout process and robust analytics
                  have helped us increase sales and improve customer satisfaction."
                </blockquote>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">CEO, Retail Innovations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Discover Our Remarkable Achievement and Proven Success
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold">93%</p>
                <p className="text-gray-600">Increase in transaction speed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-gray-600">PCI DSS compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold leading-tight">Transform Your Payment Experience</h2>
                <p className="mb-6 text-gray-600">
                  Join thousands of businesses that trust Everpay for their payment processing needs. Our platform is
                  designed to grow with your business, providing scalable solutions for every stage.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90">Get Started Today</Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1556742208-999815fca738?auto=format&fit=crop&q=80"
                  alt="Payment experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
