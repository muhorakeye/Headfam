import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Bambino Design
import bambinoBD1 from "../../../assets/Bambino/Design/BD1.webp";
import bambinoBD2 from "../../../assets/Bambino/Design/BD2.webp";
import bambinoBD3 from "../../../assets/Bambino/Design/BD3.webp";
import bambinoBD4 from "../../../assets/Bambino/Design/BD4.webp";

// Minak Cafe Design
import minakD1 from "../../../assets/minakcafeedesign/Image_1.webp";
import minakD2 from "../../../assets/minakcafeedesign/Scene 1_1.webp";
import minakD3 from "../../../assets/minakcafeedesign/Scene 13.webp";
import minakD4 from "../../../assets/minakcafeedesign/Scene 15.webp";
import minakD5 from "../../../assets/minakcafeedesign/Scene 2.webp";
import minakD6 from "../../../assets/minakcafeedesign/Scene 4_1.webp";

// KWV Design
import kwvD1 from "../../../assets/KWV/Design/5_1.webp";
import kwvD2 from "../../../assets/KWV/Design/Scene 17_1.webp";
import kwvD3 from "../../../assets/KWV/Design/Scene 22_1.webp";
import kwvD4 from "../../../assets/KWV/Design/Image.webp";
import kwvD5 from "../../../assets/KWV/Design/Image_1.webp";
import kwvD6 from "../../../assets/KWV/Design/Image_2.webp";

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = "#e8f5e9";
  e.currentTarget.src = "";
};

interface DesignProject {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  images: string[];
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "Bambino Eco-House Design",
    location: "Kigali, Rwanda",
    category: "Eco-Residential Villa",
    description:
      "HeadFam Africa designed the Bambino Eco-House in Kigali — a modern, sustainable residential design that blends luxury living with eco-conscious construction. The design prioritizes natural light, ventilation, and sustainable materials throughout.",
    images: [bambinoBD1, bambinoBD2, bambinoBD3, bambinoBD4],
  },
  {
    id: 2,
    title: "Minak Cafe Design",
    location: "Musanze, Rwanda",
    category: "Coffee Shop & Cultural Space",
    description:
      "HeadFam Africa designed the Minak Cafe in Musanze — a culturally rooted coffee shop design that honors local aesthetics, uses sustainable materials, and creates a vibrant gathering space for the community and visitors alike.",
    images: [minakD1, minakD2, minakD3, minakD4, minakD5, minakD6],
  },
  {
    id: 3,
    title: "Kinigi Women Village Design",
    location: "Kinigi Sector, Musanze District",
    category: "Culture Center",
    description:
      "HeadFam Africa designed the Kinigi Women Village — a culture center built to empower women through craft, income, and community. The design reflects Rwandan heritage, uses local materials, and creates a functional, beautiful space beneath Sabyinyo Volcano.",
    images: [kwvD1, kwvD2, kwvD3, kwvD4, kwvD5, kwvD6],
  },
];

export function ArchProjects() {
  const [btn1Hovered, setBtn1Hovered] = useState(false);
  const [btn2Hovered, setBtn2Hovered] = useState(false);
  const [activeImages, setActiveImages] = useState<number[]>([0, 0, 0]);

  const setActiveImage = (projectIndex: number, imgIndex: number) => {
    setActiveImages((prev) => prev.map((v, i) => (i === projectIndex ? imgIndex : v)));
  };

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

      {/* Part 3 — Design Project Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10 mb-10">
        {designProjects.map((project, projectIndex) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: projectIndex * 0.15 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row"
          >
            {/* LEFT — Image gallery */}
            <div className="w-full md:w-1/2" style={{ backgroundColor: "#1a1a1a" }}>
              {/* Main image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "280px", minHeight: "280px" }}
              >
                <img
                  src={project.images[activeImages[projectIndex]]}
                  alt={project.title}
                  onError={onImgError}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Thumbnail row */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-1 p-1">
                  {project.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative overflow-hidden rounded-sm cursor-pointer"
                      style={{
                        height: "80px",
                        minHeight: "80px",
                        outline:
                          activeImages[projectIndex] === imgIndex
                            ? "2px solid #C9A84C"
                            : "2px solid transparent",
                      }}
                      onClick={() => setActiveImage(projectIndex, imgIndex)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${imgIndex + 1}`}
                        onError={onImgError}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — Content */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <span
                className="inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full self-start"
                style={{
                  backgroundColor: "rgba(46,125,50,0.08)",
                  color: "#2E7D32",
                  fontFamily: "DM Sans",
                }}
              >
                {project.category}
              </span>

              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: "#C9A84C", fontFamily: "DM Sans" }}
              >
                DESIGN BY HEADFAM AFRICA
              </p>

              <h3
                className="text-2xl font-black mb-2"
                style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
              >
                {project.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm" style={{ color: "#2E7D32", fontFamily: "DM Sans" }}>
                  {project.location}
                </span>
              </div>

              <p
                className="text-sm text-gray-500 leading-relaxed mb-6"
                style={{ fontFamily: "DM Sans" }}
              >
                {project.description}
              </p>

              <p
                className="text-xs text-gray-400 mb-6"
                style={{ fontFamily: "DM Sans" }}
              >
                {project.images.length} design images
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 self-start"
                style={{ color: "#2E7D32", fontFamily: "DM Sans" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#2E7D32";
                }}
              >
                Discuss a Similar Design <span>&#8594;</span>
              </Link>
            </div>
          </motion.div>
        ))}
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
