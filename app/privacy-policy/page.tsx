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
          <div className="container px-4 md:px-6">
            <div className="prose max-w-none">
              <p>
                This Privacy Policy describes how Everpay ("Company," "we," "us," and "our") collects, uses, and
                discloses your personal information when you visit our websites at everpay.com (the "Site") and use our
                services.
              </p>
              <h2>Information We Collect</h2>
              <p>
                We collect personal information you provide to us directly, such as when you create an account, contact
                us, or use our services. This may include:
              </p>
              <ul>
                <li>Contact information (e.g., name, email address, phone number)</li>
                <li>Financial information (e.g., bank account details, credit card numbers)</li>
                <li>Business information (e.g., company name, business type)</li>
                <li>Identification information (e.g., government-issued IDs for verification)</li>
              </ul>
              <p>We also collect information automatically when you use our Site, including:</p>
              <ul>
                <li>Log data (e.g., IP address, browser type, pages visited)</li>
                <li>Device information (e.g., device type, operating system)</li>
                <li>Usage data (e.g., features used, time spent on pages)</li>
              </ul>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To process transactions and send related notifications</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To understand and analyze how you use our services</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>
                  To communicate with you, either directly or through one of our partners, including for customer
                  service, to provide you with updates and other information relating to the service, and for marketing
                  and promotional purposes
                </li>
                <li>To find and prevent fraud</li>
                <li>For compliance with legal and regulatory obligations</li>
              </ul>
              <h2>How We Share Your Information</h2>
              <p>We may share your personal information with third parties in the following circumstances:</p>
              <ul>
                <li>
                  With service providers who perform services on our behalf (e.g., payment processors, cloud hosting)
                </li>
                <li>With business partners to offer certain products, services, or promotions</li>
                <li>In response to legal requests (e.g., court order, subpoena)</li>
                <li>
                  To protect our rights, property, or safety, and the rights, property, or safety of our users or others
                </li>
                <li>With your consent</li>
              </ul>
              <h2>Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you
                place an order or enter, submit, or access your personal information.
              </p>
              <h2>Your Data Protection Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li>The right to access, update, or delete your personal information.</li>
                <li>The right to object to our processing of your personal information.</li>
                <li>The right to request that we restrict the processing of your personal information.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw your consent at any time.</li>
              </ul>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </p>
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at support@everpay.com.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
