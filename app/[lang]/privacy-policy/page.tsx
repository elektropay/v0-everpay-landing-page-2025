export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">Last updated: October 20, 2023</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  Everpay ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you use our payment processing
                  services and visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Name and contact information</li>
                  <li>Business information</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">When you use our services, we automatically collect:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Device information</li>
                  <li>Usage data</li>
                  <li>Location information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-600">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and payments</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                <p className="text-gray-600">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this Privacy Policy or as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at privacy@everpay.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
