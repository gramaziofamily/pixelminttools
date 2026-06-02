"use client";

import { useState } from "react";

export default function ColorPickerPage() {
  const [image, setImage] = useState(null);

  function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
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
          Color Picker From <span style={{ color: "#00bfa6" }}>Image</span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#516174",
          }}
        >
          Upload an image and identify colors for Canva designs,
          Etsy branding, websites, logos, and social media graphics.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            marginTop: "24px",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {image && (
            <>
              <h2 style={{ marginTop: "24px" }}>
                Uploaded Image
              </h2>

              <img
                src={image}
                alt="Uploaded"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                }}
              />
            </>
          )}

          <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
            }}
          >
            <h2>How to Pick Colors From an Image</h2>

            <p>1. Upload your image.</p>
            <p>2. View the image preview.</p>
            <p>3. Select colors from the image.</p>
            <p>4. Copy HEX color codes for Canva, websites, and branding.</p>

            <h2>Why Use a Color Picker?</h2>

            <p>
              Color pickers help designers, Etsy sellers, bloggers,
              and Canva users match brand colors and create
              consistent designs.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>Can I use these colors in Canva?</h3>
            <p>
              Yes. HEX color codes can be copied directly into Canva.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>
              Yes. All PixelMint tools are free and require no signup.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
