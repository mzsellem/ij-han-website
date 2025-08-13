import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "./Components/Navbar";

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
      <body className="min-h-screen flex bg-[var(--background)]">
        {/* Sidebar Navbar */}
          <Navbar />
        {/* Main Content */}
        <div className="flex-1 ml-0 sm:ml-56 overflow-x-hidden">
          {children}
        </div>
        {/* Optional: Footer outside sidebar */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
