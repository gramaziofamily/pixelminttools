export default function CropPage() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "Arial, sans-serif", background: "#ecfeff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", padding: "30px", borderRadius: "18px" }}>
        <a href="/">← Back to tools</a>

        <h1>Social Media Image Cropper</h1>

        <p>
          Crop images for Instagram, Facebook, Pinterest, YouTube, TikTok, and other social media platforms.
        </p>

        <div
          style={{
            border: "2px dashed #ccc",
            padding: "40px",
            margin: "25px 0",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          Upload feature coming soon
        </div>

        <h2>Popular Social Media Sizes</h2>

        <ul>
          <li>Instagram Post: 1080 × 1080</li>
          <li>Instagram Story: 1080 × 1920</li>
          <li>Facebook Post: 1200 × 630</li>
          <li>YouTube Thumbnail: 1280 × 720</li>
          <li>Pinterest Pin: 1000 × 1500</li>
          <li>TikTok Video Cover: 1080 × 1920</li>
        </ul>

        <h2>Why crop images?</h2>

        <p>
          Properly sized images look more professional and perform better on social media platforms.
        </p>

        <h2>FAQ</h2>

        <h3>Will cropping reduce quality?</h3>
        <p>
          Cropping removes parts of an image but does not necessarily reduce image quality.
        </p>
      </div>
    </main>
  );
}
