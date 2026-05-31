export default function AboutPage() {
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
        <a href="/" style={{ color: "#04786b", fontWeight: "800" }}>
          ← Back to Home
        </a>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "900",
            marginTop: "28px",
          }}
        >
          About <span style={{ color: "#00bfa6" }}>PixelMint</span>
        </h1>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "32px",
            marginTop: "24px",
            lineHeight: "1.8",
          }}
        >
          <p>
            PixelMint Tools is a free collection of image tools designed to help
            creators, businesses, bloggers, and social media users edit images
            quickly and easily.
          </p>

          <p>
            Our mission is simple: provide fast, free image tools without
            watermarks, subscriptions, or complicated software.
          </p>

          <p>
            Whether you need to resize an image, convert file formats, compress
            large photos, or prepare content for social media, PixelMint makes
            it simple.
          </p>

          <h2 style={{ marginTop: "32px" }}>Why PixelMint?</h2>

          <ul>
            <li>Always free to use</li>
            <li>No sign-up required</li>
            <li>No watermarks</li>
            <li>Mobile-friendly</li>
            <li>Fast and easy tools</li>
          </ul>

          <p>
            We believe image editing should be accessible to everyone.
          </p>

          <p>
            Thank you for using PixelMint Tools.
          </p>
        </div>
      </section>
    </main>
  );
}
