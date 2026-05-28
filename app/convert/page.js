export default function ConvertPage() {
  return (
    <main style={{ padding: "40px 20px", fontFamily: "Arial, sans-serif", background: "#ecfeff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", padding: "30px", borderRadius: "18px" }}>
        <a href="/">← Back to tools</a>

        <h1>Free JPG to PNG Converter</h1>

        <p>
          Convert JPG images to PNG and PNG images to JPG online for free.
          Perfect for websites, Etsy listings, social media graphics, and blogs.
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

        <h2>JPG vs PNG</h2>

        <p>
          JPG files are smaller and great for photos. PNG files support
          transparency and are ideal for logos, graphics, and designs.
        </p>

        <h2>When should I use JPG?</h2>

        <ul>
          <li>Photographs</li>
          <li>Blog images</li>
          <li>Website images</li>
          <li>Social media posts</li>
        </ul>

        <h2>When should I use PNG?</h2>

        <ul>
          <li>Logos</li>
          <li>Graphics with transparency</li>
          <li>Icons</li>
          <li>Design assets</li>
        </ul>

        <h2>FAQ</h2>

        <h3>Is this converter free?</h3>
        <p>Yes. PixelMint Tools is completely free to use.</p>

        <h3>Will image quality change?</h3>
        <p>
          Converting formats may slightly change file size and quality depending
          on the image type.
        </p>
      </div>
    </main>
  );
}
