import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "IJ-Han-Website",
  description: "Portfolio Website of IJ Han",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen font-[family-name:var(--font-geist-sans)] flex flex-col items-center"
      >
        <div className="w-full"> <Navbar /> </div>
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <div className="w-full"> <Footer /> </div>
      </body>
    </html>
  );
}
