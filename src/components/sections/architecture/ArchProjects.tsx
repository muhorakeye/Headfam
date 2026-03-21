import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hero0 from "../../../assets/Hero/headfam.jpeg";
import hero1 from "../../../assets/Hero/headfam1.jpeg";
import hero2 from "../../../assets/Hero/headfam2.jpeg";
import hero3 from "../../../assets/Hero/headfam3.jpeg";
import hero4 from "../../../assets/Hero/headfam4.jpeg";

interface PortfolioProject {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  route: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    image: hero1,
    category: "Residential",
    date: "December 2024",
    title: "Eco-Home — Ndera",
    description:
      "Sustainable residential design with solar-ready structure, natural ventilation, and locally sourced materials.",
    tags: ["Local Materials", "Solar-Ready"],
    route: "/projects/ndera-residential",
  },
  {
    image: hero2,
    category: "Coffee Shop",
    date: "May 2024",
    title: "Kinigi Coffee Shop",
    description:
      "Cultural coffee shop design inspired by local aesthetics, blending indoor and outdoor spaces naturally.",
    tags: ["Cultural", "Eco-Design"],
    route: "/projects/kinigi-coffee-shop",
  },
  {
    image: hero3,
    category: "Landscape",
    date: "Ongoing",
    title: "Eco Landscape Design",
    description:
      "Outdoor landscape architecture emphasizing native plants, water conservation, and ecological sensitivity.",
    tags: ["Native Plants", "Water Conservation"],
    route: "/projects/eco-landscape-kigali",
  },
  {
    image: hero4,
    category: "Cultural",
    date: "2023",
    title: "Cultural Tourism Site",
    description:
      "Touristic site design celebrating local culture with sustainable infrastructure and community-owned spaces.",
    tags: ["Community-Owned", "Eco-Certified"],
    route: "/projects/cultural-tourism-site",
  },
  {
    image: hero0,
    category: "Resort",
    date: "Ongoing",
    title: "Eco Resort Architecture",
    description:
      "Resort design integrating nature views, water management systems, and responsible travel infrastructure.",
    tags: ["Eco-Resort", "Responsible Travel"],
    route: "/projects/eco-resort-development",
  },
];

const featuredTags = ["Local Materials", "Open Community Space", "Eco-Certified", "Cultural Identity"];

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = "#e8f5e9";
  e.currentTarget.src = "";
};

function PortfolioCard({ project, index }: { project: PortfolioProject; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group h-64 sm:h-72"
      onClick={() => navigate(project.route)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        onError={handleImgError}
      />

      {/* Permanent gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
      />

      {/* Content block */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between gap-3">
        <div className="flex-1">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 text-white"
            style={{ backgroundColor: "#2E7D32", fontFamily: "DM Sans" }}
          >
            {project.category}
          </span>
          <p
            className="text-base font-black text-white leading-snug mb-1"
            style={{ fontFamily: "Playfair Display" }}
          >
            {project.title}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontFamily: "DM Sans",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Arrow button */}
        <div className="flex-shrink-0 self-end w-10 h-10 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
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
      className="py-10 md:py-16 px-4 md:px-16"
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
          className="text-2xl md:text-4xl font-black mb-4"
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
          <img
            src={hero0}
            alt="Kinigi Women's Center"
            className="w-full md:w-[45%] h-56 md:h-auto object-cover"
            onError={handleImgError}
          />

          <div
            className="flex-1 p-6 md:p-10 flex flex-col justify-center"
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

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { value: "2024", label: "Completed" },
                { value: "Kinigi", label: "Location" },
                { value: "Cultural", label: "Typology" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={
                    i < 2
                      ? { borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: "1rem" }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
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
        <div className="bg-white rounded-2xl px-6 md:px-10 py-8 shadow-sm flex flex-col md:flex-row items-center md:items-center justify-between gap-6 text-center md:text-left">
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

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <Link to="/contact" className="w-full md:w-auto">
              <button
                onMouseEnter={() => setBtn1Hovered(true)}
                onMouseLeave={() => setBtn1Hovered(false)}
                className="w-full md:w-auto px-8 py-3 rounded-full text-sm font-semibold text-white transition-colors duration-200"
                style={{
                  backgroundColor: btn1Hovered ? "#C9A84C" : "#2E7D32",
                  fontFamily: "DM Sans",
                }}
              >
                Request a Design Consultation
              </button>
            </Link>

            <Link to="/#our-work" className="w-full md:w-auto">
              <button
                onMouseEnter={() => setBtn2Hovered(true)}
                onMouseLeave={() => setBtn2Hovered(false)}
                className="w-full md:w-auto px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
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
