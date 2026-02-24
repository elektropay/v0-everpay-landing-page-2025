import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart3,
  RefreshCw,
  Percent,
  Banknote,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const highlights = [
  {
    icon: Zap,
    title: "Fast Funding",
    description:
      "Apply in minutes. Get approved and receive capital in as little as 24 hours, so you never miss a growth opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "No Surprise Fees",
    description:
      "One transparent, fixed fee. No periodic interest, no hidden charges, and no late fees. Know your cost upfront.",
  },
  {
    icon: RefreshCw,
    title: "Repay With Sales",
    description:
      "Repayments sync with your revenue. When sales are strong you pay more, when they slow down you pay less.",
  },
  {
    icon: CheckCircle,
    title: "No Equity Required",
    description:
      "Keep full ownership of your business. Everpay Capital is debt financing, not an equity investment.",
  },
]

const steps = [
  {
    step: "01",
    title: "Apply in minutes",
    description:
      "Complete a short application. No extensive paperwork, no personal credit check. We review your Everpay processing history to generate an offer.",
    time: "2 min",
  },
  {
    step: "02",
    title: "Choose your terms",
    description:
      "Select the loan amount and repayment share that works for your cash flow. We always provide multiple offers so you stay in control.",
    time: "5 min",
  },
  {
    step: "03",
    title: "Receive funds",
    description:
      "Once approved, capital lands in your account in as little as 24 hours. Put it to work immediately on inventory, marketing, or operations.",
    time: "<24 hrs",
  },
]

const useCases = [
  {
    title: "Stock up on inventory",
    description: "Purchase inventory ahead of peak seasons without draining cash reserves.",
    icon: BarChart3,
  },
  {
    title: "Scale your marketing",
    description: "Invest in customer acquisition campaigns that drive measurable revenue growth.",
    icon: TrendingUp,
  },
  {
    title: "Expand operations",
    description: "Open new locations, hire key staff, or upgrade equipment to increase capacity.",
    icon: Users,
  },
  {
    title: "Manage cash flow gaps",
    description: "Bridge the gap between expenses and incoming payments to keep operations running smoothly.",
    icon: Banknote,
  },
]

const stats = [
  { value: "87%", label: "of merchants said Everpay Capital helped increase revenue" },
  { value: "90%", label: "said Everpay Capital was as or more affordable than alternatives" },
  { value: "90%", label: "are satisfied with the speed and ease of the application" },
]

