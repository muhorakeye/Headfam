import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero0 from "../../../assets/Hero/headfam.jpeg";
import hero1 from "../../../assets/Hero/headfam1.jpeg";
import hero2 from "../../../assets/Hero/headfam2.jpeg";
import hero3 from "../../../assets/Hero/headfam3.jpeg";
import hero4 from "../../../assets/Hero/headfam4.jpeg";

interface PortfolioProject {
  image: string;
  category: string;
  title: string;
  description: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    image: hero1,
    category: "Residential",
    title: "Eco-Home — Ndera",
    description:
      "Sustainable residential design with solar-ready structure, natural ventilation, and locally sourced materials.",
  },
  {
    image: hero2,
    category: "Coffee Shop",
    title: "Kinigi Coffee Shop",
    description:
      "Cultural coffee shop design inspired by local aesthetics, blending indoor and outdoor spaces naturally.",
  },
  {
    image: hero3,
    category: "Landscape",
    title: "Eco Landscape Design",
    description:
      "Outdoor landscape architecture emphasizing native plants, water conservation, and ecological sensitivity.",
  },
  {
    image: hero4,
    category: "Cultural",
    title: "Cultural Tourism Site",
    description:
      "Touristic site design celebrating local culture with sustainable infrastructure and community-owned spaces.",
  },
  {
    image: hero0,
    category: "Resort",
    title: "Eco Resort Architecture",
    description:
      "Resort design integrating nature views, water management systems, and responsible travel infrastructure.",
  },
];

const featuredTags = ["Local Materials", "Open Community Space", "Eco-Certified", "Cultural Identity"];

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = "#e8f5e9";
  e.currentTarget.src = "";
};

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  height: string;
}

function PortfolioCard({ project, index, height }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${height}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={handleImgError}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }}
      />
      <div className="absolute bottom-0 left-0 p-5 z-10">
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 text-white"
          style={{ backgroundColor: "#2E7D32", fontFamily: "DM Sans" }}
        >
          {project.category}
        </span>
        <p
          className="text-base font-black text-white mb-1"
          style={{ fontFamily: "Playfair Display" }}
        >
          {project.title}
        </p>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans" }}
        >
          {project.description}
        </p>
      </div>
      <div className="absolute bottom-5 right-5 z-10">
        <div
          className="inline-flex items-center gap-2 border text-xs font-bold tracking-widest px-3 py-2 transition-colors duration-300 group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] border-white text-white"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="w-4 h-px bg-current inline-block" />
          VIEW PROJECT
          <span className="w-4 h-px bg-current inline-block" />
        </div>
      </div>
    </motion.div>
  );
}

export function ArchProjects() {
  const [btn1Hovered, setBtn1Hovered] = useState(false);
  const [btn2Hovered, setBtn2Hovered] = useState(false);

  return (
    <section
      id="arch-projects"
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "#f9f6f0" }}
    >
      {/* Part 1 — Header */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="w-10 h-0.5 inline-block" style={{ backgroundColor: "#C9A84C" }} />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: "#C9A84C", fontFamily: "DM Sans" }}
          >
            OUR PORTFOLIO
          </span>
          <span className="w-10 h-0.5 inline-block" style={{ backgroundColor: "#C9A84C" }} />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
        >
          Designs We've Brought to Life
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "#6b7280", fontFamily: "DM Sans" }}
        >
          Every structure begins as a drawing. Here are some of the architectural
          designs HeadFam Africa has developed and delivered across Rwanda and East
          Africa.
        </p>
      </motion.div>

      {/* Part 2 — Featured Project */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-md">
          {/* Image */}
          <img
            src={hero0}
            alt="Kinigi Women's Center"
            className="w-full md:w-[45%] h-72 md:h-auto object-cover"
            onError={handleImgError}
          />

          {/* Content */}
          <div
            className="flex-1 p-10 flex flex-col justify-center"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <span
              className="inline-block text-white text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 self-start"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", fontFamily: "DM Sans" }}
            >
              FEATURED DESIGN
            </span>

            <h3
              className="text-2xl md:text-3xl font-black text-white mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Kinigi Women's Center
            </h3>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "DM Sans" }}
            >
              A culturally rooted architectural design that celebrates Rwandan
              heritage through sustainable local materials, open community spaces,
              and eco-conscious structural systems. The Kinigi Women's Center stands
              as a landmark of what architecture can achieve when it listens to the
              land and the people.
            </p>

            {/* Inline stats */}
            <div className="flex gap-6 mb-8 flex-wrap">
              {[
                { value: "2024", label: "Completed" },
                { value: "Kinigi", label: "Location" },
                { value: "Cultural", label: "Typology" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={
                    i < 2
                      ? { borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: "1.5rem" }
                      : undefined
                  }
                >
                  <p
                    className="text-lg font-black text-white"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {featuredTags.map((tag) => (
                <span
                  key={tag}
                  className="text-white text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "DM Sans",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Part 3 — Portfolio Grid */}
      <div className="max-w-6xl mx-auto mb-10">
        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {portfolioProjects.slice(0, 2).map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} height="h-72" />
          ))}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {portfolioProjects.slice(2).map((project, i) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={i + 2}
              height="h-64"
            />
          ))}
        </div>
      </div>

      {/* Part 4 — Bottom CTA Row */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white rounded-2xl px-10 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4
              className="text-xl font-black"
              style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
            >
              Have a Design Project in Mind?
            </h4>
            <p
              className="text-sm mt-1"
              style={{ color: "#6b7280", fontFamily: "DM Sans" }}
            >
              Let's create something beautiful, sustainable, and uniquely yours.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link to="/contact">
              <button
                onMouseEnter={() => setBtn1Hovered(true)}
                onMouseLeave={() => setBtn1Hovered(false)}
                className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors duration-200"
                style={{
                  backgroundColor: btn1Hovered ? "#C9A84C" : "#2E7D32",
                  fontFamily: "DM Sans",
                }}
              >
                Request a Design Consultation
              </button>
            </Link>

            <Link to="/#our-work">
              <button
                onMouseEnter={() => setBtn2Hovered(true)}
                onMouseLeave={() => setBtn2Hovered(false)}
                className="px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
                style={{
                  border: "2px solid #2E7D32",
                  backgroundColor: btn2Hovered ? "#2E7D32" : "transparent",
                  color: btn2Hovered ? "#ffffff" : "#2E7D32",
                  fontFamily: "DM Sans",
                }}
              >
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
