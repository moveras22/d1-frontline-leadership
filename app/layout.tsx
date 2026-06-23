import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Playfair_Display } from "next/font/google";
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BGBV611ZVP";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D1 Frontline Leadership | Build Elite Frontline Leaders",
  description:
    "A practical framework for identifying, developing, and coaching high-performance frontline leaders in manufacturing.",
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
      <body className="min-h-full flex flex-col bg-navy-950 text-white">
        <Analytics />
        <Header />
        {children}
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
