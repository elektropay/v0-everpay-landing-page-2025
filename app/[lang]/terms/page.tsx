export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">Last updated: October 20, 2023</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing or using Everpay's services, you agree to be bound by these Terms and Conditions. If you
                  do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                <p className="text-gray-600">
                  Everpay provides payment processing services, including but not limited to payment gateway services,
                  card processing, and related financial services. We reserve the right to modify, suspend, or
                  discontinue any aspect of our services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
                <p className="text-gray-600">
                  To use our services, you must create an account. You agree to provide accurate, current, and complete
                  information during registration and to update such information to keep it accurate, current, and
                  complete.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Fees and Payments</h2>
                <p className="text-gray-600">
                  You agree to pay all applicable fees for the services as outlined in our Fee Schedule. We may modify
                  our fees at any time upon notice to you. Your continued use of the services after such notice
                  constitutes your acceptance of the modified fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Security and Compliance</h2>
                <p className="text-gray-600">
                  You agree to comply with all applicable laws, regulations, and security standards, including PCI DSS
                  requirements. You are responsible for implementing appropriate security measures to protect your
                  account credentials and prevent unauthorized access.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, Everpay shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
