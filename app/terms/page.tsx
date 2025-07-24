export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read the terms and conditions governing your use of Everpay's services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="prose max-w-none">
              <p>
                Welcome to Everpay! These Terms of Service ("Terms") govern your access to and use of the Everpay
                website (everpay.com) and our payment processing services (collectively, the "Services"). By accessing
                or using the Services, you agree to be bound by these Terms.
              </p>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By creating an account, accessing, or using the Services, you agree to be bound by these Terms and all
                policies referenced herein. If you do not agree to these Terms, you may not access or use the Services.
              </p>
              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use
                our Services. By using the Services, you represent and warrant that you meet these eligibility
                requirements.
              </p>
              <h2>3. Account Registration</h2>
              <p>
                To access certain features of the Services, you may be required to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete. You are responsible for safeguarding your
                password and for all activities that occur under your account.
              </p>
              <h2>4. Our Services</h2>
              <p>Everpay provides payment processing services, including but not limited to:</p>
              <ul>
                <li>Accepting online and in-person payments</li>
                <li>Managing recurring billing and subscriptions</li>
                <li>Fraud prevention and security tools</li>
                <li>Reporting and analytics</li>
              </ul>
              <p>
                We reserve the right to modify or discontinue any part of the Services at any time without prior notice.
              </p>
              <h2>5. Fees and Payments</h2>
              <p>
                You agree to pay all fees associated with your use of the Services as described on our pricing page or
                as otherwise agreed upon. All fees are non-refundable unless otherwise stated.
              </p>
              <h2>6. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul>
                <li>Using the Services for any illegal or unauthorized purpose</li>
                <li>Engaging in any activity that interferes with or disrupts the Services</li>
                <li>Attempting to gain unauthorized access to any part of the Services or other users' accounts</li>
                <li>Transmitting any viruses, worms, or other malicious code</li>
              </ul>
              <h2>7. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Services immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <h2>8. Disclaimers</h2>
              <p>
                The Services are provided "as is" and "as available" without warranties of any kind, either express or
                implied, including, but not limited to, implied warranties of merchantability, fitness for a particular
                purpose, non-infringement, or course of performance.
              </p>
              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall Everpay, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
                access to or use of or inability to access or use the Services; (ii) any conduct or content of any third
                party on the Services; (iii) any content obtained from the Services; and (iv) unauthorized access, use
                or alteration of your transmissions or content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have been informed of the possibility of such
                damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
              </p>
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of California,
                United States, without regard to its conflict of law provisions.
              </p>
              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.
              </p>
              <h2>12. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at support@everpay.com.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
