"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8ZM12 20C12 15.582 15.582 12 20 12C24.418 12 28 15.582 28 20C28 24.418 24.418 28 20 28C15.582 28 12 24.418 12 20Z"
                    fill="black"
                  />
                  <path
                    d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 36C11.163 36 4 28.837 4 20C4 11.163 11.163 4 20 4C28.837 4 36 11.163 36 20C36 28.837 28.837 36 20 36Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-sm font-medium text-black group">
                Home
                <span className="absolute -bottom-1 left-0 h-1 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"></span>
              </Link>
              <Link href="/about" className="text-sm font-medium text-black/80 hover:text-black">
                About us
              </Link>
              <Link href="/products" className="text-sm font-medium text-black/80 hover:text-black">
                Products
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-black/80 hover:text-black">
                Pricing
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white/80 px-5 text-sm font-medium text-black hover:bg-gray-50"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="hidden md:flex h-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-5 text-sm font-medium text-black hover:bg-gray-200"
            >
              Sign up
            </Link>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5">
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.0625 11.579 2.0625 13H3.1875C3.1875 11.8888 3.55255 10.8092 4.2884 10.0232C5.02052 9.24159 6.02373 8.75 7.5 8.75C8.97627 8.75 9.97948 9.24159 10.7116 10.0232C11.4474 10.8092 11.8125 11.8888 11.8125 13H12.9375C12.9375 11.579 12.4778 10.2794 11.4959 9.31167C10.7244 8.55134 9.7003 8.12901 8.50627 7.98351C10.0188 7.54738 11.125 6.15288 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM5 4.5C5 3.11929 6.11929 2 7.5 2C8.88071 2 10 3.11929 10 4.5C10 5.88071 8.88071 7 7.5 7C6.11929 7 5 5.88071 5 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
