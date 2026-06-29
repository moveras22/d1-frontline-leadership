import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import Analytics from "./components/Analytics";
import D1Chatbot from "./components/D1Chatbot";
import Header from "./components/Header";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BGBV611ZVP";
const googleAdsId = "AW-18281766130";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D1 Frontline Leadership",
  description:
    "Frontline leadership training, supervisor development, hiring assessments, and practical leadership resources for operations teams.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAdsId}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-navy-950 text-white">
        <Analytics />
        <Header />
        {children}
        <D1Chatbot />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
