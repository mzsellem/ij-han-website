"use client";
import React, { useEffect, useState } from "react";

const images = [
  {
    src: "ij-serious-baton.png",
    alt: "Justin Han conducting with baton in serious pose",
  },
  {
    src: "ij-hold-piano.png",
    alt: "Justin Han holding piano sheet music",
  },
  {
    src: "ij-baton-head.png",
    alt: "Close-up of Justin Han with baton",
  },
];

const testimonials = [
  {
    quote:
      "The group's new conductor, Justin Han, is taking the group in an exciting direction in his inaugural year. [He is] young, talented and ambitious.",
    author: {
      name: "Flagpole Magazine Athens, GA",
      link: "https://flagpole.com/music/music-features/2025/05/07/new-director-of-athens-master-chorale-brings-fresh-voices-and-concepts",
    },
  },
  {
    quote:
      "With masterful precision and heartfelt expression, Justin IJ Han transforms every performance into a profound musical journey that resonates long after the final note.",
    author: { name: "Alpharetta Symphony Orchestra" },
  },
  {
    quote:
      "Justin's leadership on the podium brings clarity, passion, and cohesion, elevating the ensemble to deliver performances of extraordinary depth and artistry.",
    author: { name: "Emory Presbyterian Church" },
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 3000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.classList.add("home-background");
    return () => {
      document.body.classList.remove("home-background");
    };
  }, []);

  return (
    <>
    <div className="relative min-h-screen w-full">
      {/* HERO SECTION */}
      <section
        aria-label="Hero Section"
        className="relative z-10 flex items-start sm:justify-start justify-center h-screen text-center px-6 mt-6"
      >
        {/* Optional translucent overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <h1 className="relative z-10 text-white text-5xl md:text-7xl font-bold drop-shadow-lg sm:mt-8 sm:ml-66">
          Justin "IJ" Han
        </h1>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section
        aria-label="Testimonials"
        className="relative z-10 bg-white text-black max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-gray-300">
          Testimonials
        </h2>
        <div className="space-y-10 text-lg">
          {testimonials.map(({ quote, author }, idx) => (
            <div key={idx}>
              <p className="mb-2">“{quote}”</p>
              <p>
                {author.link ? (
                  <a
                    href={author.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-700 focus:outline focus:outline-2 focus:outline-blue-500"
                  >
                    - {author.name}
                  </a>
                ) : (
                  <>- {author.name}</>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SLIDESHOW SECTION */}
      <section
        aria-label="Image Slideshow"
        className="relative z-10 bg-gray-100 max-w-4xl mx-auto px-6 py-16"
      >
        <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg">
          <img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={`w-full h-auto object-cover transition-opacity duration-1000 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </section>
      </div>
    </>
  );
}