const faqs = [
  {
    question: "Who is eligible for Everpay Capital?",
    answer:
      "Everpay Capital is available to merchants who have been processing payments through Everpay for at least 90 days and meet minimum processing volume requirements. There is no personal credit check.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "Loan amounts range from $5,000 to $300,000, depending on your Everpay processing history and business performance. Repeat borrowers may qualify for higher amounts.",
  },
  {
    question: "How does repayment work?",
    answer:
      "You choose a percentage of your daily Everpay sales to go toward repayment. When sales are higher, you pay down your balance faster. When sales slow, your payments adjust automatically. A minimum repayment is required every 90 days.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Everpay Capital charges a single, transparent fixed fee that you know before you accept the offer. There are no periodic interest charges, late fees, or prepayment penalties.",
  },
  {
    question: "How fast will I receive funds?",
    answer:
      "Most approved merchants receive funds in their account within 24 hours. Some merchants may receive funds the same day depending on when the application is completed.",
  },
  {
    question: "Can I pay off my loan early?",
    answer:
      "Yes. You can make additional payments or pay the entire balance at any time with no early repayment fee.",
  },
  {
    question: "Will applying affect my credit score?",
    answer:
      "No. Everpay Capital does not require a personal credit check. Eligibility is based primarily on your Everpay account history and processing volume.",
  },
]

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1aa478]/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-[800px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1aa478]/20 bg-[#1aa478]/5 px-4 py-1.5 mb-8">
                <DollarSign className="h-4 w-4 text-[#1aa478]" />
                <span className="text-sm font-semibold text-[#1aa478]">Everpay Capital</span>
              </div>

              <h1
                className="text-4xl md:text-[56px] lg:text-[64px] font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Fund your growth.{" "}
                <span className="text-[#1aa478]">Repay with sales.</span>
              </h1>

              <p
                className="text-lg md:text-xl text-gray-500 max-w-[600px] mx-auto mb-10 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick access to business financing built for Everpay merchants. Apply based on your
                processing history, get funded fast, and repay automatically with a share of your sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-[#1aa478] hover:bg-[#158f68] text-white rounded-full px-8 h-12 text-base font-semibold shadow-none min-w-[200px]"
                  >
                    Check eligibility
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-200 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 rounded-full px-8 h-12 text-base font-semibold shadow-none min-w-[200px]"
                  >
                    Talk to our team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px] mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Flexible financing that moves with your business
              </h2>
              <p className="text-gray-500 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                No equity. No credit checks. Just capital to grow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-[#1aa478]/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1aa478]/10 flex items-center justify-center mb-5">
                    <item.icon className="h-6 w-6 text-[#1aa478]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-5xl md:text-6xl font-extrabold text-[#1aa478] mb-3"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-500 text-base max-w-[280px] mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px] mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Getting funded is easy
              </h2>
              <p className="text-gray-500 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Apply in minutes. Get funded in hours.
              </p>
            </div>
            <div className="max-w-[900px] mx-auto">
              <div className="space-y-0">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                    {/* Timeline line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-[27px] top-[56px] bottom-0 w-px bg-[#1aa478]/20" />
                    )}
                    {/* Step number circle */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1aa478] text-white flex items-center justify-center text-lg font-bold">
                      {step.step}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Manrope, sans-serif" }}>
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-[#1aa478]/10 px-3 py-0.5 text-xs font-semibold text-[#1aa478]">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-500 text-base leading-relaxed max-w-[480px]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px] mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Put your capital to work
              </h2>
              <p className="text-gray-500 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                You know your business best. Use your funds where they matter most.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {useCases.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:border-[#1aa478]/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#1aa478]/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-[#1aa478]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[900px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    See if you qualify
                  </h2>
                  <p className="text-gray-500 text-base mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    Everpay Capital is available to merchants who meet these minimum requirements. No personal credit check needed.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Active Everpay account for at least 90 days",
                      "Minimum $15,000 in annual processing volume",
                      "No outstanding Everpay Capital balance",
                      "Business registered in the United States",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#1aa478] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-[15px]" style={{ fontFamily: "Inter, sans-serif" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/demo">
                      <Button className="bg-[#1aa478] hover:bg-[#158f68] text-white rounded-full px-8 h-11 text-[15px] font-semibold shadow-none">
                        Check eligibility
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-[360px] rounded-2xl overflow-hidden">
                  <Image
                    src="/modern-pos-terminal-payment-system.jpg"
                    alt="Business owner reviewing funding options"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px] mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                How Everpay Capital compares
              </h2>
              <p className="text-gray-500 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Simple, transparent, and built for merchants.
              </p>
            </div>
            <div className="max-w-[800px] mx-auto overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="pb-4 pr-8 text-sm font-semibold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Feature</th>
                    <th className="pb-4 pr-8 text-sm font-semibold text-[#1aa478] uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Everpay Capital</th>
                    <th className="pb-4 text-sm font-semibold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Traditional Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: "Time to funds", everpay: "As fast as 24 hours", traditional: "Weeks to months" },
                    { feature: "Credit check", everpay: "None", traditional: "Required" },
                    { feature: "Collateral", everpay: "None", traditional: "Often required" },
                    { feature: "Fee structure", everpay: "Single fixed fee", traditional: "Interest + fees" },
                    { feature: "Repayment", everpay: "% of daily sales", traditional: "Fixed monthly payments" },
                    { feature: "Early payoff penalty", everpay: "None", traditional: "May apply" },
                    { feature: "Equity required", everpay: "No", traditional: "Sometimes" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="py-4 pr-8 text-sm font-medium text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>{row.feature}</td>
                      <td className="py-4 pr-8 text-sm text-[#1aa478] font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{row.everpay}</td>
                      <td className="py-4 text-sm text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px] mx-auto text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Frequently asked questions
              </h2>
            </div>
            <div className="max-w-[760px] mx-auto space-y-0 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <details key={index} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-base font-semibold text-gray-900 pr-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-open:bg-[#1aa478]/10 flex items-center justify-center transition-colors">
                      <svg
                        className="w-3.5 h-3.5 text-gray-500 group-open:text-[#1aa478] transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-500 text-[15px] leading-relaxed pr-8" style={{ fontFamily: "Inter, sans-serif" }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#0A2F2F]">
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Ready to grow your business?
            </h2>
            <p
              className="text-gray-400 text-lg max-w-[520px] mx-auto mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Check your eligibility in minutes. No credit check, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-[#1aa478] hover:bg-[#158f68] text-white rounded-full px-8 h-12 text-base font-semibold shadow-none min-w-[200px]"
                >
                  Check eligibility
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-8 h-12 text-base font-semibold shadow-none min-w-[200px]"
                >
                  Talk to our team
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
