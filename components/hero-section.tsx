import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gray-100 p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-5xl font-semibold leading-tight text-secondary">
            Control your finance future easily
          </h1>
          <p className="mb-8 text-gray-600">
            Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for US
            enterprises.
          </p>
          <div className="mb-12">
            <Button
              className="font-semibold"
              iconRight={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Open Account
            </Button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 text-secondary"
              >
                <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold">15 Million+</div>
              <div className="text-sm text-gray-600">
                Unlock the power of real-time analytics with our cutting-edge FinView
              </div>
            </div>
            <div className="ml-4 flex -space-x-2">
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt="User 1"
                className="border-2 border-white"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="User 2"
                className="border-2 border-white"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                alt="User 3"
                className="border-2 border-white"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Phone Mockup */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[500px] w-[250px]">
            <Image
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80"
              alt="Banking app interface"
              fill
              className="rounded-3xl object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-dark/40 to-primary/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[220px] rounded-3xl bg-white p-4 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-xs font-semibold text-gray-500">Main View</div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500">Total Balance</div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">$123,981.00</div>
                    <div className="flex items-center rounded-full bg-primary-light px-2 py-0.5 text-xs font-medium text-primary">
                      +8%
                    </div>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-4 gap-2">
                  {["Deposit", "Withdraw", "Transfer", "Send"].map((action, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">{action}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-2">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-semibold">Transfer Money</div>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3 w-3 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <Avatar
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                      alt="Contact 1"
                      size="sm"
                      className="border-2 border-white"
                    />
                    <Avatar
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                      alt="Contact 2"
                      size="sm"
                      className="border-2 border-white"
                    />
                    <Avatar
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                      alt="Contact 3"
                      size="sm"
                      className="border-2 border-white"
                    />
                    <Avatar
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                      alt="Contact 4"
                      size="sm"
                      className="border-2 border-white"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2">
                      <div className="flex items-center">
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-green-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm5.25-9.25a.75.75 0 00-1.5 0v4.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium">Heather Miles</div>
                          <div className="text-xs text-gray-500">12 April 2023</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-green-600">+$350.00</div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2">
                      <div className="flex items-center">
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-blue-600"
                          >
                            <path d="M10 2a.75.75 0 01.75.75v5.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0L6.2 7.26a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" />
                            <path d="M5.273 4.5a1.25 1.25 0 00-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 01.894.553l.448.894a1 1 0 00.894.553h4.764a1 1 0 00.894-.553l.448-.894A1 1 0 0115 12h3.47a.75.75 0 00.73-.918l-1.523-5.52a1.25 1.25 0 00-1.205-.918H14.5a.75.75 0 000 1.5h2.745l1.045 3.5h-3.29a.75.75 0 00-.67.414l-.448.894a.75.75 0 01-.67.414H5.788a.75.75 0 01-.67-.414l-.448-.894a.75.75 0 00-.67-.414h-3.29l1.045-3.5H4.5a.75.75 0 000-1.5H2.273z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs font-medium">Science Project</div>
                          <div className="text-xs text-gray-500">10 April 2023</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-blue-600">+$175.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Connect Easily Section */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Connect Easily</h3>
            <span className="text-xs text-gray-500">See all</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Savannah Nguyen"
                  className="mr-3"
                />
                <div>
                  <div className="text-sm font-medium">Savannah Nguyen</div>
                  <div className="text-xs text-gray-500">Unlock the power of real-time</div>
                </div>
              </div>
              <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                  alt="Brooklyn Simmons"
                  className="mr-3"
                />
                <div>
                  <div className="text-sm font-medium">Brooklyn Simmons</div>
                  <div className="text-xs text-gray-500">Unlock the power of real-time</div>
                </div>
              </div>
              <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Digital Banking Platform Section */}
        <div className="relative overflow-hidden rounded-xl bg-white p-4 shadow-sm">
          <div className="relative z-10">
            <h3 className="mb-4 text-lg font-semibold">Digital Banking Platform</h3>
            <div className="absolute bottom-0 right-0">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt="Digital Banking"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary-light opacity-70"></div>
          </div>
        </div>

        {/* Grow Your Capital Section */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-2 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
            Hot Deal! 🔥
          </div>
          <h3 className="mb-2 text-lg font-semibold">Grow your capital with No boundary at all</h3>
          <div className="mb-2 flex items-center">
            <div className="mr-2 h-4 w-4 rounded-full bg-primary"></div>
            <span className="text-xs text-gray-500">Trusted by 500K+ users</span>
          </div>
        </div>
      </div>
    </section>
  )
}
