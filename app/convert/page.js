"use client";

import { useState } from "react";

export default function ConvertPage() {
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const [format, setFormat] = useState("png");
  const [convertedImage, setConvertedImage] = useState("");

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      setImage(img);
      setPreview(url);
      setConvertedImage("");
    };

    img.src = url;
  }

  function convertImage() {
    if (!image) return;

    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext("2d");

    if (format === "jpg") {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.drawImage(image, 0, 0);

    const mimeType = format === "png" ? "image/png" : "image/jpeg";

    canvas.toBlob(
      (blob) => {
        const result = URL.createObjectURL(blob);
        setConvertedImage(result);
      },
      mimeType,
      0.95
    );
  }

  async function shareImage() {
    if (!convertedImage) return;

    const blob = await fetch(convertedImage).then((r) => r.blob());
    const file = new File([blob], `pixelmint-converted.${format}`, {
      type: blob.type,
    });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Converted Image",
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  }

  async function copyImage() {
    if (!convertedImage) return;

    const img = new Image();
    img.src = convertedImage;

    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(async (blob) => {
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
      }, "image/png");
    };
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
        fontFamily: "Avenir Next, Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#04786b", fontWeight: "800" }}>
          ← Back to Home
        </a>

        <h1 style={{ fontSize: "42px", fontWeight: "900", marginTop: "28px" }}>
          JPG / PNG <span style={{ color: "#00bfa6" }}>Converter</span>
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

              <div style={{ marginTop: "20px" }}>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  style={{
                    padding: "14px",
                    fontSize: "16px",
                    width: "100%",
                  }}
                >
                  <option value="png">Convert to PNG</option>
                  <option value="jpg">Convert to JPG</option>
                </select>

                <button
                  onClick={convertImage}
                  style={{
                    width: "100%",
                    marginTop: "14px",
                    padding: "16px",
                    borderRadius: "14px",
                    border: "none",
                    background: "#00bfa6",
                    color: "white",
                    fontWeight: "900",
                    fontSize: "18px",
                  }}
                >
                  Convert Image
                </button>
              </div>
            </>
          )}

          {convertedImage && (
            <>
              <h2 style={{ marginTop: "28px" }}>Converted Image</h2>

              <img
                src={convertedImage}
                alt="Converted"
                style={{
                  maxWidth: "100%",
                  borderRadius: "16px",
                }}
              />

              <a
                href={convertedImage}
                download={`pixelmint-converted.${format}`}
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
                Download Image
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
