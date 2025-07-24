import Image from "next/image"

export function PaymentPartnersSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Global Reach</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Seamless Payment Gateway Solutions for Your Business
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everpay provides a robust payment gateway that supports a wide range of payment methods and currencies,
              enabling you to expand your business globally.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            alt="Payment Gateway"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwZ2F0ZXdheXxlbnwwfHx8fDE3MDk4NjU2NzB8MA&ixlib=rb-4.0.3&q=80&w=800"
            width="550"
            unoptimized
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Accept all major payment methods</h3>
                  <p className="text-gray-500">
                    From credit cards to digital wallets, Everpay supports a wide array of payment options.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Global currency support</h3>
                  <p className="text-gray-500">
                    Process transactions in over 135 currencies, reaching customers worldwide.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Fraud prevention and security</h3>
                  <p className="text-gray-500">
                    Advanced tools to protect your business and customers from fraudulent activities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
