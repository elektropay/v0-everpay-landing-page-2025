import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

interface CookiePolicyPageProps {
  params: {
    lang: Locale
  }
}

export default async function CookiePolicyPage({ params: { lang } }: CookiePolicyPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.footer.cookiePolicy}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <p>
          This Cookie Policy explains how Everpay Inc. ("Company", "we", "us", and "our") uses cookies and similar
          technologies to recognize you when you visit our website at everpay.com ("Website"). It explains what these
          technologies are and why we use them, as well as your rights to control our use of them.
        </p>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
          as well as to provide reporting information.
        </p>
        <h2>Why do we use cookies?</h2>
        <p>
          We use first and third party cookies for several reasons. Some cookies are required for technical reasons in
          order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other
          cookies also enable us to track and target the interests of our users to enhance the experience on our Online
          Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes.
          This is described in more detail below.
        </p>
        <h2>How can I control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
          setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which
          categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly
          necessary to provide you with services.
        </p>
        <p>
          The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject
          cookies, you may still use our website though your access to some functionality and areas of our website may
          be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
        </p>
        <h2>What about other tracking technologies, like web beacons?</h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar
          technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These
          are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited
          our Website or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns
          of users from one page within our Website to another, to deliver or communicate with cookies, to understand
          whether you have come to our Website from an online advertisement displayed on a third-party website, to
          improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these
          technologies are reliant on cookies to function properly, and so declining cookies will impair their
          functioning.
        </p>
        <h2>Do you use Flash cookies or Local Shared Objects?</h2>
        <p>
          Websites may also use "Flash Cookies" (also known as Local Shared Objects or "LSOs") to, among other things,
          collect and store information about your use of our services, fraud prevention and for other site operations.
        </p>
        <h2>Do you serve targeted advertising?</h2>
        <p>
          Third parties may serve cookies on your computer or mobile device to serve advertising through our Website.
          These companies may use information about your visits to this and other websites in order to provide relevant
          advertisements about goods and services that you may be interested in. They may also employ technology that is
          used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web
          beacons to collect information about your visits to this and other websites in order to provide relevant
          advertisements about goods and services of potential interest to you. The information collected through this
          process does not enable us or them to identify your name, contact details or other personally identifying
          details unless you choose to provide these.
        </p>
        <h2>How often will you update this Cookie Policy?</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we
          use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy
          regularly to stay informed about our use of cookies and related technologies.
        </p>
        <h2>Where can I get further information?</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at
          privacy@everpay.com.
        </p>
      </div>
    </div>
  )
}
