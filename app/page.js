export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Everpay</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: "20px", lineHeight: 1.6 }}>
        <div>
          <h1 style={{ color: "#333", marginBottom: "10px" }}>Everpay</h1>
          <p style={{ color: "#666", marginBottom: "10px" }}>Payment Solutions</p>

          <div style={{ marginTop: "20px" }}>
            <h2 style={{ color: "#666", marginTop: "20px", marginBottom: "10px" }}>Our Services</h2>
            <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "5px" }}>Secure Payment Processing</li>
              <li style={{ marginBottom: "5px" }}>Easy Integration</li>
              <li style={{ marginBottom: "5px" }}>24/7 Support</li>
            </ul>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h2 style={{ color: "#666", marginTop: "20px", marginBottom: "10px" }}>About Us</h2>
            <p style={{ color: "#666", marginBottom: "10px" }}>
              Everpay is a leading provider of payment solutions for businesses of all sizes.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h2 style={{ color: "#666", marginTop: "20px", marginBottom: "10px" }}>Contact</h2>
            <p style={{ color: "#666", marginBottom: "10px" }}>Email: contact@everpay.com</p>
            <p style={{ color: "#666", marginBottom: "10px" }}>Phone: 1-800-EVERPAY</p>
          </div>
        </div>
      </body>
    </html>
  )
}
