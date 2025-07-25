import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

interface PrivacyPolicyPageProps {
  params: {
    lang: Locale
  }
}

export default async function PrivacyPolicyPage({ params: { lang } }: PrivacyPolicyPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.footer.privacyPolicy}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <p>
          This Privacy Policy describes how Everpay Inc. ("Company", "we", "us", and "our") collects, uses, and
          discloses your personal information when you visit, use, or purchase from everpay.com ("Website").
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect personal information you voluntarily provide to us when you register on the Website, express an
          interest in obtaining information about us or our products and services, when you participate in activities on
          the Website (such as posting messages in our forums or entering competitions), or otherwise when you contact
          us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the Website,
          the choices you make and the products and features you use. The personal information we collect may include
          the following:
        </p>
        <ul>
          <li>Names</li>
          <li>Email addresses</li>
          <li>Phone numbers</li>
          <li>Mailing addresses</li>
          <li>Billing addresses</li>
          <li>Payment information (e.g., credit card numbers)</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. We
          process your personal information for these purposes in reliance on our legitimate business interests, in
          order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
          obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To post testimonials with your consent.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To send administrative information to you.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To deliver targeted advertising to you.</li>
          <li>To request feedback and to contact you about your experience with our Website.</li>
          <li>To protect our Website.</li>
          <li>To enable user-to-user communications.</li>
          <li>To enforce our terms, conditions and policies.</li>
          <li>To respond to legal requests and prevent harm.</li>
        </ul>
        <h2>Disclosure of Your Information</h2>
        <p>We may process or share data based on the following legal basis:</p>
        <ul>
          <li>
            <strong>Consent:</strong> We may process your data if you have given us specific consent to use your
            personal information for a specific purpose.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve
            our legitimate business interests.
          </li>
          <li>
            <strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process
            your personal information to fulfill the terms of our contract.
          </li>
          <li>
            <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so
            in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal
            process, such as in response to a court order or a subpoena (including in response to public authorities to
            meet national security or law enforcement requirements).
          </li>
          <li>
            <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to
            investigate, prevent, or take action regarding potential violations of our policies, suspected fraud,
            situations involving potential threats to the safety of any person and illegal activities, or as evidence in
            litigation in which we are involved.
          </li>
        </ul>
        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware
          that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
          can be guaranteed against any interception or other type of misuse.
        </p>
        <h2>Your Privacy Rights</h2>
        <p>
          In some regions (like the European Economic Area), you have certain rights under applicable data protection
          laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii)
          to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv)
          if applicable, to data portability. In certain circumstances, you may also have the right to object to the
          processing of your personal information. To make such a request, please use the contact details provided
          below.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
          "Revised" date and the updated version will be effective as soon as it is accessible. If we make material
          changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by
          directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed
          of how we are protecting your information.
        </p>
        <h2>Contact Us</h2>
        <p>If you have questions or comments about this policy, you may email us at privacy@everpay.com.</p>
      </div>
    </div>
  )
}
