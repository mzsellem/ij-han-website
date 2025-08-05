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
      <body className="min-h-screen flex flex-col bg-[var(--background)]">
        {/* Sidebar Navbar */}
        <Navbar />
        {/* Main Content */}
        <div className="flex-1 w-full ml-0 sm:ml-56">
          {children}
        </div>
        {/* Optional: Footer outside sidebar */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
