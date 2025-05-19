import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold">Control your financial future easily</h1>
            <p className="mb-8 text-gray-600">
              Streamline your business's financial management with our intuitive, scalable SaaS platform.
            </p>
            <div>
              <Button>Open Account</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Banking Dashboard</h2>
                <p className="text-gray-600">Your financial data at a glance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
