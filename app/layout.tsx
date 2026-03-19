import type React from "react"
import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieNotice } from "@/components/cookie-notice"
import "./globals.css"

export const metadata: Metadata = {
  title: "Everpay - Global Payment Solutions",
  description: "Accept payments globally with industry-leading security and compliance",
  generator: 'everpay.app',
  content: "UA-20603888-1"  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
    <link 
      rel="shortcut icon" 
      href="favicon.ico" 
      />
      
      <link 
        rel="apple-touch-icon" 
        href="logo192.png" 
       />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieNotice />
        <SpeedInsights />
      </body>
    </html>
  )
}
