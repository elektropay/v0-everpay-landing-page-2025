import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
                  Have a question or need support? Reach out to our team.
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
                  Fill out the form below or use the contact information to reach us directly.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-6 w-6 text-gray-900" />
                  <p className="text-gray-500">+1 (888) 579-5668</p>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-6 w-6 text-gray-900" />
                  <p className="text-gray-500">support@everpay.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-6 w-6 text-gray-900" />
                  <p className="text-gray-500">123 Payment St, Fintech City, CA 90210</p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="grid gap-4">
                <Input className="rounded-full" placeholder="Name" type="text" />
                <Input className="rounded-full" placeholder="Email" type="email" />
                <Input className="rounded-full" placeholder="Subject" type="text" />
                <Textarea className="min-h-[100px] rounded-lg" placeholder="Message" />
                <Button className="rounded-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12.72a1 1 0 1 0 0-1.44 1 1 0 0 0 0 1.44Z" />
      <path d="M19.4 15c-.5 9.9-1.5 6.7-3.3 9.7-1.8 3-5 9.3-5.4 9.5-1.4.2-2.8-.2-4.4-1.2-1.6-1-3.7-3.4-4.6-5.7-1-2.3-1.4-4.7-.8-6.6.6-1.9 1.9-3.4 3.4-4.3 1.5-.9 3.1-1.3 4.7-1.3 1.6 0 3.2.4 4.7 1.3 1.5.9 2.8 2.4 3.4 4.3.6 1.9.2 4.3-.8 6.6-.9 2.3-3 4.7-4.6 5.7-1.6 1-3 1.4-4.4 1.2-.4-.2-3.6-6.5-5.4-9.5-1.8-3-2.8-6.8-3.3-9.7" />
    </svg>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2.02 15.79 15.79 0 0 1-8.32-6.18 15.79 15.79 0 0 1-6.18-8.32A2 2 0 0 1 4.1 2H7.08a2 2 0 0 1 2 1.73c.21 1.29.62 2.67 1.18 3.95a2 2 0 0 1-.43 2.18l-.79.79a20.29 20.29 0 0 0 5.66 5.66l.79-.79a2 2 0 0 1 2.18-.43c1.28.56 2.66.97 3.95 1.18a2 2 0 0 1 1.73 2Z" />
    </svg>
  )
}
