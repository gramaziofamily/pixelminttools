export default function AboutPage() {
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
        <a href="/">← Back to Home</a>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: "900",
            marginTop: "24px",
          }}
        >
          About <span style={{ color: "#00bfa6" }}>PixelMint Tools</span>
        </h1>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "24px",
            marginTop: "24px",
          }}
        >
          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            PixelMint Tools was created to provide free and simple image tools
            for creators, bloggers, Etsy sellers, small businesses, and anyone
            who works with digital content.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Our goal is to make image editing faster and easier without
            requiring expensive software or complicated accounts.
          </p>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            We are continuously adding new tools and features to help users
            resize, compress, convert, crop, and optimize images online.
          </p>
        </div>
      </section>
    </main>
  );
}
