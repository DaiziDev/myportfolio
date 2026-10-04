import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const title = "Dimitri Tiolong (Daizi) — Fullstack Developer";
const description =
  "Dimitri Tiolong (Daizi) is a fullstack developer and functional tester based in Yaoundé, Cameroon: Angular, React, Next.js, PHP and PostgreSQL, with a love for animated, immersive web experiences.";

export const metadata: Metadata = {
  metadataBase: new URL("https://daizidev-portfolio.onrender.com"),
  title,
  description,
  applicationName: "DaiziDev Portfolio",
  verification: { google: "BQDs3iCA6HA7zeZx_RX-jOB6kEBBm3uSp9lEWfxoby0" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "DaiziDev Portfolio",
    title,
    description,
    images: ["/web-app-manifest-512x512.png"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/web-app-manifest-512x512.png"] },
};

export const viewport: Viewport = { themeColor: "#05050a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
