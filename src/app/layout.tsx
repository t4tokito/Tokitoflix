import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://tokitoflix.netlify.app";
const SITE_NAME = "Tokitoflix";

export const metadata: Metadata = {
  title: {
    default: "Tokitoflix — Free AI YouTube Notes Maker | Turn Videos into Notes, Quizzes & Flashcards",
    template: "%s | Tokitoflix",
  },
  description:
    "Paste any YouTube link and get structured notes, quizzes, and flashcards instantly with AI. Free, no signup required. Download Tokitoflix app now.",
  keywords: [
    "youtube notes",
    "youtube to notes",
    "video notes maker",
    "youtube summary",
    "ai notes",
    "youtube transcript notes",
    "free youtube notes",
    "youtube video notes",
    "ai note taker",
    "youtube quiz maker",
    "youtube flashcards",
    "video to notes ai",
    "youtube notes app",
    "study notes from youtube",
    "youtube lecture notes",
  ],
  authors: [{ name: "Tokitoflix" }],
  creator: "Tokitoflix",
  publisher: "Tokitoflix",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Tokitoflix — Free AI YouTube Notes Maker",
    description:
      "Turn any YouTube video into structured notes, quizzes, and flashcards with AI. Free, no signup required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tokitoflix — YouTube to Notes AI App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokitoflix — Free AI YouTube Notes Maker",
    description:
      "Turn any YouTube video into structured notes, quizzes, and flashcards with AI. Free, no signup required.",
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
  verification: {
    google: "KKpG9r60Ksj1JFBSPlYBKS3GPqjJ685be2yaiEvufn0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tokitoflix",
    url: SITE_URL,
    description:
      "Free AI-powered tool to convert YouTube videos into structured notes, quizzes, and flashcards.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "YouTube Video to Notes",
      "AI Quiz Generation",
      "Flashcard Creation",
      "PDF Export",
      "AI Summarization",
      "Group Study",
    ],
    screenshot: `${SITE_URL}/screenshot.png`,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E2030" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#1E2030] text-[#F0EEFF]">
        {children}
      </body>
    </html>
  );
}
