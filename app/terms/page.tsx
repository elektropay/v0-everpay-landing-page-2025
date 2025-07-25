import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

interface TermsPageProps {
  params: {
    lang: Locale
  }
}

export default async function TermsPage({ params: { lang } }: TermsPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.footer.termsOfService}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the Everpay Inc. ("Company", "we", "us", or
          "our") website located at everpay.com (the "Website") and any related services, features, content, or
          applications offered by us (collectively, the "Services").
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Website or Services, you agree to be bound by these Terms and all policies
          referenced herein. If you do not agree to these Terms, you may not access or use the Website or Services.
        </p>
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new
          Terms on the Website. Your continued use of the Website or Services after any such changes constitutes your
          acceptance of the new Terms.
        </p>
        <h2>3. Eligibility</h2>
        <p>
          You must be at least 18 years old to use the Website and Services. By using the Website or Services, you
          represent and warrant that you are at least 18 years old and have the legal capacity to enter into these
          Terms.
        </p>
        <h2>4. Account Registration</h2>
        <p>
          To access certain features of the Services, you may be required to register for an account. You agree to
          provide accurate, current, and complete information during the registration process and to update such
          information to keep it accurate, current, and complete. You are responsible for safeguarding your password and
          for all activities that occur under your account.
        </p>
        <h2>5. Use of Services</h2>
        <p>
          You agree to use the Website and Services only for lawful purposes and in accordance with these Terms. You
          agree not to:
        </p>
        <ul>
          <li>
            Use the Website or Services in any way that violates any applicable federal, state, local, or international
            law or regulation.
          </li>
          <li>
            Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website or Services, or
            which, as determined by us, may harm the Company or users of the Website or Services.
          </li>
          <li>
            Use any robot, spider, or other automatic device, process, or means to access the Website or Services for
            any purpose, including monitoring or copying any of the material on the Website.
          </li>
          <li>
            Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or
            technologically harmful.
          </li>
        </ul>
        <h2>6. Intellectual Property Rights</h2>
        <p>
          The Website and Services and their entire contents, features, and functionality (including but not limited to
          all information, software, text, displays, images, video, and audio, and the design, selection, and
          arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are
          protected by United States and international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </p>
        <h2>7. Disclaimer of Warranties</h2>
        <p>
          THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY
          KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY
          WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR
          AVAILABILITY OF THE WEBSITE OR SERVICES.
        </p>
        <h2>8. Limitation of Liability</h2>
        <p>
          IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
          OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
          CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE
          WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS
          OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF
          DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF
          FORESEEABLE.
        </p>
        <h2>9. Governing Law and Jurisdiction</h2>
        <p>
          All matters relating to the Website and these Terms, and any dispute or claim arising therefrom or related
          thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in
          accordance with the internal laws of the State of California without giving effect to any choice or conflict
          of law provision or rule.
        </p>
        <h2>10. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at legal@everpay.com.</p>
      </div>
    </div>
  )
}
