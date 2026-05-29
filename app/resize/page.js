"use client";

import { useState } from "react";

export default function ResizePage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

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
      setDownloadUrl("");
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
    setDownloadUrl(resizedUrl);
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

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 18px 45px rgba(15,79,88,0.12)",
          }}
        >
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {preview && (
            <>
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  marginTop: "24px",
                  borderRadius: "16px",
                }}
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

          {downloadUrl && (
            <a
              href={downloadUrl}
              download="pixelmint-resized-image.png"
              style={{
                display: "block",
                marginTop: "24px",
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
          )}
        </div>
      </section>
    </main>
  );
}
