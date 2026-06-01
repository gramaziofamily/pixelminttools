"use client";

import { useState } from "react";

export default function ImageToPdfPage() {
  const [preview, setPreview] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [message, setMessage] = useState("");

  function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setPdfUrl("");
    setMessage("");
  }

  async function createPdf() {
    if (!preview) return;

    const img = new Image();
    img.src = preview;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const jpegData = canvas.toDataURL("image/jpeg", 0.92);
      const base64 = jpegData.split(",")[1];
      const binary = atob(base64);
      const imageBytes = new Uint8Array(binary.length);

      for (let i = 0; i < binary.length; i++) {
        imageBytes[i] = binary.charCodeAt(i);
      }

      const width = img.width;
      const height = img.height;

      const encoder = new TextEncoder();

      const pdfParts = [];
      const offsets = [];

      function addText(text) {
        offsets.push(totalLength());
        pdfParts.push(encoder.encode(text));
      }

      function addBytes(bytes) {
        pdfParts.push(bytes);
      }

      function totalLength() {
        return pdfParts.reduce((sum, part) => sum + part.length, 0);
      }

      addText("%PDF-1.4\n");

      addText(
        "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"
      );

      addText(
        `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`
      );

      addText(
        `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`
      );

      addText(
        `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageBytes.length} >>\nstream\n`
      );

      addBytes(imageBytes);
      addText("\nendstream\nendobj\n");

      const content = `q\n${width} 0 0 ${height} 0 0 cm\n/Im0 Do\nQ\n`;

      addText(
        `5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`
      );

      const xrefStart = totalLength();

      addText("xref\n0 6\n0000000000 65535 f \n");

      for (let i = 0; i < offsets.length; i++) {
        addText(String(offsets[i]).padStart(10, "0") + " 00000 n \n");
      }

      addText(
        `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`
      );

      const pdfBlob = new Blob(pdfParts, { type: "application/pdf" });
      const url = URL.createObjectURL(pdfBlob);

      setPdfUrl(url);
      setMessage("PDF created successfully");
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
        color: "#102033",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#04786b", fontWeight: "800" }}>
          ← Back to Home
        </a>

        <h1 style={{ fontSize: "42px", fontWeight: "900", marginTop: "28px" }}>
          Image to <span style={{ color: "#00bfa6" }}>PDF Converter</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.7" }}>
          Convert JPG, PNG, and other images into a downloadable PDF file.
        </p>

        <div style={{ background: "white", borderRadius: "24px", padding: "28px" }}>
          <input type="file" accept="image/*" onChange={handleUpload} />

          {preview && (
            <>
              <h2 style={{ marginTop: "24px" }}>Image Preview</h2>

              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: "100%", borderRadius: "16px" }}
              />

              <button
                onClick={createPdf}
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
                Create PDF
              </button>
            </>
          )}

          {pdfUrl && (
            <>
              <p style={{ color: "#04786b", fontWeight: "800" }}>{message}</p>

              <a
                href={pdfUrl}
                download="pixelmint-image.pdf"
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
                Download PDF
              </a>
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

            <h3>What does an image to PDF converter do?</h3>
            <p>It turns an image file into a downloadable PDF document.</p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint tools are free and require no signup.</p>

            <h3>Does PixelMint add watermarks?</h3>
            <p>No. PixelMint never adds watermarks to your files.</p>

            <h3>What image types can I use?</h3>
            <p>You can upload common image types like JPG, PNG, and WebP.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
