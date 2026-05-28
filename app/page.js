export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>PixelMint Tools</h1>
      <p>Free image tools. No signup. No watermarks.</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        <a href="/resize">Image Resizer</a>
        <a href="/compress">Image Compressor</a>
        <a href="/convert">JPG / PNG Converter</a>
        <a href="/crop">Social Media Image Cropper</a>
        <a href="/background-remover">Background Remover</a>
      </div>
    </main>
  );
}
