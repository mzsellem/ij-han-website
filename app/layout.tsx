import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "./Components/navbar";

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
      </body>
    </html>
  );
}
