"use client";

import { useState } from "react";

export default function CropPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [croppedImage, setCroppedImage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("pixelmint-cropped-image.png");
  const [lastCrop, setLastCrop] = useState(null);

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
      setDownloadUrl("");
      setMessage("");
      setLastCrop(null);
    };

    img.src = url;
  }

  function makeCanvas(targetWidth, targetHeight) {
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

    return canvas;
  }

  function cropToSize(label, targetWidth, targetHeight) {
    if (!image) return;

    const canvas = makeCanvas(targetWidth, targetHeight);
    const dataUrl = canvas.toDataURL("image/png");
    const name = `pixelmint-${label.toLowerCase().replaceAll(" ", "-")}.png`;

    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);

      setCroppedImage(dataUrl);
      setDownloadUrl(blobUrl);
      setFileName(name);
      setMessage(`${label}: ${targetWidth} × ${targetHeight}`);
      setLastCrop({ label, targetWidth, targetHeight });
    }, "image/png");
  }

  async function shareImage() {
    if (!image || !lastCrop) {
      alert("Crop an image first.");
      return;
    }

    const canvas = makeCanvas(lastCrop.targetWidth, lastCrop.targetHeight);

    canvas.toBlob(async (blob) => {
      const file = new File([blob], fileName, {
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
    }, "image/png");
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

              <a
                href={downloadUrl}
                download={fileName}
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
                Download Cropped Image
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}
