export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">Last updated: January 1, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website.
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="mb-4">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors use our website</li>
              <li>Functional cookies: Remember your preferences and settings</li>
              <li>Marketing cookies: Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but
              you can modify your browser settings to decline cookies if you prefer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at{" "}
              <a href="mailto:privacy@everpay.com" className="text-primary hover:underline">
                privacy@everpay.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
