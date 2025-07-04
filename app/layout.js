import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Iqbal - Cybersecurity",
  description: "Cybersecurity Engineer & Programmer",
};

export default function RootLayout({ children }) {
  return (
    // Added !scroll-smooth for the navbar click effect
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* This is the one line needed for mobile compatibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
