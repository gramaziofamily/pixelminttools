"use client";

import { useState } from "react";

export default function CompressPage() {
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const [quality, setQuality] = useState(70);
  const [compressedImage, setCompressedImage] = useState("");
  const [message, setMessage] = useState("");

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImage(img);
      setPreview(url);
      setCompressedImage("");
      setMessage("");
    };

    img.src = url;
  }

  function compressImage() {
    if (!image) return;

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    canvas.toBlob(
      (blob) => {
        const result = URL.createObjectURL(blob);
        setCompressedImage(result);
        setMessage(`Image compressed at ${quality}% quality`);
      },
      "image/jpeg",
      quality / 100
    );
  }

  async function shareImage() {
    if (!compressedImage) return;

    const blob = await fetch(compressedImage).then((res) => res.blob());
    const file = new File([blob], "pixelmint-compressed-image.jpg", {
      type: blob.type,
    });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Compressed Image",
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  }

  async function copyImage() {
    if (!compressedImage) return;

    const blob = await fetch(compressedImage).then((res) => res.blob());

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
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
          Free Image <span style={{ color: "#00bfa6" }}>Compressor</span>
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
              <h2>Original Image</h2>

              <img
                src={preview}
                alt="Original preview"
                style={{
                  maxWidth: "100%",
                  marginTop: "12px",
                  borderRadius: "16px",
                }}
              />

              <div style={{ marginTop: "24px" }}>
                <label style={{ fontWeight: "900" }}>
                  Compression Quality: {quality}%
                </label>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  style={{ width: "100%", marginTop: "12px" }}
                />

                <button
                  onClick={compressImage}
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
                  Compress Image
                </button>
              </div>
            </>
          )}

          {compressedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Compressed Image</h2>

              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <img
                src={compressedImage}
                alt="Compressed preview"
                style={{
                  maxWidth: "100%",
                  borderRadius: "16px",
                }}
              />

              <a
                href={compressedImage}
                download="pixelmint-compressed-image.jpg"
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
                Download Compressed Image
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
