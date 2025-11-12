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

export const metadata: Metadata = {
  title: "Medshood - India's Trusted Online Pharmacy | Authentic Medicines up to 70% Off",
  description: "Buy authentic specialty and chronic disease medications online with up to 70% savings. Licensed pharmacist support, prescription upload, 24-48hr doorstep delivery. Diabetes, heart health, cancer care, and more.",
  keywords: ["online pharmacy India", "buy medicines online", "prescription medicines", "diabetes medicines", "cancer medicines", "heart health", "specialty medicines", "chronic disease medications", "GLP-1 weight loss", "online medical store", "authentic medicines", "discount pharmacy"],
  authors: [{ name: "Medshood" }],
  creator: "Medshood",
  publisher: "Medshood",
  metadataBase: new URL('https://medshood.com'),
  openGraph: {
    title: "Medshood - India's Trusted Online Pharmacy",
    description: "Authentic specialty and chronic disease medications with up to 70% savings. Licensed pharmacist support, prescription upload, fast delivery across India.",
    url: "https://medshood.com",
    siteName: "Medshood",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medshood Online Pharmacy - Authentic Medicines",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medshood - India's Trusted Online Pharmacy",
    description: "Buy authentic specialty and chronic disease medications online. Up to 70% savings, licensed pharmacist support, 24-48hr delivery.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
