import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Users,
  ShieldCheck,
  Handshake,
  Zap,
  Headphones,
  Lock,
  BarChart3,
  Clock,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const perks = [
  {
    icon: Zap,
    title: "Instant onboarding",
    description:
      "Start accepting payments in minutes with our intuitive setup. No complex integrations or lengthy approvals.",
  },
  {
    icon: Headphones,
    title: "24/7 dedicated support",
    description:
      "Our team is available around the clock to answer questions, troubleshoot issues, and help you grow.",
  },
  {
    icon: Lock,
    title: "Non-custodial approach",
    description:
      "Your funds remain yours. We process and route payments, but you always maintain full control of your money.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description:
      "Monitor every transaction, track settlement timelines, and gain actionable insights from your dashboard.",
  },
  {
    icon: Clock,
    title: "99.99% uptime SLA",
    description:
      "Built on redundant infrastructure across multiple regions so your payments never stop processing.",
  },
  {
    icon: Award,
    title: "Ongoing rewards",
    description:
      "Volume-based pricing tiers, referral bonuses, and early access to new products for loyal merchants.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-[760px] mx-auto text-center">
              <h1
                className="text-4xl md:text-[56px] lg:text-[64px] font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Our Values
              </h1>
              <p
                className="text-lg md:text-xl text-gray-500 max-w-[600px] mx-auto leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Working with Everpay -- whether as a merchant, partner, or team member -- means believing in what we are
                passionate about and standing behind our core values. Here is what drives us every day.
              </p>
            </div>
          </div>
        </section>

        {/* Value 1: Growing Together */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-6">
                  <Handshake className="h-6 w-6 text-[#1aa478]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Growing together<br />
                  <span className="text-[#1aa478]">through partnership</span>
                </h2>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We strongly believe in the power of relationships. Connecting and working closely with merchants,
                  acquirers, card networks, and technology partners is essential to who we are. It allows us to deliver better
                  products, expand into new markets, and create value for everyone in the payments ecosystem. The only way
                  digital commerce reaches its full potential is when we build and grow together.
                </p>
              </div>
              <div className="relative h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.jpg"
                  alt="Team collaborating on payment solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value 2: People First */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[380px] rounded-2xl overflow-hidden md:order-first">
                <Image
                  src="/mobile-card-reader.jpg"
                  alt="Customer using Everpay payment terminal"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-[#1aa478]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  We care<br />
                  <span className="text-[#1aa478]">about people</span>
                </h2>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Payments are digital, but they exist to serve real people and real businesses. That is why we put merchants
                  at the center of every decision we make. We aim to set a higher standard for support, transparency, and
                  reliability. When you have questions that need answers, you can count on us at any hour of the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value 3: Accountability */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-[#1aa478]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  We are all accountable<br />
                  <span className="text-[#1aa478]">for our future</span>
                </h2>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  The payments industry demands we stay ahead of rapidly changing needs. Doing things right is excellent,
                  but being first in line to break new ground is better. We invest in innovation not just for today but for the
                  merchants and markets of tomorrow. With Everpay you are always on the leading edge of payment
                  technology, security, and compliance.
                </p>
              </div>
              <div className="relative h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src="/countertop-pos-terminal.jpg"
                  alt="Modern payment technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value 4: Trust */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[380px] rounded-2xl overflow-hidden md:order-first">
                <Image
                  src="/tablet-pos-system.jpg"
                  alt="Secure payment processing"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-[#1aa478]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Trust leads<br />
                  <span className="text-[#1aa478]">to more trust</span>
                </h2>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We understand how much your business means to you and how important it is to trust your payments in
                  good hands. From the moment you join Everpay, we are on trust-based terms. PCI DSS Level 1 certified,
                  encrypted end-to-end, and monitored 24/7. As long as our relationship starts from mutual trust, we can
                  only work to earn more of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value 5: Long-Term Relationships */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-6">
                  <Handshake className="h-6 w-6 text-[#1aa478]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  We prefer long-term<br />
                  <span className="text-[#1aa478]">relationships</span>
                </h2>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Stick around for the full ride. Merchants who grow with us unlock volume-based pricing, early access to
                  new features, and dedicated account management. Learn how we work, enjoy our platform, tell us what you
                  need, and watch us build to match your expectations.
                </p>
              </div>
              <div className="relative h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src="/modern-pos-terminal-payment-system.jpg"
                  alt="Growing business with Everpay"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value 6: Global Mindset */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[380px] rounded-2xl overflow-hidden md:order-first">
                <Image
                  src="/placeholder.jpg"
                  alt="Global payments network"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-[#1aa478]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Global mindset<br />
                  <span className="text-[#1aa478]">and reach</span>
                </h2>
                <p
                  className="text-gray-500 text-base leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Everpay operates across 150+ countries with support for 100+ currencies and every major local payment
                  method. Our distributed team and infrastructure means someone, somewhere, is always monitoring your
                  transactions. That is partly the reason for our 99.99% uptime SLA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perks Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px] mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                The Everpay experience
              </h2>
              <p className="text-gray-500 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Everything you get when you partner with us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-[#1aa478]/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-5">
                    <perk.icon className="h-5 w-5 text-[#1aa478]" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {perk.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0A2F2F]">
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Become a merchant
            </h2>
            <p
              className="text-gray-400 text-lg max-w-[540px] mx-auto mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We are grateful for the opportunity to show you why Everpay is the right choice for your business.
              Reliable, easy to navigate, and customer-first payments are at the heart of our service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="https://app.everpayinc.com/sign-up" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#1aa478] hover:bg-[#158f68] text-white rounded-full px-8 h-12 text-base font-semibold shadow-none min-w-[200px]"
                >
                  Get started
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-8 h-12 text-base font-semibold shadow-none min-w-[200px]"
                >
                  Contact us
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
