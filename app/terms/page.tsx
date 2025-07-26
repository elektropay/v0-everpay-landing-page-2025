"use client"

export default function Terms() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-100 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Terms and Conditions
          </p>
        </div>

        <div className="relative flex place-items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

            <div className="max-w-3xl mx-auto">
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
