"use client"

import { useState } from "react"
import Link from "next/link"

interface Card {
  type: string
  ending: string
  expDate: string
  status: "default" | "set-default" | "expired"
  logo?: string
}

export default function PaymentDashboardPage() {
  const [activeTab, setActiveTab] = useState<string>("payment-details")

  const cards: Card[] = [
    {
      type: "visa",
      ending: "7830",
      expDate: "06/24",
      status: "default",
      logo: "https://cdn.worldvectorlogo.com/logos/visa.svg",
    },
    {
      type: "visa",
      ending: "5775",
      expDate: "06/24",
      status: "set-default",
      logo: "https://cdn.worldvectorlogo.com/logos/visa.svg",
    },
    {
      type: "mastercard",
      ending: "1075",
      expDate: "02/25",
      status: "set-default",
      logo: "https://cdn.worldvectorlogo.com/logos/mastercard.svg",
    },
    {
      type: "mastercard",
      ending: "4962",
      expDate: "06/24",
      status: "expired",
      logo: "https://cdn.worldvectorlogo.com/logos/mastercard.svg",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-[#1A202C] text-white">
        <div className="flex h-16 items-center justify-center">
          <div className="h-8 w-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 6.4C10.6984 6.4 6.4 10.6984 6.4 16C6.4 21.3016 10.6984 25.6 16 25.6C21.3016 25.6 25.6 21.3016 25.6 16C25.6 10.6984 21.3016 6.4 16 6.4ZM9.6 16C9.6 12.4656 12.4656 9.6 16 9.6C19.5344 9.6 22.4 12.4656 22.4 16C22.4 19.5344 19.5344 22.4 16 22.4C12.4656 22.4 9.6 19.5344 9.6 16Z"
                fill="white"
              />
              <path
                d="M16 0C7.1632 0 0 7.1632 0 16C0 24.8368 7.1632 32 16 32C24.8368 32 32 24.8368 32 16C32 7.1632 24.8368 0 16 0ZM16 28.8C8.9304 28.8 3.2 23.0696 3.2 16C3.2 8.9304 8.9304 3.2 16 3.2C23.0696 3.2 28.8 8.9304 28.8 16C28.8 23.0696 23.0696 28.8 16 28.8Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <nav className="mt-6 flex flex-col items-center space-y-6">
          {["dashboard", "messages", "customers", "security", "reports", "settings", "help"].map((item, i) => (
            <Link
              key={i}
              href={`/dashboard/${item}`}
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                item === "security" ? "bg-primary text-black" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="mb-8 flex items-center">
          <div className="flex items-center rounded-full bg-gray-200 p-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="ml-3 text-xl font-bold">Payment and billing</h1>
        </div>

        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "overview" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "billing" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              Billing
            </button>
            <button
              onClick={() => setActiveTab("payment-details")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "payment-details" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              Payment Details
            </button>
            <button
              onClick={() => setActiveTab("invoices")}
              className={`pb-4 text-sm font-medium ${
                activeTab === "invoices" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              Invoices
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center">
          <div className="flex items-center text-gray-600">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V15C2.5 15.9205 3.24619 16.6667 4.16667 16.6667H15.8333C16.7538 16.6667 17.5 15.9205 17.5 15V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 8.33334H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-3 font-medium">Credit card(s)</span>
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-600">Manage your credit cards and payment options.</div>

        <button className="mb-8 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
          Add new card
        </button>

        <div className="space-y-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-14">
                  <img src={card.logo || "/placeholder.svg"} alt={card.type} className="h-full w-full object-contain" />
                </div>
                <div>
                  <div className="font-medium">
                    {card.type} ending in {card.ending}
                  </div>
                  <div className="text-sm text-gray-500">Exp. date {card.expDate}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {card.status === "default" && (
                  <span className="rounded-md bg-gray-800 px-3 py-1 text-xs font-medium text-white">Default</span>
                )}
                {card.status === "set-default" && (
                  <button className="text-sm font-medium text-blue-500 hover:text-blue-600">Set as Default</button>
                )}
                {card.status === "expired" && (
                  <span className="rounded-md bg-red-100 px-3 py-1 text-xs font-medium text-red-600">Expired</span>
                )}
                <button className="ml-2 text-gray-400 hover:text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 5H17.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8333 5V16.6667C15.8333 17.5 15 18.3333 14.1667 18.3333H5.83333C5 18.3333 4.16667 17.5 4.16667 16.6667V5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66667 5V3.33333C6.66667 2.5 7.5 1.66667 8.33333 1.66667H11.6667C12.5 1.66667 13.3333 2.5 13.3333 3.33333V5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
