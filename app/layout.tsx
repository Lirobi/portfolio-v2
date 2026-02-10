import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import config from "@/data/config.json";
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: config.site.title,
    template: "%s | Lilian Bischung"
  },
  description: config.site.description,
  keywords: ["développeur web", "portfolio", "Next.js", "React", "TypeScript", "Strasbourg", "Lilian Bischung", "design web", "UX"],
  authors: [{ name: config.personal.fullName, url: "https://lilianbischung.fr" }],
  creator: config.personal.fullName,
  publisher: config.personal.fullName,
  icons: "/favicon.ico",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://lilianbischung.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lilianbischung.fr",
    siteName: config.site.title,
    title: config.site.title,
    description: config.site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: config.site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.site.description,
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
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grain" />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
