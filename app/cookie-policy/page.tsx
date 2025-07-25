import { getDictionary } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n/config"

interface CookiePolicyPageProps {
  params: { lang: Locale }
}

export default async function CookiePolicyPage({ params: { lang } }: CookiePolicyPageProps) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <h1 className="text-4xl font-bold mb-8">{dict.footer.cookiePolicy}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          {'This website uses cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.'}
        </p>
        <h2>{'What are cookies?'}</h2>
        <p>
          {'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.'}
        </p>
        <h2>{'How we use cookies'}</h2>
        <p>
          {'We use cookies for various purposes:'}
        </p>
        <ul>
          <li><strong>{'Essential cookies:'}</strong> {'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.'}</li>
          <li><strong>{'Analytical/performance cookies:'}</strong> {'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.'}</li>
          <li><strong>{'Functionality cookies:'}</strong> {'These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).'}</li>
          <li><strong><strong>{'Targeting cookies:'}</strong></strong> {'These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.'}</li>
        </ul>
        <h2>{'Managing cookies'}</h2>
        <p>
          {'You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.'}
        </p>
        <h2>{'Changes to our Cookie Policy'}</h2>
        <p>
          {'We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.'}
        </p>
        <p>
          {\'This Cookie\
