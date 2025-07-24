import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or need support? Reach out to our team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below or use the contact information provided.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-gray-500">support@everpay.com</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-gray-500">+1 (800) 123-4567</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-gray-500">123 Payment St, Fintech City, CA 90210</p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <Input className="rounded-full" placeholder="Name" type="text" />
              <Input className="rounded-full" placeholder="Email" type="email" />
              <Input className="rounded-full" placeholder="Subject" type="text" />
              <Textarea className="min-h-[100px] rounded-lg" placeholder="Message" />
              <Button className="w-full rounded-full">Send Message</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
