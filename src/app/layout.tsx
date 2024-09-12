import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// Define the VT323 font imported from Google Fonts
const VT_Font = VT323({
  weight: "400", // VT323 has a single weight
  variable: "--font-vt323",
  subsets: ["latin"], // Include Latin subset for basic characters
});

// Define the local Nokia Cellphone FC font
const nokiaFont = localFont({
  src: "./fonts/nokiafc22.ttf", // Path to your local font file
  variable: "--font-nokia",
  weight: "400", // Define font weight
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
        <Analytics/>
      </body>
    </html>
  );
}
