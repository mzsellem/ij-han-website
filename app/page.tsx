"use client";
import React, { useEffect, useState } from "react";

const images = [
  "ij-serious-baton.png",
  "ij-hold-piano.png",
  "ij-baton-head.png",
];

const testimonials = [
  {
    quote:
      "The group's new conductor, Justin Han, is taking the group in an exciting direction in his inaugural year. [He is] young, talented and ambitious.",
    author: {
      name: "Flagpole Magazine Athens, GA",
      link: "https://flagpole.com/music/music-features/2025/05/07/new-director-of-athens-master-chorale-brings-fresh-voices-and-concepts/?fbclid=IwY2xjawKPJW5leHRuA2FlbQIxMQBicmlkETExZ3NqUWJ3ME9nR1J0SHU0AR5xuhUpUVQXq4j3vlhNOEDgXuw1SOQOndUvsrgz2zItm9K50jTq-1lWR30PXg_aem_otdnw9aqmj2p7yEYSalfqg",
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
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 3000); // fade out duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <> 
    <main className="sm:ml-56 flex flex-col justify-center items-center p-15">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:px-12 py-8 max-w-7xl">
        {/* Left column: Image Fade Carousel */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold mb-8">Justin "IJ" Han</h1>
          <div className="w-full max-w-md rounded-2xl">
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Three Scrolling pictures of Justin"
              className={`w-full h-full object-cover rounded-2xl transition-opacity duration-3000 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Right column: Text */}
        <div className="sm:w-1/2 w-full flex flex-col space-y-8 text-xl sm:text-left text-center">
          <h1 className="text-3xl font-semibold mb-4 border-b-2 border-white w-full pb-2 inline-block">
            Testimonials
          </h1>
          {testimonials.map(({ quote, author }, idx) => (
          <div key={idx}>
            <p className="mb-2">{quote}</p>
            <p className="text-center sm:text-left">
              {author.link ? (
              <a
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
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
      </div>
      </main>
      </>
  );
}
