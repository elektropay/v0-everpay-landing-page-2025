import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/types"

interface DocsPageProps {
  params: {
    lang: Locale
  }
}

export default async function DocsPage({ params: { lang } }: DocsPageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.header.docs}</h1>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <p>
          Welcome to the Everpay Documentation. Here you will find comprehensive guides and references to help you
          integrate and use Everpay's payment solutions.
        </p>
        <h2>Getting Started</h2>
        <p>
          To begin, you'll need an Everpay account. If you don't have one, you can sign up for free on our website. Once
          you have an account, you can access your API keys from your dashboard.
        </p>
        <h3>API Keys</h3>
        <p>
          Everpay uses API keys to authenticate requests. Your API keys consist of a publishable key and a secret key.
        </p>
        <ul>
          <li>
            <strong>Publishable Key:</strong> Used to identify your application in client-side code. It's safe to embed
            this key in your public-facing code.
          </li>
          <li>
            <strong>Secret Key:</strong> Used to authenticate requests from your server-side code. Keep this key secure
            and never expose it in client-side code.
          </li>
        </ul>
        <h2>Integration Guides</h2>
        <h3>Web Integration</h3>
        <p>
          Integrate Everpay directly into your website using our JavaScript SDK. This allows you to securely collect
          payment information from your customers without sensitive data ever touching your servers.
        </p>
        <pre>
          <code className="language-html">
            {`
<script src="https://js.everpay.com/v1/everpay.js"></script>
<script>
  const everpay = Everpay('YOUR_PUBLISHABLE_KEY');
  // Your payment integration code here
</script>
            `}
          </code>
        </pre>
        <h3>Mobile Integration</h3>
        <p>
          For mobile applications, we offer native SDKs for iOS and Android, providing a seamless payment experience for
          your users.
        </p>
        <h4>iOS (Swift)</h4>
        <pre>
          <code className="language-swift">
            {`
import EverpaySDK

Everpay.configure(publishableKey: "YOUR_PUBLISHABLE_KEY")
// Your payment integration code here
            `}
          </code>
        </pre>
        <h4>Android (Kotlin)</h4>
        <pre>
          <code className="language-kotlin">
            {`
import com.everpay.android.Everpay

Everpay.configure("YOUR_PUBLISHABLE_KEY")
// Your payment integration code here
            `}
          </code>
        </pre>
        <h2>API Reference</h2>
        <p>
          Our RESTful API allows you to programmatically manage payments, refunds, customers, and more. All API requests
          must be authenticated with your secret key.
        </p>
        <h3>Endpoints</h3>
        <ul>
          <li>
            <code>/v1/payments</code>: Create and manage payments.
          </li>
          <li>
            <code>/v1/refunds</code>: Process refunds for payments.
          </li>
          <li>
            <code>/v1/customers</code>: Manage customer profiles and payment methods.
          </li>
        </ul>
        <h3>Example: Create a Payment</h3>
        <pre>
          <code className="language-json">
            {`
POST /v1/payments
Authorization: Bearer YOUR_SECRET_KEY
Content-Type: application/json

{
  "amount": 1000,
  "currency": "usd",
  "payment_method_id": "pm_card_visa",
  "confirm": true
}
            `}
          </code>
        </pre>
        <h2>Webhooks</h2>
        <p>
          Receive real-time notifications about events in your Everpay account, such as successful payments, failed
          charges, and refunds.
        </p>
        <p>
          To configure webhooks, navigate to the "Webhooks" section in your Everpay dashboard and add your endpoint URL.
        </p>
        <h2>Support</h2>
        <p>
          If you encounter any issues or have questions, please visit our <a href={`/${lang}/help`}>Help Center</a> or
          contact our support team.
        </p>
      </div>
    </div>
  )
}
