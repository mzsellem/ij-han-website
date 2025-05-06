"use client";
import React, { useEffect, useState } from "react";
import HomeNavbar from "./home-navbar";

const images = [
  "ij-serious-baton.png",
  "ij-hold-piano.png",
  "ij-baton-head.png",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <HomeNavbar />
      <main className="flex flex-col sm:flex-row items-start justify-center gap-8 px-6 sm:px-12 py-8 w-2/3 max-w-7xl">
        {/* Left column: Image Carousel */}
        <div className="sm:w-1/2 w-full overflow-hidden relative rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Three Scrolling pictures of Justin"
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Right column: Text */}
        <div className="sm:w-1/2 w-full text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">About the Series</h2>
          <p className="mb-4">
            This photo series explores the emotional landscape of a conductor in rehearsal and performance.
          </p>
          <p className="mb-4">
            Each image captures an intimate moment of intensity, vulnerability, or connection.
          </p>
          <p>
            The visual narrative invites the viewer to consider the hidden dynamics behind musical leadership.
          </p>
        </div>
      </main>

      <footer className="w-full">
        <ul className="flex justify-center space-x-2">
          <li><a href="#Facebook">Facebook</a></li>
          <li><a href="#Instagram">Instagram</a></li>
          <li><a href="#LinkedIn">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}
