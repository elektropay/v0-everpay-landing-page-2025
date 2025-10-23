import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Everpay - Global Payment Solutions",
  description: "Accept payments globally with industry-leading security and compliance",
  generator: 'everpay.app'
  google-analytics: 'UA-20603888-1'  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-38V2EJWSF6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-38V2EJWSF6');
</script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-20603888-1');
  </script>
<script type="text/javascript" src="https://secure.lack4skip.com/js/203566.js" ></script>
<noscript><img alt="" src="https://secure.lack4skip.com/203566.png" style="display:none;" /></noscript>
<meta name="google-analytics" content="UA-20603888-1">  
    <link rel="shortcut icon" 
      href="%PUBLIC_URL%/favicon.ico" 
      />
      
      <link rel="apple-touch-icon" 
          href="logo192.png" 
       />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
