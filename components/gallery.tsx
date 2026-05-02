"use client";

import { useEffect, useState } from "react";

const images = [
    "/Alex-scream.jpg",
    "/Maddie-sing.jpg",
    "/Tim-bass.jpg",
    "/KMB-all-guitar.jpg",
    "/Tim-guitar.jpg",
    "/Alex-D2C.jpg",
    "/KMB-all-mix.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // auto-advance (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Image container */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 border border-white rounded-xl"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-4 py-2 border border-white rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}