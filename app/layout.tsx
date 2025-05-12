import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Customize as needed
  style: ['normal', 'italic'],
  display: 'swap',
});

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
        className={playfair.className}
      >
        {children}
      </body>
    </html>
  );
}
