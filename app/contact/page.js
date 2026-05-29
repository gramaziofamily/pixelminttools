export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily: "Avenir Next, Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/">← Back to Home</a>

        <h1 style={{ fontSize: "52px", fontWeight: "900", marginTop: "24px" }}>
          Contact <span style={{ color: "#00bfa6" }}>PixelMint</span>
        </h1>

        <div style={{ background: "white", padding: "30px", borderRadius: "24px", marginTop: "24px" }}>
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Have a question, suggestion, or issue with PixelMint Tools?
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Please email us at:
          </p>

          <p style={{ fontSize: "20px", fontWeight: "800" }}>
            hello@pixelminttools.com
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            We do our best to respond as soon as possible.
          </p>
        </div>
      </section>
    </main>
  );
}
