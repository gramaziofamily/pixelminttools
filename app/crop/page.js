"use client";

import { useState } from "react";

export default function CropPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [croppedImage, setCroppedImage] = useState("");
  const [croppedBlob, setCroppedBlob] = useState(null);
  const [fileName, setFileName] = useState("pixelmint-cropped-image.png");
  const [message, setMessage] = useState("");

  const presets = [
    ["Instagram Post", 1080, 1080],
    ["Instagram Story", 1080, 1920],
    ["Pinterest Pin", 1000, 1500],
    ["YouTube Thumbnail", 1280, 720],
    ["Facebook Post", 1200, 630],
    ["Square Profile", 800, 800],
  ];

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImage(img);
      setPreview(url);
      setCroppedImage("");
      setCroppedBlob(null);
      setMessage("");
    };

    img.src = url;
  }

  function makeFileName(label) {
    return `pixelmint-${label.toLowerCase().replaceAll(" ", "-")}.png`;
  }

  function cropToSize(label, targetWidth, targetHeight) {
    if (!image) return;

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const ctx = canvas.getContext("2d");

    const targetRatio = targetWidth / targetHeight;
    const imageRatio = image.width / image.height;

    let sourceWidth = image.width;
    let sourceHeight = image.height;
    let sourceX = 0;
    let sourceY = 0;

    if (imageRatio > targetRatio) {
      sourceWidth = image.height * targetRatio;
      sourceX = (image.width - sourceWidth) / 2;
    } else {
      sourceHeight = image.width / targetRatio;
      sourceY = (image.height - sourceHeight) / 2;
    }

    ctx.drawImage(
      image,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      0,
      0,
      targetWidth,
      targetHeight
    );

    const dataUrl = canvas.toDataURL("image/png");
    setCroppedImage(dataUrl);

    canvas.toBlob((blob) => {
      setCroppedBlob(blob);
      setFileName(makeFileName(label));
      setMessage(`${label}: ${targetWidth} × ${targetHeight}`);
    }, "image/png");
  }

  function downloadImage() {
    if (!croppedBlob) return;

    const url = URL.createObjectURL(croppedBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function copyImage() {
    if (!croppedBlob) return;

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": croppedBlob }),
      ]);
      alert("Image copied!");
    } catch {
      alert("Copy may not work on this browser. Try Share / Save to Photos.");
    }
  }

  async function shareImage() {
    if (!croppedBlob) return;

    const file = new File([croppedBlob], fileName, {
      type: "image/png",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Cropped image",
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
          Social Media <span style={{ color: "#00bfa6" }}>Cropper</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.6" }}>
          Crop images into popular social media sizes for Instagram, Pinterest,
          YouTube, Facebook, and profile pictures.
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

              <div style={{ marginTop: "24px", display: "grid", gap: "12px" }}>
                {presets.map(([label, w, h]) => (
                  <button
                    key={label}
                    onClick={() => cropToSize(label, w, h)}
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      border: "none",
                      background: "#00bfa6",
                      color: "white",
                      fontWeight: "900",
                      fontSize: "16px",
                    }}
                  >
                    {label} — {w} × {h}
                  </button>
                ))}
              </div>
            </>
          )}

          {croppedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Cropped Image</h2>

              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <img
                src={croppedImage}
                alt="Cropped preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <button
                onClick={downloadImage}
                style={{
                  width: "100%",
                  marginTop: "18px",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  background: "#102033",
                  color: "white",
                  fontWeight: "900",
                  fontSize: "18px",
                }}
              >
                Download Cropped Image
              </button>

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
