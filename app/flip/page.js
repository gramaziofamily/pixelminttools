"use client";

import { useState } from "react";

export default function FlipPage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [flippedImage, setFlippedImage] = useState("");
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
      setFlippedImage("");
      setDownloadUrl("");
      setMessage("");
    };

    img.src = url;
  }

  function flipImage(direction) {
    if (!image) return;

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");

    if (direction === "horizontal") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    if (direction === "vertical") {
      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
    }

    ctx.drawImage(image, 0, 0);

    const dataUrl = canvas.toDataURL("image/png");

    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      setFlippedImage(dataUrl);
      setDownloadUrl(blobUrl);
      setMessage(
        direction === "horizontal"
          ? "Image flipped horizontally"
          : "Image flipped vertically"
      );
    }, "image/png");
  }

  async function shareImage() {
    if (!flippedImage) {
      alert("Flip an image first.");
      return;
    }

    const blob = await fetch(flippedImage).then((res) => res.blob());
    const file = new File([blob], "pixelmint-flipped-image.png", {
      type: "image/png",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Flipped image",
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
          ← Back to Home
        </a>

        <h1 style={{ fontSize: "42px", fontWeight: "900", marginTop: "28px" }}>
          Free Image <span style={{ color: "#00bfa6" }}>Flipper</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.6" }}>
          Flip images horizontally or vertically for free. Great for mirrored
          photos, design projects, and quick image corrections.
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
                <button onClick={() => flipImage("horizontal")} style={buttonStyle}>
                  Flip Horizontal
                </button>

                <button onClick={() => flipImage("vertical")} style={buttonStyle}>
                  Flip Vertical
                </button>
              </div>
            </>
          )}

          {flippedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Flipped Image</h2>

              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <img
                src={flippedImage}
                alt="Flipped preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <a
                href={downloadUrl}
                download="pixelmint-flipped-image.png"
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
                Download Flipped Image
              </a>

              <button onClick={shareImage} style={shareButtonStyle}>
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

            <h3>What does an image flipper do?</h3>
            <p>
              An image flipper mirrors an image horizontally or vertically.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint tools are completely free to use.</p>

            <h3>Does PixelMint add watermarks?</h3>
            <p>No. PixelMint never adds watermarks to your images.</p>

            <h3>Can I flip images on my phone?</h3>
            <p>
              Yes. PixelMint works on mobile phones, tablets, and desktop computers.
            </p>

            <h3>Why flip an image?</h3>
            <p>
              Flipping images can fix mirrored photos, create design effects,
              and prepare graphics for websites, shops, and social media.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const buttonStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "#00bfa6",
  color: "white",
  fontWeight: "900",
  fontSize: "18px",
};

const shareButtonStyle = {
  width: "100%",
  marginTop: "12px",
  padding: "16px",
  borderRadius: "14px",
  border: "none",
  background: "#00bfa6",
  color: "white",
  fontWeight: "900",
  fontSize: "18px",
};
