"use client";

import { useState } from "react";

export default function SvgToPngPage() {
  const [svgText, setSvgText] = useState("");
  const [pngUrl, setPngUrl] = useState("");
  const [message, setMessage] = useState("");

  function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      setSvgText(e.target.result);
      setPngUrl("");
      setMessage("");
    };

    reader.readAsText(file);
  }

  function convertToPng() {
    if (!svgText) return;

    const blob = new Blob([svgText], {
      type: "image/svg+xml",
    });

    const url = URL.createObjectURL(blob);

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = img.width || 512;
      canvas.height = img.height || 512;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0);

      const png = canvas.toDataURL("image/png");

      setPngUrl(png);
      setMessage("SVG converted to PNG");
    };

    img.src = url;
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
          SVG to <span style={{ color: "#00bfa6" }}>PNG Converter</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.7" }}>
          Convert SVG files into downloadable PNG images for websites,
          social media, Cricut projects, and online stores.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
          }}
        >
          <input
            type="file"
            accept=".svg,image/svg+xml"
            onChange={handleUpload}
          />

          {svgText && (
            <button
              onClick={convertToPng}
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
              Convert to PNG
            </button>
          )}

          {pngUrl && (
            <>
              <p
                style={{
                  color: "#04786b",
                  fontWeight: "800",
                  marginTop: "20px",
                }}
              >
                {message}
              </p>

              <img
                src={pngUrl}
                alt="PNG Preview"
                style={{
                  maxWidth: "100%",
                  borderRadius: "16px",
                  marginTop: "18px",
                }}
              />

              <a
                href={pngUrl}
                download="pixelmint-converted.png"
                style={{
                  display: "block",
                  marginTop: "18px",
                  padding: "16px",
                  borderRadius: "14px",
                  background: "#102033",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "900",
                  textDecoration: "none",
                }}
              >
                Download PNG
              </a>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
