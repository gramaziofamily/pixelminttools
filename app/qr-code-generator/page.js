"use client";

import { useState } from "react";

export default function QRCodeGeneratorPage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  function generateQR() {
    if (!text.trim()) {
      alert("Enter a website link or text first.");
      return;
    }

    const url =
      "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" +
      encodeURIComponent(text);

    setQrUrl(url);
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
          QR Code <span style={{ color: "#00bfa6" }}>Generator</span>
        </h1>

        <p style={{ color: "#516174", fontSize: "18px", lineHeight: "1.7" }}>
          Create a free QR code for websites, links, menus, business cards,
          flyers, shops, and social media pages.
        </p>

        <div style={{ background: "white", borderRadius: "24px", padding: "28px" }}>
          <label style={{ fontWeight: "900" }}>Enter a link or text</label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://pixelminttools.com"
            rows={4}
            style={{
              width: "100%",
              marginTop: "12px",
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid #d1d5db",
              fontSize: "16px",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={generateQR}
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
            Generate QR Code
          </button>

          {qrUrl && (
            <>
              <h2 style={{ marginTop: "28px" }}>Your QR Code</h2>

              <img
                src={qrUrl}
                alt="Generated QR Code"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "16px",
                }}
              />

              <a
                href={qrUrl}
                download="pixelmint-qr-code.png"
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
                Download QR Code
              </a>
            </>
          )}

        <h2 style={{ marginTop: "40px" }}>
  How to Create a QR Code
</h2>

<p>
  1. Enter a website URL, social media profile, or text.
</p>

<p>
  2. Click Generate QR Code.
</p>

<p>
  3. Download the QR code image.
</p>

<p>
  4. Use your QR code on business cards, flyers,
  restaurant menus, Etsy orders, product packaging,
  and marketing materials.
</p>

<h2>Why Use a QR Code?</h2>

<p>
  QR codes help customers quickly access websites,
  Instagram profiles, Etsy shops, contact information,
  menus, and online content by simply scanning with
  their phone.
</p>
            
            
            <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "30px",
            }}
          >
            <h2>Frequently Asked Questions</h2>

            <h3>What is a QR code?</h3>
            <p>
              A QR code is a scannable code that can open a website, link,
              menu, contact page, or other digital content.
            </p>

            <h3>What can I use a QR code for?</h3>
            <p>
              QR codes are useful for business cards, flyers, restaurant menus,
              product packaging, Etsy shops, social media pages, and websites.
            </p>

            <h3>Is PixelMint free?</h3>
            <p>Yes. All PixelMint tools are free and require no signup.</p>

            <h3>Does PixelMint add watermarks?</h3>
            <p>No. PixelMint never adds watermarks to your QR codes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
