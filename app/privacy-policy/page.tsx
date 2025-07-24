import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your privacy is important to us. Learn how we collect, use, and protect your data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 prose max-w-none">
            <p>
              This Privacy Policy describes how Everpay ("Company", "we", "us", and "our") collects, uses, and discloses
              your information when you use our services.
            </p>
            <h2>Information We Collect</h2>
            <p>We collect several types of information from and about users of our services, including:</p>
            <ul>
              <li>
                <p>
                  <strong className="font-semibold">Personal Information:</strong> Information that can be used to
                  identify you, such as your name, email address, postal address, phone number, and payment information.
                </p>
              </li>
              <li>
                <p>
                  <strong className="font-semibold">Usage Data:</strong> Information about how you access and use our
                  services, including your IP address, browser type, operating system, referral URLs, and pages viewed.
                </p>
              </li>
              <li>
                <p>
                  <strong className="font-semibold">Transaction Data:</strong> Details about transactions you conduct
                  through our services, including the amount, date, and time of the transaction.
                </p>
              </li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>
                <p>To provide, operate, and maintain our services.</p>
              </li>
              <li>
                <p>
                  To process your transactions and send you related information, including confirmations and invoices.
                </p>
              </li>
              <li>
                <p>To improve, personalize, and expand our services.</p>
              </li>
              <li>
                <p>To understand and analyze how you use our services.</p>
              </li>
              <li>
                <p>To develop new products, services, features, and functionality.</p>
              </li>
              <li>
                <p>
                  To communicate with you, either directly or through one of our partners, including for customer
                  service, to provide you with updates and other information relating to the service, and for marketing
                  and promotional purposes.
                </p>
              </li>
            </ul>
            <h2>Disclosure of Your Information</h2>
            <p>We may share your information with third parties in the following situations:</p>
            <ul>
              <li>
                <p>
                  <strong className="font-semibold">Service Providers:</strong> We may share your information with
                  third-party service providers to perform functions on our behalf, such as payment processing, data
                  analysis, email delivery, hosting services, and customer service.
                </p>
              </li>
              <li>
                <p>
                  <strong className="font-semibold">Business Transfers:</strong> If we are involved in a merger,
                  acquisition, or sale of all or a portion of our assets, your information may be transferred as part of
                  that transaction.
                </p>
              </li>
              <li>
                <p>
                  <strong className="font-semibold">Legal Requirements:</strong> We may disclose your information if
                  required to do so by law or in response to valid requests by public authorities (e.g., a court or
                  government agency).
                </p>
              </li>
            </ul>
            <h2>Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following data protection rights:</p>
            <ul>
              <li>
                <p>The right to access, update or delete the information we have on you.</p>
              </li>
              <li>
                <p>The right of rectification.</p>
              </li>
              <li>
                <p>The right to object.</p>
              </li>
              <li>
                <p>The right of restriction.</p>
              </li>
              <li>
                <p>The right to data portability.</p>
              </li>
              <li>
                <p>The right to withdraw consent.</p>
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <Link className="text-blue-600 hover:underline" href="mailto:privacy@everpay.com">
                privacy@everpay.com
              </Link>
              .
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <p>Last updated: May 15, 2024</p>
          </div>
        </section>
      </main>
    </div>
  )
}
