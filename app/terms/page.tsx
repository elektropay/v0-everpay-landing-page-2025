import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

interface TermsPageProps {
  params: { lang: Locale }
}

export default async function TermsPage({ params: { lang } }: TermsPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <h1 className="text-4xl font-bold mb-8">{dict.footer.termsOfService}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          {
            'Welcome to Everpay! These Terms of Service ("Terms") govern your access to and use of Everpay\'s website, products, and services ("Service"). By accessing or using the Service, you agree to be bound by these Terms.'
          }
        </p>
        <h2>{"1. Acceptance of Terms"}</h2>
        <p>
          {
            "By creating an account or using our Service, you confirm that you have read, understood, and agreed to be bound by these Terms, as well as our Privacy Policy and Cookie Policy."
          }
        </p>
        <h2>{"2. Changes to the Terms"}</h2>
        <p>
          {
            "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
          }
        </p>
        <h2>{"3. User Accounts"}</h2>
        <p>
          {
            "When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service."
          }
        </p>
        <p>
          {
            "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service."
          }
        </p>
        <p>
          {
            "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
          }
        </p>
        <h2>{"4. Intellectual Property"}</h2>
        <p>
          {
            "The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of Everpay and its licensors."
          }
        </p>
        <p>
          {
            "The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Everpay."
          }
        </p>
        <h2>{"5. Links to Other Websites"}</h2>
        <p>
          {
            "Our Service may contain links to third-party web sites or services that are not owned or controlled by Everpay."
          }
        </p>
        <p>
          {
            "Everpay has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Everpay shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services."
          }
        </p>
        <p>
          {
            "We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit."
          }
        </p>
        <h2>{"6. Termination"}</h2>
        <p>
          {
            "We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions."
          }
        </p>
        <p>{"Upon termination, Your right to use the Service will immediately cease."}</p>
        <h2>{"7. Limitation of Liability"}</h2>
        <p>
          {
            "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service."
          }
        </p>
        <p>
          {
            "To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose."
          }
        </p>
        <h2>{"8. Governing Law"}</h2>
        <p>
          {
            "The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."
          }
        </p>
        <h2>{"9. Dispute Resolution"}</h2>
        <p>
          {
            "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company."
          }
        </p>
        <h2>{"10. Severability and Waiver"}</h2>
        <h3>{"Severability"}</h3>
        <p>
          {
            "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."
          }
        </p>
        <h3>{"Waiver"}</h3>
        <p>
          {
            "Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach."
          }
        </p>
        <h2>{"11. Translation Disclaimer"}</h2>
        <p>
          {
            "These Terms and Conditions may have been translated. You agree that the original English text shall prevail in the case of a dispute."
          }
        </p>
        <h2>{"12. Contact Us"}</h2>
        <p>{"If you have any questions about these Terms and Conditions, You can contact us:"}</p>
        <ul>
          <li>{"By email: legal@everpay.com"}</li>
          <li>{"By visiting this page on our website: https://www.everpay.com/contact"}</li>
        </ul>
      </div>
    </div>
  )
}
