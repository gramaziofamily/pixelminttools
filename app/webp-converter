"use client";

import { useState } from "react";

export default function WebPConverterPage() {
  const [image, setImage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  const convertToPng = async () => {
    if (!image) return;

    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const png = canvas.toDataURL("image/png");
      setDownloadUrl(png);
    };
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #b7fff2 0%, transparent 35%), linear-gradient(135deg, #f0fffb 0%, #e8f7ff 45%, #fff7ed 100%)",
        padding: "36px 20px",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#04786b", fontWeight: "800" }}>
          ← Back to Home
        </a>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "900",
            marginTop: "28px",
          }}
        >
          WebP <span style={{ color: "#00bfa6" }}>Converter</span>
        </h1>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px",
            marginTop: "24px",
          }}
        >
          <input
            type="file"
            accept=".webp,image/webp"
            onChange={handleUpload}
          />

          <br />
          <br />

          <button
            onClick={convertToPng}
            style={{
              padding: "12px 20px",
              borderRadius: "12px",
              border: "none",
              background: "#00bfa6",
              color: "white",
              fontWeight: "700",
            }}
          >
            Convert to PNG
          </button>

          {downloadUrl && (
            <>
              <br />
              <br />

              <a
                href={downloadUrl}
                download="converted.png"
                style={{
                  color: "#04786b",
                  fontWeight: "800",
                }}
              >
                Download PNG
              </a>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
