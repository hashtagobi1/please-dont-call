import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const VT_Font = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const nokiaFont = localFont({
  src: "./fonts/nokiafc22.ttf",
  variable: "--font-nokia",
  weight: "400",
});

export const metadata: Metadata = {
  title: "UK Number One",
  description: "produced by obi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${VT_Font.variable} ${nokiaFont.variable} antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-REWBDTCCST" />
      </body>
    </html>
  );
}
