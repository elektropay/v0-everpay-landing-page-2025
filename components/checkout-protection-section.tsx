import { Check } from "lucide-react"

export function CheckoutProtectionSection() {
  const features = [
    {
      title: "Sophisticated Login Protection",
      description: "Multi-factor authentication and biometric security to safeguard every account access.",
    },
    {
      title: "Advanced Grievance",
      description: "Real-time fraud detection with AI-powered algorithms to identify suspicious activities instantly.",
    },
    {
      title: "Widespread Authentication",
      description: "Industry-leading encryption standards ensuring all sensitive data remains protected.",
    },
  ]

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="text-sm font-semibold text-[#1AA478] uppercase tracking-wider">
              ADVANCED SECURITY SYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#193638] mt-4 mb-6">Trusted Checkout Protection</h2>
            <p className="text-gray-600 mb-8">
              Our comprehensive security infrastructure ensures every transaction is protected with enterprise-grade
              encryption and fraud prevention.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-fade-in-left"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1AA478] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#193638] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-right animation-delay-400">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Security Score</div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div className="bg-[#1AA478] h-3 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <span className="text-2xl font-bold text-[#193638]">95%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-xs text-green-600 font-semibold mb-1">VERIFIED</div>
                    <div className="text-lg font-bold text-[#193638]">2,450</div>
                    <div className="text-xs text-gray-500">Transactions</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="text-xs text-blue-600 font-semibold mb-1">PROTECTED</div>
                    <div className="text-lg font-bold text-[#193638]">100%</div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
