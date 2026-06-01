"use client";

import { useState } from "react";

export default function PngToJpgPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [convertedImage, setConvertedImage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [message, setMessage] = useState("");

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImage(img);
      setPreview(url);
      setConvertedImage("");
      setDownloadUrl("");
      setMessage("");
    };

    img.src = url;
  }

  function convertToJpg() {
    if (!image) return;

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);

    canvas.toBlob(
      (blob) => {
        const blobUrl = URL.createObjectURL(blob);
        setConvertedImage(dataUrl);
        setDownloadUrl(blobUrl);
        setMessage("PNG converted to JPG");
      },
      "image/jpeg",
      0.92
    );
  }

  async function shareImage() {
    if (!convertedImage) {
      alert("Convert an image first.");
      return;
    }

    const blob = await fetch(convertedImage).then((res) => res.blob());
    const file = new File([blob], "pixelmint-converted-image.jpg", {
      type: "image/jpeg",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Converted JPG image",
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
          PNG to <span style={{ color: "#00bfa6" }}>JPG Converter</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.6" }}>
          Convert PNG images into JPG files for free. Great for smaller image
          files, website uploads, email attachments, and online shops.
        </p>

        <div style={{ background: "white", borderRadius: "24px", padding: "28px" }}>
          <input type="file" accept="image/png" onChange={handleImageUpload} />

          {preview && (
            <>
              <h2>Original PNG</h2>

              <img
                src={preview}
                alt="Original preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <button
                onClick={convertToJpg}
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
                Convert to JPG
              </button>
            </>
          )}

          {convertedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Converted JPG</h2>

              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <img
                src={convertedImage}
                alt="Converted JPG preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <a
                href={downloadUrl}
                download="pixelmint-converted-image.jpg"
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
                Download JPG
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

          <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
            }}
          >
            <h2>Frequently Asked Questions</h2>

            <h3>What does a PNG to JPG converter do?</h3>
            <p>
              A PNG to JPG converter changes a PNG image into a JPG image file.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint tools are completely free to use.</p>

            <h3>Does PixelMint add watermarks?</h3>
            <p>No. PixelMint never adds watermarks to your images.</p>

            <h3>Why convert PNG to JPG?</h3>
            <p>
              JPG files are often smaller than PNG files, making them useful for
              websites, email, social media, and online uploads.
            </p>

            <h3>What happens to transparent PNG backgrounds?</h3>
            <p>
              JPG does not support transparency, so transparent areas are changed
              to a white background.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
