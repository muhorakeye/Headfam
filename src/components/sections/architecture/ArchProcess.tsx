import { useState } from "react";
import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  accent: string;
  svg: React.ReactNode;
}

interface SummaryItem {
  number: string;
  title: string;
  sub: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Client Brief & Discovery",
    description:
      "Deep listening session — understanding your vision, functional requirements, cultural context, site conditions, and sustainability goals. No assumptions, no templates.",
    deliverable: "Written project brief and design scope",
    accent: "#2E7D32",
    svg: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Initial concept sketches and spatial layouts — exploring how the building can respond to its environment, honor local culture, and meet your needs creatively.",
    deliverable: "Concept sketches and spatial diagrams",
    accent: "#C9A84C",
    svg: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design Refinement",
    description:
      "Present concepts, gather feedback, and refine iteratively — adjusting materials, proportions, flow, and sustainability features until the design truly reflects your vision.",
    deliverable: "Refined design drawings and material palette",
    accent: "#2E7D32",
    svg: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Technical Documentation",
    description:
      "Full technical drawings, specifications, and construction documents — giving builders everything they need to execute the vision precisely and sustainably.",
    deliverable: "Full construction documents and specifications",
    accent: "#C9A84C",
    svg: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Construction Support",
    description:
      "We remain involved through the build — answering technical questions, reviewing progress, and ensuring the constructed result matches the designed intent precisely.",
    deliverable: "Site visits, RFI responses, design oversight",
    accent: "#2E7D32",
    svg: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const summaryItems: SummaryItem[] = [
  { number: "01", title: "Client Brief & Discovery", sub: "Listen first" },
  { number: "02", title: "Concept Development", sub: "Explore ideas" },
  { number: "03", title: "Design Refinement", sub: "Refine together" },
  { number: "04", title: "Technical Documentation", sub: "Document fully" },
  { number: "05", title: "Construction Support", sub: "Support the build" },
];

function iconBg(accent: string): string {
  return accent === "#2E7D32"
    ? "rgba(46,125,50,0.1)"
    : "rgba(201,168,76,0.1)";
}

export function ArchProcess() {
  const [hovered, setHovered] = useState<boolean[]>(steps.map(() => false));

  const setHover = (index: number, value: boolean) => {
    setHovered((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <section
      id="arch-process"
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
          <span
            className="w-10 h-0.5 inline-block"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: "#C9A84C", fontFamily: "DM Sans" }}
          >
            HOW WE DESIGN
          </span>
          <span
            className="w-10 h-0.5 inline-block"
            style={{ backgroundColor: "#C9A84C" }}
          />
        </div>

        <h2
          className="text-3xl md:text-4xl font-black mb-4"
          style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
        >
          Our Architecture Design Process
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "#6b7280", fontFamily: "DM Sans" }}
        >
          From first brief to final drawing — a structured creative process that
          puts your vision, your culture, and your environment at the center of
          every design decision.
        </p>
      </motion.div>

      {/* Part 2 — Numbered Cards Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        {/* Row 1: first 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {steps.slice(0, 3).map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              hovered={hovered[index]}
              onHoverStart={() => setHover(index, true)}
              onHoverEnd={() => setHover(index, false)}
              iconBg={iconBg(step.accent)}
            />
          ))}
        </div>

        {/* Row 2: last 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {steps.slice(3).map((step, i) => {
            const index = i + 3;
            return (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                hovered={hovered[index]}
                onHoverStart={() => setHover(index, true)}
                onHoverEnd={() => setHover(index, false)}
                iconBg={iconBg(step.accent)}
              />
            );
          })}
        </div>
      </div>

      {/* Part 3 — Process Summary Bar */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="rounded-3xl px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-4"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {summaryItems.map((item, index) => (
            <div
              key={item.number}
              className="flex flex-col items-center text-center gap-2"
              style={
                index < 4
                  ? {
                      borderRight: "1px solid rgba(255,255,255,0.08)",
                      paddingRight: "1rem",
                    }
                  : undefined
              }
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black"
                style={{
                  backgroundColor: index % 2 === 0 ? "#2E7D32" : "#C9A84C",
                  fontFamily: "DM Sans",
                }}
              >
                {item.number}
              </div>
              <span
                className="text-xs font-black text-white"
                style={{ fontFamily: "Playfair Display" }}
              >
                {item.title}
              </span>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "DM Sans" }}
              >
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface StepCardProps {
  step: Step;
  index: number;
  hovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  iconBg: string;
}

function StepCard({
  step,
  index,
  hovered,
  onHoverStart,
  onHoverEnd,
  iconBg: iconBgColor,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: hovered
          ? "0 10px 25px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Watermark number */}
      <span
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.5rem",
          fontSize: "4.5rem",
          fontWeight: 900,
          lineHeight: 1,
          color: "rgba(0,0,0,0.04)",
          fontFamily: "Playfair Display",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {step.number}
      </span>

      {/* Icon circle */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
        style={{ backgroundColor: iconBgColor, color: step.accent }}
      >
        {step.svg}
      </div>

      {/* Step number label */}
      <p
        className="text-xs font-bold tracking-widest mb-3"
        style={{ color: step.accent, fontFamily: "DM Sans" }}
      >
        {step.number}
      </p>

      {/* Title */}
      <h3
        className="text-lg font-black mb-3"
        style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "#6b7280", fontFamily: "DM Sans" }}
      >
        {step.description}
      </p>

      {/* Deliverable row */}
      <div
        className="flex items-start gap-2 pt-4"
        style={{ borderTop: "1px solid #f3f4f6" }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={step.accent}
          strokeWidth="2.5"
          className="flex-shrink-0 mt-0.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span
          className="text-xs font-semibold"
          style={{ color: step.accent, fontFamily: "DM Sans" }}
        >
          {step.deliverable}
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        className="w-full rounded-full mt-5"
        style={{
          height: "4px",
          backgroundColor: step.accent,
          opacity: hovered ? 1 : 0.15,
          transition: "opacity 0.3s ease",
        }}
      />
    </motion.div>
  );
}
