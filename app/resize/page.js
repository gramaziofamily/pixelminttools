export default function ResizePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Free Image Resizer</h1>

      <p>
        Resize images online for free. Upload your image and choose a new size.
      </p>

      <div
        style={{
          border: "2px dashed #ccc",
          padding: "40px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        Upload feature coming soon
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Common Sizes</h2>
        <ul>
          <li>Instagram Post (1080 × 1080)</li>
          <li>Instagram Story (1080 × 1920)</li>
          <li>Facebook Post (1200 × 630)</li>
          <li>YouTube Thumbnail (1280 × 720)</li>
          <li>Pinterest Pin (1000 × 1500)</li>
        </ul>
      </div>
    </main>
  );
}
