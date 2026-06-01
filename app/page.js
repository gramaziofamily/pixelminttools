export default function Home() {
  const sections = [
    {
      title: "🌟 Most Popular Tools",
      tools: [
        ["🖼️ Image Resizer", "/resize", "Resize images for Canva designs, Etsy listings, Pinterest pins, Instagram posts, websites, blogs, and online stores."],
        ["🔗 QR Code Generator", "/qr-code-generator", "Create QR codes for websites, Instagram profiles, Etsy shops, business cards, restaurant menus, and marketing materials."],
        ["📱 HEIC to JPG Converter", "/heic-to-jpg", "Convert iPhone HEIC photos into JPG files for Canva, Etsy, websites, Shopify stores, forms, and uploads."],
        ["🗜️ Image Compressor", "/compress", "Compress Canva exports, Etsy product photos, website images, blog graphics, and social media posts while maintaining quality."],
        ["📄 PNG to JPG Converter", "/png-to-jpg", "Convert PNG images into JPG files for smaller uploads."],
      ],
    },
    {
      title: "🖼️ Image Editing Tools",
      tools: [
        ["✂️ Social Media Cropper", "/crop", "Resize Canva graphics for Instagram posts, Pinterest pins, YouTube thumbnails, Facebook posts, and social media marketing."],
        ["🔄 Image Rotator", "/rotate", "Rotate images 90°, 180°, or 270° in seconds."],
        ["↔️ Image Flipper", "/flip", "Flip images horizontally or vertically with one click."],
        ["✨ Background Remover", "/background-remover", "Coming soon: remove image backgrounds for product photos and graphics."],
      ],
    },
    {
      title: "🔄 Image Converters",
      tools: [
        ["🖼️ JPG to PNG Converter", "/convert", "Convert JPG and PNG images instantly with no software required."],
        ["🌐 WebP Converter", "/webp-converter", "Convert WebP images into PNG files for Canva projects, websites, Etsy listings, and online stores."],
        ["🎨 SVG to PNG Converter", "/svg-to-png", "Convert SVG graphics into PNG images for Canva, Cricut projects, Etsy downloads, websites, and social media."],
      ],
    },
    {
      title: "📄 PDF Tools",
      tools: [
        ["📄 Image to PDF Converter", "/image-to-pdf", "Convert images into downloadable PDF files."],
        ["🖼️ PDF to Image Converter", "/pdf-to-image", "Convert PDF pages into JPG and PNG images for Canva projects, presentations, websites, and social media content."],
      ],
    },
    {
      title: "🌐 Website & Business Tools",
      tools: [
     [
  "💰 Etsy Fee Calculator",
  "/etsy-fee-calculator",
  "Calculate Etsy fees, selling costs, and estimated profit."
]
        
        ["⭐ Favicon Generator", "/favicon-generator", "Create favicon icons for websites, Shopify stores, blogs, portfolios, and online businesses."],
      ],
    },
  ];

  const footerLinks = [
    ["About", "/about"],
    ["Privacy Policy", "/privacy-policy"],
    ["Terms", "/terms"],
    ["Contact", "/contact"],
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
          ✨ 15+ Free Online Tools
        </div>

        <div style={{ fontSize: "42px", marginBottom: "8px" }}>🌿</div>

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
          Free online tools for Canva users, Etsy sellers, bloggers, Pinterest creators, YouTubers, and small businesses. Convert images, create QR codes, generate favicons, work with PDFs, and more. No signup. No watermarks.        </p>

        {sections.map((section) => (
          <div key={section.title} style={{ marginTop: "42px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#04786b",
                marginBottom: "8px",
              }}
            >
              {section.title}
            </h2>

            <div
              style={{
                width: "80px",
                height: "4px",
                background: "#00bfa6",
                borderRadius: "999px",
                marginBottom: "22px",
              }}
            />

            <div style={{ display: "grid", gap: "18px" }}>
              {section.tools.map(([title, link, desc]) => (
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
                    boxShadow: "0 18px 45px rgba(15,79,88,0.12)",
                    border: "1px solid rgba(0,191,166,0.18)",
                  }}
                >
                  <div style={{ fontSize: "26px", fontWeight: "900" }}>
                    {title}
                  </div>

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
          </div>
        ))}

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

          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#516174" }}>
            Every tool is free to use, requires no signup, and never adds
            watermarks to your images.
          </p>
        </div>

        <footer
          style={{
            marginTop: "36px",
            padding: "24px 8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {footerLinks.map(([title, link]) => (
              <a
                key={title}
                href={link}
                style={{
                  color: "#04786b",
                  fontWeight: "800",
                  fontSize: "14px",
                  textDecoration: "underline",
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </a>
            ))}
          </div>
        </footer>
      </section>
    </main>
  );
}
