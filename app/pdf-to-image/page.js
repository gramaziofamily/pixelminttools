"use client";

export default function PdfToImagePage() {
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

        <h1 style={{ fontSize: "42px", fontWeight: "900", marginTop: "28px" }}>
          PDF to <span style={{ color: "#00bfa6" }}>Image Converter</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.7" }}>
          Convert PDF pages into JPG and PNG images.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 18px 45px rgba(15,79,88,0.12)",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#516174",
            }}
          >
            PDF conversion is coming soon. We are building support for converting
            PDF pages into downloadable image files.
          </p>

          <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
            }}
          >
            <h2>Frequently Asked Questions</h2>

            <h3>What does a PDF to image converter do?</h3>
            <p>
              A PDF to image converter turns PDF pages into JPG or PNG image files.
            </p>

            <h3>Can I convert multiple pages?</h3>
            <p>
              The upcoming version will support multi-page PDF conversion.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>
              Yes. All PixelMint tools are free and require no signup.
            </p>

            <h3>Does PixelMint add watermarks?</h3>
            <p>
              No. PixelMint never adds watermarks to your files.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
