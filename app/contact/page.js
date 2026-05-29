export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily: "Avenir Next, Inter, ui-sans-serif, system-ui, sans-serif",
        color: "#102033",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a
          href="/"
          style={{ color: "#04786b", fontWeight: "800" }}
        >
          ← Back to Home
        </a>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "900",
            marginTop: "28px",
            lineHeight: "1.05",
          }}
        >
          Contact <span style={{ color: "#00bfa6" }}>PixelMint</span>
        </h1>

        <div
          style={{
            background: "rgba(255,255,255,0.92)",
            borderRadius: "24px",
            padding: "28px",
            border: "1px solid rgba(0,191,166,0.18)",
            boxShadow: "0 18px 45px rgba(15,79,88,0.12)",
          }}
        >
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#516174" }}>
            Have a question, suggestion, or issue with PixelMint Tools?
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#516174" }}>
            You can reach us at:
          </p>

          <p
            style={{
              fontSize: "22px",
              fontWeight: "800",
              color: "#00bfa6",
            }}
          >
            hello@pixelminttools.com
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#516174" }}>
            We do our best to respond as quickly as possible.
          </p>
        </div>
      </section>
    </main>
  );
}
