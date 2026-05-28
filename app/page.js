export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #ecfeff)",
        padding: "40px 20px",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          PixelMint Tools
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#4b5563",
            marginBottom: "40px",
          }}
        >
          Free image tools. No signup. No watermarks.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          {[
            ["Image Resizer", "/resize"],
            ["Image Compressor", "/compress"],
            ["JPG / PNG Converter", "/convert"],
            ["Social Media Image Cropper", "/crop"],
            ["Background Remover", "/background-remover"],
          ].map(([title, link]) => (
            <a
              key={title}
              href={link}
              style={{
                display: "block",
                padding: "20px",
                background: "#ffffff",
                borderRadius: "16px",
                textDecoration: "none",
                color: "#111827",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #e5e7eb",
              }}
            >
              {title}
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: "50px",
            padding: "24px",
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2>Why PixelMint?</h2>
          <p>
            Fast, simple image tools designed for creators, bloggers,
            Etsy sellers, Pinterest users, and small businesses.
          </p>
        </div>
      </div>
    </main>
  );
}
