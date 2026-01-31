import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Shield, Lock, CheckCircle, Server, Eye, FileCheck, Globe, ClipboardCheck } from "lucide-react"
import Link from "next/link"

const securityPillars = [
  {
    title: "Enterprise-Grade Security",
    description: "PCI DSS, encryption, fraud monitoring",
    icon: Shield,
  },
  {
    title: "Global Compliance",
    description: "Network rules, regulatory alignment, audit-ready",
    icon: Globe,
  },
  {
    title: "Reliable Operations",
    description: "High availability, redundancy, real-time monitoring",
    icon: Server,
  },
]

const securityFeatures = [
  {
    title: "PCI DSS Compliance",
    description: "Our systems are fully aligned with PCI Data Security Standards to safeguard cardholder data.",
    icon: Shield,
  },
  {
    title: "Encryption & Data Protection",
    description: "Sensitive data is encrypted in transit and at rest, with strict access controls across our platform.",
    icon: Lock,
  },
  {
    title: "Fraud Prevention & Monitoring",
    description: "Advanced transaction monitoring and intelligent risk controls help detect and prevent fraudulent activity in real time.",
    icon: Eye,
  },
  {
    title: "Multi-Layered Security Architecture",
    description: "From network firewalls to secure APIs, Everpay is built with defense in depth for maximum resilience.",
    icon: Server,
  },
]

const operationalFeatures = [
  {
    title: "High Availability & Redundancy",
    description: "Our cloud-based platform is designed to minimize downtime and ensure continuous payment processing.",
  },
  {
    title: "Disaster Recovery",
    description: "Robust backup and recovery procedures protect critical systems and data across multiple regions.",
  },
  {
    title: "Transparent Reporting & Auditability",
    description: "Centralized logging and reporting enable merchants and regulators to monitor activity and support compliance requirements.",
  },
]

const complianceFeatures = [
  {
    title: "Network Compliance",
    description: "Adheres to Visa, Mastercard, and other major card network requirements.",
    icon: CheckCircle,
  },
  {
    title: "Regulatory Awareness",
    description: "Designed to integrate with licensed financial institutions, acquirers, and local regulatory frameworks.",
    icon: Globe,
  },
  {
    title: "Ongoing Reviews & Certifications",
    description: "Regular security assessments and audits to maintain the highest industry standards.",
    icon: ClipboardCheck,
  },
]

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0A2F2F] text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                Secure Payments, Trusted Everywhere
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                Everpay protects merchants, their customers, and partner institutions with enterprise-grade security, 
                compliance, and operational reliability — all on a unified payments platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#1aa478] hover:bg-[#158f68] text-white">
                  Learn More About Security
                </Button>
                <Link href="/demo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white bg-transparent text-white hover:bg-white/10"
                  >
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Merchants Trust Everpay */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Why Merchants Trust Everpay
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Trust and security are at the core of everything we do. We know that payments are mission-critical.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {securityPillars.map((pillar, index) => (
                <div key={index} className="p-8 bg-white border rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#1aa478]/10 rounded-full flex items-center justify-center">
                    <pillar.icon className="h-8 w-8 text-[#1aa478]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{pillar.title}</h3>
                  <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security You Can Rely On */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Security You Can Rely On
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              We design our platform to protect merchants, their customers, and partner institutions while ensuring seamless payment experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="p-6 border rounded-xl bg-white shadow-sm flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-[#1aa478]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{feature.title}</h3>
                    <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Reliability */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Operational Reliability
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Built for continuous uptime and resilient operations across global markets.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {operationalFeatures.map((feature, index) => (
                <div key={index} className="p-6 border rounded-xl bg-white shadow-sm">
                  <div className="w-10 h-10 mb-4 bg-[#1aa478]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-[#1aa478]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{feature.title}</h3>
                  <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Regulatory Alignment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Compliance & Regulatory Alignment
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Everpay is designed to operate within the requirements of regulated payment ecosystems. Our platform aligns with industry standards and network rules to support compliant, secure, and transparent payment operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="p-6 border rounded-xl bg-white shadow-sm">
                  <div className="w-12 h-12 mb-4 bg-[#1aa478]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{feature.title}</h3>
                  <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-[#0A2F2F] rounded-xl text-white text-center">
              <p className="text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Everpay does not replace regulated financial institutions — we enable them. Our role is to provide the technology layer that allows compliant payment acceptance, routing, and settlement at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Center CTA */}
        <section className="bg-[#0A2F2F] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
              Everpay is Your Trusted Payments Partner
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              We are not just a payments platform — we are a trusted partner, enabling secure, compliant, and reliable payment operations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/demo">
                <Button size="lg" className="bg-[#1aa478] hover:bg-[#158f68] text-white">
                  Request a Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white/10">
                  Contact Us
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
