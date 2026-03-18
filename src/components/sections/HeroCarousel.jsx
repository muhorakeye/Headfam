import { useState, useEffect, useCallback } from "react";
import img0 from "../../assets/Hero/headfam.jpeg";
import img1 from "../../assets/Hero/headfam1.jpeg";
import img2 from "../../assets/Hero/headfam2.jpeg";
import img3 from "../../assets/Hero/headfam3.jpeg";
import img4 from "../../assets/Hero/Headfam4.jpeg";
import img5 from "../../assets/Hero/headfam5.jpeg";

const slides = [img0, img1, img2, img3, img4, img5];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${(index - current) * 100}%)` }}
        >
          <img
            src={src}
            alt=""
            width="1920"
            height="1080"
            loading={index === 0 ? "eager" : "lazy"}
            style={{ imageRendering: "high-quality" }}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={[
              "rounded-full transition-all duration-300",
              i === current
                ? "w-3 h-3 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
