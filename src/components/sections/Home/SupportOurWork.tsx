// SupportOurWork — two-column CTA + stat grid, Home page below OurWork
import { useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    number: "30%",
    label: "Revenue Donated",
    description: "Goes directly to low-income communities near each build site",
    dark: true,
  },
  {
    number: "500+",
    label: "Local Jobs Created",
    description: "Skilled workers hired from surrounding communities across Rwanda",
    dark: false,
  },
  {
    number: "12+",
    label: "Years of Experience",
    description: "Pioneering eco-construction techniques across East Africa",
    dark: false,
  },
  {
    number: "3",
    label: "Landmark Projects",
    description: "Iconic structures defining sustainable development in Rwanda",
    dark: true,
  },
];

interface StatBoxProps {
  stat: { number: string; label: string; description: string; dark: boolean };
}

function StatBox({ stat }: StatBoxProps) {
  return (
    <div
      className="rounded-2xl p-6 text-center"
      style={{ backgroundColor: stat.dark ? "#2E7D32" : "#f9f9f6" }}
    >
      <p
        className="text-4xl font-extrabold mb-1"
        style={{ color: stat.dark ? "white" : "#2E7D32" }}
      >
        {stat.number}
      </p>
      <p
        className="text-sm font-semibold mb-1"
        style={{ color: stat.dark ? "white" : "#1a1a1a" }}
      >
        {stat.label}
      </p>
      <p
        className="text-xs leading-relaxed opacity-80"
        style={{ color: stat.dark ? "white" : "#1a1a1a" }}
      >
        {stat.description}
      </p>
    </div>
  );
}

function PrimaryButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/contact"
      className="px-8 py-3 rounded-full font-semibold text-sm text-white transition-colors duration-300"
      style={{ backgroundColor: hovered ? "#C9A84C" : "#2E7D32" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Donate Now
    </Link>
  );
}

function OutlinedButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/about"
      className="px-8 py-3 rounded-full font-semibold text-sm transition-colors duration-300"
      style={{
        border: "2px solid #2E7D32",
        backgroundColor: hovered ? "#2E7D32" : "transparent",
        color: hovered ? "white" : "#2E7D32",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Learn About Our Impact
    </Link>
  );
}

export function SupportOurWork() {
  return (
    <section id="support-our-work" className="py-16 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">

        {/* Left — text content */}
        <div className="flex-1">
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2E7D32" }}>
            Support Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#1a1a1a" }}>
            Support Sustainable Construction in Africa
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            30% of Every Project Funds Community Programs. Your donation directly funds skills training, school building, and income programs for families
             near our construction sites across Rwanda.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton />
            <OutlinedButton />
          </div>
        </div>

        {/* Right — 2x2 stat grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatBox key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
