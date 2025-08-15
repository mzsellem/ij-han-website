import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { Merriweather } from 'next/font/google';

export const metadata: Metadata = {
  title: "IJ-Han-Website",
  description: "Portfolio Website of IJ Han",
};

const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merriweather.className}>
      <body className="min-h-screen flex bg-[var(--background)]">
        {/* Sidebar Navbar */}
          <Navbar />
        {/* Main Content */}
        <div className="flex-1 ml-0 sm:ml-56 overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
