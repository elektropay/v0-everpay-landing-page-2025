import { Button } from "@/components/ui/button"
import { Shield, Lock, CheckCircle, FileCheck } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "PCI DSS Level 1",
    description: "Highest level of payment security certification",
    icon: Shield,
  },
  {
    title: "SOC 2 Type II",
    description: "Independently audited security controls",
    icon: FileCheck,
  },
  {
    title: "ISO 27001",
    description: "International security management standard",
    icon: CheckCircle,
  },
  {
    title: "GDPR Compliant",
    description: "European data protection standards",
    icon: Lock,
  },
]

const securityFeatures = [
  {
    title: "Infrastructure Security",
    description:
      "Our infrastructure is hosted on AWS in multiple regions with real-time data replication, ensuring 99.99% uptime and data redundancy.",
    features: [
      "Multi-region deployment",
      "Real-time data replication",
      "DDoS protection",
      "WAF (Web Application Firewall)",
    ],
  },
  {
    title: "Data Protection",
    description: "All sensitive data is encrypted at rest and in transit using industry-standard encryption protocols.",
    features: [
      "AES-256 encryption at rest",
      "TLS 1.3 for data in transit",
      "HSM for key management",
      "Regular security audits",
    ],
  },
  {
    title: "Payment Security",
    description: "Our payment processing infrastructure meets the highest security standards in the industry.",
    features: ["Tokenization of card data", "3D Secure 2.0 support", "Fraud detection systems", "Real-time monitoring"],
  },
]

const complianceStandards = [
  {
    title: "Banking Compliance",
    items: [
      "Federal Reserve Guidelines",
      "Bank Secrecy Act (BSA)",
      "Anti-Money Laundering (AML)",
      "Know Your Customer (KYC)",
    ],
  },
  {
    title: "Payment Standards",
    items: ["PCI DSS Level 1", "EMV Compliance", "NACHA Operating Rules", "Card Network Rules"],
  },
  {
    title: "Data Privacy",
    items: ["GDPR", "CCPA", "PIPEDA", "Australian Privacy Principles"],
  },
]

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Enterprise-Grade Security</h1>
              <p className="text-xl text-gray-300 mb-8">
                Security is our top priority. We protect billions in payment processing with industry-leading security
                measures and compliance standards.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                  Security Whitepaper
                </Button>
                <a href="/demo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white/10"
                  >
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 border rounded-lg bg-white shadow-sm">
                  <cert.icon className="h-12 w-12 text-[#4CAF50] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Security Infrastructure</h2>
            <div className="space-y-16">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-[#4CAF50]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Compliance & Standards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="p-6 border rounded-lg bg-white shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{standard.title}</h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Center CTA */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Trust Center</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn more about our security practices, compliance certifications, and how we protect your business.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049]">
                Trust Center
              </Button>
              <a href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-transparent text-white hover:bg-white/10"
                >
                  Book a Demo
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
