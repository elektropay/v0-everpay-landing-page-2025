import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

export function SiteFooter() {
  const footerLinks = {
    Product: [
      { name: "Payment Gateway", href: "/payments" },
      { name: "E-commerce", href: "/commerce" },
      { name: "Fraud Prevention", href: "/fraud-prevention" },
      { name: "Online Payments", href: "/online-payments" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Partners", href: "/partners" },
    ],
    Resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Security", href: "/security" },
      { name: "Contact", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/everpay", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/everpay", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/in/everpay", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/everpay", label: "GitHub" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 animate-fade-in-up">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
              <span className="text-2xl font-bold text-primary">everpay</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Secure, scalable payment solutions for modern businesses.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div
              key={category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(categoryIndex + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Everpay. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
