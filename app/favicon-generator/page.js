"use client";

import { useState } from "react";

export default function FaviconGeneratorPage() {
  const [preview, setPreview] = useState("");

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily:
          "Avenir Next, Inter, ui-sans-serif, system-ui, sans-serif",
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

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#516174",
          }}
        >
          Create favicon images for websites, blogs, stores, and businesses.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 18px 45px rgba(15,79,88,0.12)",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />

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

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "24px",
                  flexWrap: "wrap",
                }}
              >
                {[16, 32, 48, 64].map((size) => (
                  <div key={size}>
                    <div>{size}×{size}</div>

                    <img
                      src={preview}
                      alt={`${size}px favicon`}
                      style={{
                        width: size,
                        height: size,
                        objectFit: "cover",
                        border: "1px solid #ddd",
                      }}
                    />
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

            <h3>What favicon size should I use?</h3>
            <p>
              Most websites use 16×16, 32×32, and 48×48 favicon sizes.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>
              Yes. All PixelMint Tools are free and require no signup.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
