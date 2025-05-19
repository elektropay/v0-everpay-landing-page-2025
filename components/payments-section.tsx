import Image from "next/image"

export function PaymentsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-4xl font-bold">
              Make payments
              <br />
              the easy way
            </h2>
            <p className="mb-6 text-gray-700">
              Your one-stop solution for all your banking needs. Managing your finances has never been easier with our
              intuitive banking interface, transfer money, view account balances, or access a wide range of banking
              services.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center text-sm font-medium">
                <span className="mr-2">←</span>
                Prev
              </button>
              <button className="flex items-center text-sm font-medium">
                Next
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-primary p-4">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2.5V17.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 7.5L10 2.5L15 7.5"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-sm font-semibold">Online payments</h3>
              <p className="text-xs">Spend bonuses, not money</p>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Business person with phone"
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <span className="text-xs font-medium">Cashback for many categories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
