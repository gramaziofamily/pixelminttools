"use client";

import { useRef, useState } from "react";

export default function ColorPickerPage() {
  const canvasRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  function handleImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
    };

    img.src = url;
  }

  function rgbToHex(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    ).toUpperCase();
  }

  function pickColor(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = Math.floor((event.clientX - rect.left) * scaleX);
    const y = Math.floor((event.clientY - rect.top) * scaleY);

    const ctx = canvas.getContext("2d");
    const pixel = ctx.getImageData(x, y, 1, 1).data;

    const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
    setSelectedColor(hex);
  }

  async function copyColor() {
    if (!selectedColor) return;

    await navigator.clipboard.writeText(selectedColor);
    alert("Color copied: " + selectedColor);
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

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#516174" }}>
          Upload an image and tap anywhere to find a HEX color for Canva,
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
          <input type="file" accept="image/*" onChange={handleImage} />

          {imageUrl && (
            <>
              <h2 style={{ marginTop: "24px" }}>Tap Image to Pick a Color</h2>

              <canvas
                ref={canvasRef}
                onClick={pickColor}
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  cursor: "crosshair",
                  marginTop: "12px",
                }}
              />

              {selectedColor && (
                <div style={{ marginTop: "24px" }}>
                  <h2>Selected Color</h2>

                  <div
                    style={{
                      width: "100%",
                      height: "80px",
                      background: selectedColor,
                      borderRadius: "16px",
                      border: "1px solid #ddd",
                    }}
                  />

                  <p style={{ fontSize: "24px", fontWeight: "900" }}>
                    {selectedColor}
                  </p>

                  <button
                    onClick={copyColor}
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: "14px",
                      border: "none",
                      background: "#00bfa6",
                      color: "white",
                      fontWeight: "900",
                      fontSize: "18px",
                    }}
                  >
                    Copy HEX Color
                  </button>
                </div>
              )}
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
            <p>2. Tap anywhere on the image.</p>
            <p>3. View the selected HEX color code.</p>
            <p>4. Copy the color for Canva, websites, branding, or designs.</p>

            <h2>Why Use a Color Picker?</h2>

            <p>
              Color pickers help Canva users, Etsy sellers, bloggers, and small
              business owners match brand colors and create consistent designs.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>Can I use these colors in Canva?</h3>
            <p>Yes. HEX color codes can be copied directly into Canva.</p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint tools are free and require no signup.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
