"use client";

import { useState } from "react";

export default function RotatePage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [rotatedImage, setRotatedImage] = useState("");
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
      setRotatedImage("");
      setDownloadUrl("");
      setMessage("");
    };

    img.src = url;
  }

  function rotateImage(degrees) {
    if (!image) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (degrees === 90 || degrees === 270) {
      canvas.width = image.height;
      canvas.height = image.width;
    } else {
      canvas.width = image.width;
      canvas.height = image.height;
    }

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((degrees * Math.PI) / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);

    const dataUrl = canvas.toDataURL("image/png");

    canvas.toBlob((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      setRotatedImage(dataUrl);
      setDownloadUrl(blobUrl);
      setMessage(`Image rotated ${degrees}°`);
    }, "image/png");
  }

  async function shareImage() {
    if (!rotatedImage) {
      alert("Rotate an image first.");
      return;
    }

    const blob = await fetch(rotatedImage).then((res) => res.blob());
    const file = new File([blob], "pixelmint-rotated-image.png", {
      type: "image/png",
    });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Rotated image",
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
          Free Image <span style={{ color: "#00bfa6" }}>Rotator</span>
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
                <button onClick={() => rotateImage(90)} style={buttonStyle}>
                  Rotate 90°
                </button>

                <button onClick={() => rotateImage(180)} style={buttonStyle}>
                  Rotate 180°
                </button>

                <button onClick={() => rotateImage(270)} style={buttonStyle}>
                  Rotate 270°
                </button>
              </div>
            </>
          )}

          {rotatedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Rotated Image</h2>
              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <img
                src={rotatedImage}
                alt="Rotated preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <a
                href={downloadUrl}
                download="pixelmint-rotated-image.png"
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
                Download Rotated Image
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

            <h3>What does an image rotator do?</h3>
            <p>
              An image rotator turns an image sideways, upside down, or back into
              the correct direction.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint tools are completely free to use.</p>

            <h3>Does PixelMint add watermarks?</h3>
            <p>No. PixelMint never adds watermarks to your images.</p>

            <h3>Can I rotate images on my phone?</h3>
            <p>
              Yes. PixelMint works on mobile phones, tablets, and desktop computers.
            </p>

            <h3>Why rotate an image?</h3>
            <p>
              Rotating images helps fix sideways photos, adjust orientation, and
              prepare images for websites, social media, and digital projects.
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
