"use client";

import { useState } from "react";

export default function FaviconGeneratorPage() {
  const [sourceImage, setSourceImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [favicons, setFavicons] = useState([]);

  const sizes = [16, 32, 48, 64];

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setSourceImage(img);
      setPreview(url);
      setFavicons([]);
    };

    img.src = url;
  }

  function generateFavicons() {
    if (!sourceImage) return;

    const generated = sizes.map((size) => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(sourceImage, 0, 0, size, size);

      const dataUrl = canvas.toDataURL("image/png");

      return {
        size,
        url: dataUrl,
        filename: `pixelmint-favicon-${size}x${size}.png`,
      };
    });

    setFavicons(generated);
  }

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
          Favicon <span style={{ color: "#00bfa6" }}>Generator</span>
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#516174" }}>
          Create downloadable favicon images for websites, blogs, stores, and
          businesses.
        </p>

        <div style={{ background: "white", borderRadius: "24px", padding: "28px" }}>
          <input type="file" accept="image/*" onChange={handleUpload} />

          {preview && (
            <>
              <h2 style={{ marginTop: "24px" }}>Preview</h2>

              <img
                src={preview}
                alt="Preview"
                style={{
                  width: "128px",
                  height: "128px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

              <button
                onClick={generateFavicons}
                style={{
                  width: "100%",
                  marginTop: "18px",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  background: "#00bfa6",
                  color: "white",
                  fontWeight: "900",
                  fontSize: "18px",
                }}
              >
                Generate Favicons
              </button>
            </>
          )}

          {favicons.length > 0 && (
            <>
              <h2 style={{ marginTop: "28px" }}>Download Favicons</h2>

              <div style={{ display: "grid", gap: "18px" }}>
                {favicons.map((icon) => (
                  <div
                    key={icon.size}
                    style={{
                      padding: "18px",
                      borderRadius: "18px",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <p style={{ fontWeight: "900" }}>
                      {icon.size}×{icon.size} PNG
                    </p>

                    <img
                      src={icon.url}
                      alt={`${icon.size} favicon`}
                      style={{
                        width: icon.size,
                        height: icon.size,
                        objectFit: "cover",
                        border: "1px solid #ddd",
                      }}
                    />

                    <a
                      href={icon.url}
                      download={icon.filename}
                      style={{
                        display: "block",
                        marginTop: "14px",
                        padding: "14px",
                        borderRadius: "14px",
                        background: "#102033",
                        color: "white",
                        textAlign: "center",
                        fontWeight: "900",
                        textDecoration: "none",
                      }}
                    >
                      Download {icon.size}×{icon.size}
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}

          <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
            }}
          >
            <h2>Frequently Asked Questions</h2>

            <h3>What is a favicon?</h3>
            <p>
              A favicon is the small icon that appears in browser tabs,
              bookmarks, and search results.
            </p>

            <h3>Why do websites need a favicon?</h3>
            <p>
              Favicons help visitors recognize your brand and make your website
              look more professional.
            </p>

            <h3>What favicon sizes can I download?</h3>
            <p>
              PixelMint creates 16×16, 32×32, 48×48, and 64×64 PNG favicon
              images.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint Tools are free and require no signup.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
