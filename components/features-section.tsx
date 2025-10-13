import { ArrowRight } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Global Payment Aggrigation",
      description:
        "Manage and streamline all your global payment sources and transactions in one centralized dashboard with real-time insights.",
    },
    {
      number: "02",
      title: "Effortless Compliance Oversight",
      description:
        "Streamline compliance with automated checks that adhere to industry regulations, ensuring all transactions meet legal requirements.",
    },
    {
      number: "03",
      title: "Multi-Payment System",
      description:
        "Accept diverse payment methods including cards, digital wallets, bank transfers, and cryptocurrency for maximum flexibility.",
    },
  ]

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-[#1AA478] uppercase tracking-wider">
            RAPIDLY PENETRATE NEW MARKETS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#193638] mt-4">Rapidly Penetrate New Markets</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-in-up hover:scale-102"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#1AA478]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#1AA478] font-bold text-lg">{feature.number}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-[#1AA478]" />
              </div>
              <h3 className="text-xl font-bold text-[#193638] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Payment Methods Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">Bank Transfer</span>
              <div className="flex gap-2">
                <div className="w-8 h-6 bg-blue-500 rounded"></div>
                <div className="w-8 h-6 bg-red-500 rounded"></div>
                <div className="w-8 h-6 bg-yellow-500 rounded"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#193638]">$12,540.00</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">Card Payment</span>
              <div className="flex gap-2">
                <div className="w-8 h-6 bg-blue-600 rounded"></div>
                <div className="w-8 h-6 bg-orange-500 rounded"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#193638]">$8,420.00</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">E-Wallet</span>
              <div className="flex gap-2">
                <div className="w-8 h-6 bg-purple-500 rounded"></div>
                <div className="w-8 h-6 bg-green-500 rounded"></div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[#193638]">$5,890.00</div>
          </div>
        </div>
      </div>
    </section>
  )
}
