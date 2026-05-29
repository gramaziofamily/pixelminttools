"use client";

import { useState } from "react";

export default function ResizePage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [resizedPreview, setResizedPreview] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImage(img);
      setPreview(url);
      setWidth(img.width);
      setHeight(img.height);
      setResizedPreview("");
      setMessage("");
    };

    img.src = url;
  }

  function resizeImage() {
    if (!image || !width || !height) return;

    const canvas = document.createElement("canvas");
    canvas.width = Number(width);
    canvas.height = Number(height);

    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, Number(width), Number(height));

    const resizedUrl = canvas.toDataURL("image/png");
    setResizedPreview(resizedUrl);
    setMessage(`Image resized to ${width} × ${height}`);
  }

  async function copyImage() {
    if (!resizedPreview) return;

    const blob = await fetch(resizedPreview).then((res) => res.blob());

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      alert("Image copied!");
    } catch {
      alert("Copy may not work on this browser. Try Share / Save to Photos instead.");
    }
  }

  async function shareImage() {
    if (!resizedPreview) return;

    const blob = await fetch(resizedPreview).then((res) => res.blob());
    const file = new File([blob], "pixelmint-resized-image.png", {
      type: "image/png",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Resized image",
      });
    } else {
      alert("Sharing is not supported on this browser.");
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
          ← Back to tools
        </a>

        <h1 style={{ fontSize: "42px", fontWeight: "900", marginTop: "28px" }}>
          Free Image <span style={{ color: "#00bfa6" }}>Resizer</span>
        </h1>

        <div style={{ background: "white", borderRadius: "24px", padding: "28px" }}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {preview && (
            <>
              <h2>Original Image</h2>

              <img
                src={preview}
                alt="Original preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <div style={{ marginTop: "24px", display: "grid", gap: "12px" }}>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Width"
                  style={{ padding: "14px", fontSize: "16px" }}
                />

                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Height"
                  style={{ padding: "14px", fontSize: "16px" }}
                />

                <button
                  onClick={resizeImage}
                  style={{
                    padding: "16px",
                    borderRadius: "14px",
                    border: "none",
                    background: "#00bfa6",
                    color: "white",
                    fontWeight: "900",
                    fontSize: "18px",
                  }}
                >
                  Resize Image
                </button>
              </div>
            </>
          )}

          {resizedPreview && (
            <>
              <h2 style={{ marginTop: "28px" }}>Resized Image</h2>

              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <img
                src={resizedPreview}
                alt="Resized preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <a
                href={resizedPreview}
                download="pixelmint-resized-image.png"
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
                Download Resized Image
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
