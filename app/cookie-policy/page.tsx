import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cookie Policy</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about how Everpay uses cookies on its website.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 prose max-w-none">
            <p>
              This Cookie Policy explains what cookies are, how Everpay ("Company", "we", "us", and "our") uses cookies,
              and your choices regarding cookies.
            </p>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a
              website. They are widely used to make websites work or to work more efficiently, as well as to provide
              reporting information.
            </p>
            <h2>How we use cookies</h2>
            <p>We use cookies for several purposes:</p>
            <ul>
              <li>
                <p>
                  <strong className="font-semibold">Essential cookies:</strong> These cookies are strictly necessary to
                  provide you with services available through our Website and to enable you to use some of its features.
                </p>
              </li>
              <li>
                <p>
                  <strong className="font-semibold">Performance and functionality cookies:</strong> These cookies are
                  used to enhance the performance and functionality of our Website but are non-essential to their use.
                  However, without these cookies, certain functionality (like videos) may become unavailable.
                </p>
              </li>
              <li>
                <p>
                  <strong className="font-semibold">Analytics and customization cookies:</strong> These cookies collect
                  information that is used either in aggregate form to help us understand how our Website is being used
                  or how effective our marketing campaigns are, or to help us customize our Website for you.
                </p>
              </li>
            </ul>
            <h2>Your choices regarding cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by clicking on the appropriate opt-out links provided in the cookie table below.
            </p>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about
              cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
              <Link className="text-blue-600 hover:underline" href="http://www.allaboutcookies.org">
                www.allaboutcookies.org
              </Link>
              .
            </p>
            <h2>Changes to our Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
              cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this
              Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>The date at the bottom of this Cookie Policy indicates when it was last updated.</p>
            <p>Last updated: May 15, 2024</p>
          </div>
        </section>
      </main>
    </div>
  )
}
