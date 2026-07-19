import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://tokitotv.vercel.app";
const SITE_NAME = "TokitoTV";

export const metadata: Metadata = {
  title: {
    default: "TokitoTV - Watch Anime Without Ads | Free Anime Streaming App",
    template: "%s | TokitoTV",
  },
  description:
    "TokitoTV is a free anime streaming app with no ads. Watch Sub & Dub anime with a huge library, multiple servers, and clean dark UI. Download APK now.",
  keywords: [
    "tokitotv",
    "anime streaming",
    "free anime",
    "no ads anime",
    "anime app",
    "watch anime",
    "sub dub anime",
    "anime download",
    "anime apk",
    "anime free app",
  ],
  authors: [{ name: "TokitoTV" }],
  creator: "TokitoTV",
  publisher: "TokitoTV",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "TokitoTV - Watch Anime Without Ads",
    description:
      "Free anime streaming app with no ads. Sub & Dub support, huge library, clean dark UI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TokitoTV - Free Anime Streaming App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TokitoTV - Watch Anime Without Ads",
    description:
      "Free anime streaming app with no ads. Sub & Dub support, huge library, clean dark UI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "TokitoTV",
    operatingSystem: "Android",
    applicationCategory: "MultimediaApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free anime streaming app with no ads. Watch Sub & Dub anime with a huge library and clean dark UI.",
    screenshot: `${SITE_URL}/og-image.png`,
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#A35C7A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-[#EFECE3]">
        {children}
      </body>
    </html>
  );
}
