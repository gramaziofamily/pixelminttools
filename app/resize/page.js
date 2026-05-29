export default function ResizePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily:
          "Avenir Next, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        color: "#102033",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#04786b", fontWeight: "800" }}>
          ← Back to tools
        </a>

        <div style={{ fontSize: "42px", marginTop: "28px" }}>🖼️</div>

        <h1
          style={{
            fontSize: "clamp(38px, 8vw, 68px)",
            lineHeight: "1",
            letterSpacing: "-2px",
            margin: "12px 0 18px",
            fontWeight: "900",
          }}
        >
          Free Image <span style={{ color: "#00bfa6" }}>Resizer</span>
        </h1>

        <p
          style={{
            fontSize: "21px",
            lineHeight: "1.5",
            color: "#516174",
            marginBottom: "26px",
          }}
        >
          Resize images online for free. Perfect for social media, websites,
          Etsy listings, blogs, and thumbnails.
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.95)",
            borderRadius: "28px",
            padding: "28px",
            boxShadow: "0 18px 45px rgba(15, 79, 88, 0.12)",
            border: "1px solid rgba(0,191,166,0.18)",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              border: "2px dashed #9adfd5",
              borderRadius: "22px",
              padding: "42px 20px",
              textAlign: "center",
              color: "#516174",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Upload feature coming soon
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.92)",
            borderRadius: "24px",
            padding: "26px",
            border: "1px solid rgba(0,191,166,0.18)",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>Common Image Sizes</h2>
          <ul style={{ fontSize: "18px", lineHeight: "1.8", color: "#516174" }}>
            <li>Instagram Post: 1080 × 1080</li>
            <li>Instagram Story: 1080 × 1920</li>
            <li>Facebook Post: 1200 × 630</li>
            <li>YouTube Thumbnail: 1280 × 720</li>
            <li>Pinterest Pin: 1000 × 1500</li>
          </ul>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.92)",
            borderRadius: "24px",
            padding: "26px",
            border: "1px solid rgba(0,191,166,0.18)",
          }}
        >
          <h2 style={{ fontSize: "30px", marginTop: 0 }}>
            Why resize images?
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#516174" }}>
            Resizing images helps your photos and graphics fit the exact spaces
            you need online. Smaller, properly sized images can also load faster
            and look cleaner on social media, websites, shops, and blogs.
          </p>
        </div>
      </section>
    </main>
  );
}
