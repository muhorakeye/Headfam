import { useState } from "react";
import { motion } from "framer-motion";
import hero2 from "../../../assets/Hero/headfam2.jpeg";

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = "#e8f5e9";
  e.currentTarget.src = "";
};

const ctaStats = [
  { value: "12+", label: "Years Designing" },
  { value: "5", label: "Step Process" },
  { value: "100%", label: "Eco-Certified" },
];

export function ArchCTA() {
  const [btn1Hovered, setBtn1Hovered] = useState(false);
  const [btn2Hovered, setBtn2Hovered] = useState(false);

  return (
    <section id="arch-cta" className="py-6 px-6 md:px-16" style={{ backgroundColor: "#ffffff" }}>
      {/* Part 1 — Full-width image banner */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={hero2}
          alt="Architecture design"
          className="w-full h-80 md:h-[480px] object-cover"
          onError={handleImgError}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 100%)" }}
        />

        {/* Content block */}
        <div
          className="absolute left-10 md:left-16 z-10 max-w-xl"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <p
              className="text-xs font-bold tracking-widest mb-4"
              style={{ color: "#C9A84C", fontFamily: "DM Sans" }}
            >
              START DESIGNING
            </p>

            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Let's Design Something That Lasts a Lifetime
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans" }}
            >
              From eco-homes to cultural centers, resort architecture to landscape
              design — HeadFam Africa brings creativity, sustainability, and deep
              local knowledge to every project we design.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-8">
              {ctaStats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={
                    index < 2
                      ? { borderRight: "1px solid rgba(255,255,255,0.2)", paddingRight: "2rem" }
                      : undefined
                  }
                >
                  <p
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Button row */}
            <div className="flex gap-4 flex-wrap">
              <a href="/contact">
                <button
                  onMouseEnter={() => setBtn1Hovered(true)}
                  onMouseLeave={() => setBtn1Hovered(false)}
                  className="px-8 py-4 rounded-full text-sm font-bold text-white transition-colors duration-200"
                  style={{
                    backgroundColor: btn1Hovered ? "#C9A84C" : "#2E7D32",
                    fontFamily: "DM Sans",
                  }}
                >
                  Request a Design Consultation
                </button>
              </a>

              <button
                onMouseEnter={() => setBtn2Hovered(true)}
                onMouseLeave={() => setBtn2Hovered(false)}
                onClick={() =>
                  document.getElementById("arch-services")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full text-sm font-semibold transition-colors duration-200"
                style={{
                  border: "2px solid #ffffff",
                  backgroundColor: btn2Hovered ? "#ffffff" : "transparent",
                  color: btn2Hovered ? "#1a1a1a" : "#ffffff",
                  fontFamily: "DM Sans",
                }}
              >
                Explore Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
