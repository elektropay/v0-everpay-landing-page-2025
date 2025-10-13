import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function BusinessTypesSection() {
  const businesses = [
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      category: "Small Business",
      amount: "$60k",
      description: "We can evaluate your needs and build cutting-edge payment solutions for your business.",
      link: "Learn more",
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      category: "Ecommerce",
      amount: "$80k",
      description: "We can evaluate your needs and build cutting-edge payment solutions for your business.",
      link: "Learn more",
    },
  ]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-[#1AA478] uppercase tracking-wider">TAILORED BUSINESS TYPES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#193638] mt-4">We Drive Growth for All Business Types</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Trusted by thousands of businesses worldwide, we grow faster with streamlined solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-fade-in-up hover:scale-102"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64">
                <Image
                  src={business.image || "/placeholder.svg"}
                  alt={business.category}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-[#193638]">{business.amount}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#193638] mb-3">{business.category}</h3>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#1AA478] font-semibold hover:gap-3 transition-all"
                >
                  {business.link}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
