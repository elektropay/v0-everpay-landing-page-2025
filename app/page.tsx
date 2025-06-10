export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Everpay</h1>
        <p style={{ color: "#666" }}>Smart Payment Solutions</p>
      </header>

      <main>
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Modern Banking Solutions</h2>
          <p>Send, receive and pay anywhere in the world in the most convenient way.</p>
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Features</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  marginRight: "10px",
                }}
              ></span>
              Profitable deposits
            </li>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  marginRight: "10px",
                }}
              ></span>
              No commission
            </li>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  marginRight: "10px",
                }}
              ></span>
              Good cashback
            </li>
            <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  marginRight: "10px",
                }}
              ></span>
              Fast transfers
            </li>
          </ul>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid #eee", paddingTop: "20px", color: "#666" }}>
        <p>© 2023 Everpay. All rights reserved.</p>
      </footer>
    </div>
  )
}
