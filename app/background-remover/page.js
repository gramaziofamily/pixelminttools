"use client";

import { useState } from "react";

export default function BackgroundRemoverPage() {
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const [removedImage, setRemovedImage] = useState("");
  const [tolerance, setTolerance] = useState(40);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImage(img);
      setPreview(url);
      setRemovedImage("");
    };

    img.src = url;
  }

  function removeBackground() {
    if (!image) return;

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const cornerR = data[0];
    const cornerG = data[1];
    const cornerB = data[2];

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const distance = Math.sqrt(
        Math.pow(r - cornerR, 2) +
          Math.pow(g - cornerG, 2) +
          Math.pow(b - cornerB, 2)
      );

      if (distance < tolerance) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);

    canvas.toBlob((blob) => {
      const result = URL.createObjectURL(blob);
      setRemovedImage(result);
    }, "image/png");
  }

  async function shareImage() {
    if (!removedImage) return;

    const blob = await fetch(removedImage).then((res) => res.blob());
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
    if (!removedImage) return;

    const blob = await fetch(removedImage).then((res) => res.blob());

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      alert("Image copied!");
    } catch {
      alert("Copy may not work on this browser. Try Share / Save to Photos instead.");
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
          Background <span style={{ color: "#00bfa6" }}>Remover</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.6" }}>
          This simple background remover removes colors similar to the top-left
          corner of your image. It works best with solid or simple backgrounds.
        </p>

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

              <div style={{ marginTop: "24px" }}>
                <label style={{ fontWeight: "900" }}>
                  Background Tolerance: {tolerance}
                </label>

                <input
                  type="range"
                  min="10"
                  max="160"
                  value={tolerance}
                  onChange={(e) => setTolerance(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "12px" }}
                />

                <button
                  onClick={removeBackground}
                  style={{
                    width: "100%",
                    marginTop: "16px",
                    padding: "16px",
                    borderRadius: "14px",
                    border: "none",
                    background: "#00bfa6",
                    color: "white",
                    fontWeight: "900",
                    fontSize: "18px",
                  }}
                >
                  Remove Background
                </button>
              </div>
            </>
          )}

          {removedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Background Removed</h2>

              <img
                src={removedImage}
                alt="Background removed preview"
                style={{
                  maxWidth: "100%",
                  borderRadius: "16px",
                  background:
                    "repeating-conic-gradient(#eee 0% 25%, #fff 0% 50%) 50% / 20px 20px",
                }}
              />

              <a
                href={removedImage}
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
