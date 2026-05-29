"use client";

import { useState } from "react";
import { removeBackground } from "@imgly/background-removal";

export default function BackgroundRemoverPage() {
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setResult("");
    setLoading(true);

    try {
      const blob = await removeBackground(file);
      const url = URL.createObjectURL(blob);
      setResult(url);
    } catch (error) {
      alert("Background removal failed. Try a clearer photo.");
      console.error(error);
    }

    setLoading(false);
  }

  async function shareImage() {
    if (!result) return;

    const blob = await fetch(result).then((res) => res.blob());
    const file = new File([blob], "pixelmint-background-removed.png", {
      type: "image/png",
    });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Background Removed Image",
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  }

  async function copyImage() {
    if (!result) return;

    const blob = await fetch(result).then((res) => res.blob());

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      alert("Image copied!");
    } catch {
      alert("Copy may not work on this browser. Try Share / Save to Photos.");
    }
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
          AI Background <span style={{ color: "#00bfa6" }}>Remover</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.6" }}>
          Upload an image and PixelMint will remove the background automatically.
          The first image may take a little longer to process.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 18px 45px rgba(15,79,88,0.12)",
          }}
        >
          <input type="file" accept="image/*" onChange={handleUpload} />

          {preview && (
            <>
              <h2>Original Image</h2>
              <img
                src={preview}
                alt="Original"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />
            </>
          )}

          {loading && (
            <p style={{ marginTop: "24px", fontWeight: "900", color: "#04786b" }}>
              Removing background... please wait.
            </p>
          )}

          {result && (
            <>
              <h2 style={{ marginTop: "28px" }}>Background Removed</h2>

              <img
                src={result}
                alt="Background removed"
                style={{
                  maxWidth: "100%",
                  borderRadius: "16px",
                  background:
                    "repeating-conic-gradient(#eee 0% 25%, #fff 0% 50%) 50% / 20px 20px",
                }}
              />

              <a
                href={result}
                download="pixelmint-background-removed.png"
                style={{
                  display: "block",
                  marginTop: "18px",
                  padding: "16px",
                  borderRadius: "14px",
                  background: "#102033",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "900",
                }}
              >
                Download PNG
              </a>

              <button
                onClick={shareImage}
                style={{
                  width: "100%",
                  marginTop: "12px",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  background: "#00bfa6",
                  color: "white",
                  fontWeight: "900",
                  fontSize: "18px",
                }}
              >
                Share / Save to Photos
              </button>

              <button
                onClick={copyImage}
                style={{
                  width: "100%",
                  marginTop: "12px",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "2px solid #00bfa6",
                  background: "white",
                  color: "#04786b",
                  fontWeight: "900",
                  fontSize: "18px",
                }}
              >
                Copy Image
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
