import { Button } from "@/components/ui/button"
import { Book, Code, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Documentation</h1>
              <p className="text-xl text-gray-300 mb-8">
                Everything you need to integrate Everpay into your application. From quick start guides to detailed API
                references.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Book,
                  title: "Quick Start",
                  description: "Get up and running in minutes",
                  href: "/docs/quickstart",
                },
                {
                  icon: Code,
                  title: "API Reference",
                  description: "Complete API documentation",
                  href: "/api",
                },
                {
                  icon: FileText,
                  title: "Guides",
                  description: "Step-by-step integration guides",
                  href: "/docs/guides",
                },
                {
                  icon: HelpCircle,
                  title: "Support",
                  description: "Get help when you need it",
                  href: "/help",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block p-6 border rounded-lg hover:border-green-600 transition-colors"
                >
                  <item.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
