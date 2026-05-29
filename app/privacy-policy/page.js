export default function PrivacyPolicyPage() {
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
          Privacy <span style={{ color: "#00bfa6" }}>Policy</span>
        </h1>

        <div style={{ background: "white", padding: "30px", borderRadius: "24px", marginTop: "24px" }}>
          <p>Last updated: May 2026</p>

          <h2>Information We Collect</h2>
          <p>PixelMint Tools may collect basic usage information such as pages visited, browser type, and general analytics data to improve the website.</p>

          <h2>Image Files</h2>
          <p>Our tools are intended to process images directly in your browser when possible. We do not sell your images or personal files.</p>

          <h2>Cookies and Analytics</h2>
          <p>We may use cookies or analytics tools to understand website traffic and improve user experience.</p>

          <h2>Third-Party Services</h2>
          <p>PixelMint Tools may use third-party services such as hosting, analytics, or advertising platforms.</p>

          <h2>Contact</h2>
          <p>If you have questions about this privacy policy, please contact us through our contact page.</p>
        </div>
      </section>
    </main>
  );
}
