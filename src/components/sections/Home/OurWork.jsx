// OurWork — mosaic bento grid, full-bleed image cards with text overlay
// Images fall back to dark green (#1b4332) so missing assets never look broken

import { useState } from "react";
import img6 from "../../../assets/Hero/headfam6.jpeg";
import img7 from "../../../assets/Hero/headfam7.jpeg";
import img8 from "../../../assets/Hero/headfam8.jpeg";

const projects = [
  {
    id: 1,
    category: "Residential",
    date: "December 2, 2024",
    title: "Eco-Friendly Living Takes Shape in Ndera",
    description: "A modern eco-residential project in Ndera built for Rwanda's future.",
    image: img6,
    size: "large",
  },
  {
    id: 2,
    category: "Women Center",
    date: "July 3, 2024",
    title: "Kinigi Women's Center Now Open",
    description: "Empowering women through eco-conscious construction and cultural identity.",
    image: img7,
    size: "small",
  },
  {
    id: 3,
    category: "Coffee Shop",
    date: "May 28, 2024",
    title: "Kinigi Coffee Shop Near Completion",
    description: "Culture, community, and sustainability in a natural setting.",
    image: img8,
    size: "small",
  },
];

const GOLD = "#C9A84C";
const GREEN = "#2E7D32";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer h-72 md:h-80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-bleed photo */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        onError={(e) => {
          e.target.style.backgroundColor = "#1b4332";
          e.target.src = "";
        }}
      />

      {/* Bottom-half gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
        }}
      />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 p-6">
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-3"
          style={{ backgroundColor: GREEN }}
        >
          {project.category}
        </span>

        <h3 className="text-lg font-bold text-white leading-snug mb-3">
          {project.title}
        </h3>

        {/* VIEW PROJECT — sharp rectangle, flanking lines */}
        <div
          className="inline-flex items-center gap-2 border px-4 py-2 transition-colors duration-300"
          style={{ borderColor: hovered ? GOLD : "white" }}
        >
          <span
            style={{
              width: "24px",
              height: "1px",
              backgroundColor: hovered ? GOLD : "white",
              display: "inline-block",
              transition: "background-color 300ms",
            }}
          />
          <span
            className="text-xs font-bold tracking-widest transition-colors duration-300"
            style={{ color: hovered ? GOLD : "white" }}
          >
            VIEW PROJECT
          </span>
          <span
            style={{
              width: "24px",
              height: "1px",
              backgroundColor: hovered ? GOLD : "white",
              display: "inline-block",
              transition: "background-color 300ms",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function OurWork() {
  return (
    <section
      id="our-work"
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Our Work
      </h2>
      <p className="text-base text-gray-400 text-center mb-10">
        Real projects. Real impact. Built to last.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
