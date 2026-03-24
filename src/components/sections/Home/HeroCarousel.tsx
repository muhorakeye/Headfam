import { useState, useEffect, useCallback } from "react";
import img0 from "../../../assets/Hero/hero1.jpeg";
import img1 from "../../../assets/Hero/hero2.jpeg";
import img2 from "../../../assets/Hero/hero3.jpeg";
import img3 from "../../../assets/Hero/hero4.jpeg";
import img4 from "../../../assets/Hero/hero6.jpg";

const slides = [img0, img1, img2, img3, img4];

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
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Partial gradient scrim — left side only, behind text */}
      <div
        className="absolute inset-y-0 left-0 w-2/3 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
      />

      {/* Static text overlay — does not move during slide transitions */}
      <div className="absolute bottom-24 left-10 z-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4">
          Eco-Construction.
        </h1>
        <p className="text-base md:text-lg font-semibold text-green-400 max-w-lg leading-relaxed">
          Green builder, Protecting Health
        </p>
      </div>

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
