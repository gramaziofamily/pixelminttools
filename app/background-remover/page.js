export default function BackgroundRemoverPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily:
          "Avenir Next, Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/">← Back to tools</a>

        <div style={{ fontSize: "42px", marginTop: "28px" }}>🪄</div>

        <h1 style={{ fontSize: "56px", fontWeight: "900" }}>
          Background <span style={{ color: "#00bfa6" }}>Remover</span>
        </h1>

        <p style={{ fontSize: "22px", color: "#64748b" }}>
          Remove image backgrounds for product photos, logos, social media, and online shops.
        </p>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "24px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              border: "2px dashed #9adfd5",
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            Upload feature coming soon
          </div>
        </div>
      </section>
    </main>
  );
}
