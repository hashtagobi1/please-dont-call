import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      {/* <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWTMDQMD');`,
        }}
      ></Script> */}

      <body className={`${VT_Font.variable} ${nokiaFont.variable} antialiased`}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWTMDQMD"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-REWBDTCCST" />
      </body>
    </html>
  );
}
