import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">Join thousands of businesses using our payment platform</p>
        <Button className="bg-white text-blue-900 hover:bg-gray-100">Create Account</Button>
      </div>
    </section>
  )
}
