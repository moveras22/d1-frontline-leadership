import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Analytics from "./components/Analytics";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
