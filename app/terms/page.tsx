import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read our terms and conditions for using Everpay's services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 prose max-w-none">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Everpay website, products, and
              services (collectively, "Services"). By accessing or using our Services, you agree to be bound by these
              Terms.
            </p>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using the Services, you agree to be bound by these Terms and all
              terms incorporated by reference. If you do not agree to these Terms, you may not access or use the
              Services.
            </p>
            <h2>2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this
              page. Your continued use of the Services after any such changes constitutes your acceptance of the new
              Terms.
            </p>
            <h2>3. Your Account</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account login information and are fully
              responsible for all activities that occur under your account. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
            <h2>4. Prohibited Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>
                <p>Using the Services for any illegal or unauthorized purpose.</p>
              </li>
              <li>
                <p>Interfering with or disrupting the integrity or performance of the Services.</p>
              </li>
              <li>
                <p>Attempting to gain unauthorized access to the Services or their related systems or networks.</p>
              </li>
              <li>
                <p>Transmitting any viruses, worms, defects, Trojan horses, or any items of a destructive nature.</p>
              </li>
            </ul>
            <h2>5. Intellectual Property</h2>
            <p>
              All intellectual property rights in the Services and their content are owned by Everpay or its licensors.
              You may not use any of our trademarks, logos, or other proprietary graphics without our prior written
              permission.
            </p>
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your access to the Services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              The Services are provided on an "as is" and "as available" basis. We make no warranties, express or
              implied, regarding the Services, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall Everpay be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
              resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct
              or content of any third party on the Services; (iii) any content obtained from the Services; and (iv)
              unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
              contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
              the possibility of such damage, and even if a remedy set forth herein is found to have failed of its
              essential purpose.
            </p>
            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of California, United
              States, without regard to its conflict of law provisions.
            </p>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <Link className="text-blue-600 hover:underline" href="mailto:support@everpay.com">
                support@everpay.com
              </Link>
              .
            </p>
            <p>Last updated: May 15, 2024</p>
          </div>
        </section>
      </main>
    </div>
  )
}
