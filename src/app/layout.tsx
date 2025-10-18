import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";
import Hero from "@/components/Hero";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Playk Games",
  description: "Creative platform for genre-blending",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/icons/icon-192x192.png",
    apple: "/images/icons/icon-192x192.png",
  },
  openGraph: {
    title: "Playk Games",
    description: "Creative platform for genre-blending",
    url: "https://playk-games.vercel.app",
    siteName: "Playk Games",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Playk Games Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playk Games",
    description: "Creative platform for genre-blending",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        <main>
          <Hero/>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        </body>
      </html>
  );
}
