import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const metadata = {
  title: "Michael Cronin Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${caveat?.variable || ""} antialiased transition-colors duration-300`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

