export default function Home() {
  const tools = [
    ["Image Resizer", "/resize", "Resize images for social media, websites, and shops."],
    ["Image Compressor", "/compress", "Make image files smaller and faster to upload."],
    ["JPG / PNG Converter", "/convert", "Convert image formats for free."],
    ["Social Media Image Cropper", "/crop", "Crop images for Instagram, Pinterest, YouTube, and more."],
    ["Background Remover", "/background-remover", "Prepare clean product photos and graphics."],
  ];

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
      <section style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "#d9fff7",
            color: "#04786b",
            fontWeight: "800",
            marginBottom: "24px",
          }}
        >
          ✨ Free creator tools
        </div>

        <div
          style={{
            fontSize: "42px",
            marginBottom: "8px",
          }}
        >
          🌿
        </div>

        <h1
          style={{
            fontSize: "clamp(34px, 7vw, 60px)",
            lineHeight: "1",
            letterSpacing: "-2px",
            margin: "0 0 18px",
            fontWeight: "900",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>
            PixelMint <span style={{ color: "#00bfa6" }}>Tools</span>
          </span>
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.4",
            color: "#516174",
            maxWidth: "720px",
            marginBottom: "24px",
          }}
        >
          Free image tools for creators, Etsy sellers, bloggers, and small
          businesses. No signup. No watermarks.
        </p>

        <div style={{ display: "grid", gap: "18px" }}>
          {tools.map(([title, link, desc]) => (
            <a
              key={title}
              href={link}
              style={{
                display: "block",
                padding: "20px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.92)",
                textDecoration: "none",
                color: "#102033",
                boxShadow: "0 18px 45px rgba(15, 79, 88, 0.12)",
                border: "1px solid rgba(0,191,166,0.18)",
              }}
            >
              <div style={{ fontSize: "26px", fontWeight: "900" }}>{title}</div>
              <div
                style={{
                  marginTop: "8px",
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: "1.4",
                }}
              >
                {desc}
              </div>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: "42px",
            padding: "28px",
            background: "rgba(255,255,255,0.9)",
            borderRadius: "24px",
            border: "1px solid rgba(0,191,166,0.18)",
          }}
        >
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Why PixelMint?</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#516174" }}>
            PixelMint Tools helps you quickly prepare images for websites,
            online shops, social media posts, thumbnails, and digital content.
          </p>
        </div>
      </section>
    </main>
  );
}
