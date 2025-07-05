"use client";
import React, { useEffect, useState } from "react";

const images = [
  "ij-serious-baton.png",
  "ij-hold-piano.png",
  "ij-baton-head.png",
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
    <main className="sm:ml-56 flex flex-col justify-center items-center p-8 min-h-screen">
      <h1 className="text-2xl font-semibold">Justin "IJ" Han</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:px-12 py-8 max-w-7xl">
        {/* Left column: Image Fade Carousel */}
        <div className="sm:w-1/2 w-full overflow-hidden relative rounded-2xl">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Three Scrolling pictures of Justin"
            className={`w-full h-full object-cover rounded-2xl transition-opacity duration-3000 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Right column: Text */}
        <div className="sm:w-1/2 w-full text-center sm:text-left space-y-4 text-md">
          <h1 className="text-3xl font-semibold mb-4 border-b-2 border-white w-full pb-2 inline-block">Testimonials</h1>
          <p className="mb-4">
            The group's new conductor, Justin Han, is taking the group in an exciting direction in his inaugural year. [He is] young, talented and ambitious.
          </p>
          <p className="text-center sm:text-right">
            <a href="https://flagpole.com/music/music-features/2025/05/07/new-director-of-athens-master-chorale-brings-fresh-voices-and-concepts/?fbclid=IwY2xjawKPJW5leHRuA2FlbQIxMQBicmlkETExZ3NqUWJ3ME9nR1J0SHU0AR5xuhUpUVQXq4j3vlhNOEDgXuw1SOQOndUvsrgz2zItm9K50jTq-1lWR30PXg_aem_otdnw9aqmj2p7yEYSalfqg" target="_blank" rel="noopener noreferrer" className="hover:underline">
              - Flagpole Magazine Athens, GA
            </a>
          </p>
          <p className="mb-4">
          With masterful precision and heartfelt expression, Justin IJ Han transforms every performance into a profound musical journey that resonates long after the final note.
          </p>
          <p className="text-center sm:text-right">- Alpharetta Symphony Orchestra</p>
          <p>
          Justin`s leadership on the podium brings clarity, passion, and cohesion, elevating the ensemble to deliver performances of extraordinary depth and artistry.          
          </p>
          <p className="text-center sm:text-right">- Emory Presbysterian Church</p>
        </div>
      </div>
      </main>
  );
}
