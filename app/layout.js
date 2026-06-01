import Script from "next/script";

export const metadata = {
  title: "PixelMintTools",
  description: "Free image tools for creators, bloggers, Etsy sellers, and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-42K94CSBF5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-42K94CSBF5');
          `}
        </Script>
      </body>
    </html>
  );
}
