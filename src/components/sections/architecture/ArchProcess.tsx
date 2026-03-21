import { motion } from "framer-motion";
import hero0 from "../../../assets/Hero/headfam.jpeg";
import hero2 from "../../../assets/Hero/headfam2.jpeg";

interface Step {
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  flip: boolean;
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
      "We begin with a deep listening session — understanding your vision, functional requirements, cultural context, site conditions, and sustainability goals. No assumptions, no templates. Every brief is unique.",
    detail: "Deliverable: Written project brief and design scope",
    image: hero0,
    flip: false,
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Our architects translate your brief into initial concept sketches and spatial layouts — exploring how the building can respond to its environment, honor local culture, and meet your needs creatively.",
    detail: "Deliverable: Concept sketches and spatial diagrams",
    image: hero2,
    flip: true,
  },
  {
    number: "03",
    title: "Design Refinement",
    description:
      "We present concepts, gather your feedback, and refine the design iteratively — adjusting materials, proportions, flow, and sustainability features until the design truly reflects your vision.",
    detail: "Deliverable: Refined design drawings and material palette",
    image: hero0,
    flip: false,
  },
  {
    number: "04",
    title: "Technical Documentation",
    description:
      "The approved design is developed into full technical drawings, specifications, and construction documents — giving builders everything they need to execute the vision precisely and sustainably.",
    detail: "Deliverable: Full construction documents and specifications",
    image: hero2,
    flip: true,
  },
  {
    number: "05",
    title: "Construction Support",
    description:
      "We remain involved through the build — answering technical questions, reviewing progress, and ensuring the constructed result matches the designed intent. Design doesn't stop at the drawing board.",
    detail: "Deliverable: Site visits, RFI responses, design oversight",
    image: hero0,
    flip: false,
  },
];

const summaryItems: SummaryItem[] = [
  { number: "01", title: "Client Brief & Discovery", sub: "Listen first" },
  { number: "02", title: "Concept Development", sub: "Explore ideas" },
  { number: "03", title: "Design Refinement", sub: "Refine together" },
  { number: "04", title: "Technical Documentation", sub: "Document fully" },
  { number: "05", title: "Construction Support", sub: "Support the build" },
];

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = "#e8f5e9";
  e.currentTarget.src = "";
};

export function ArchProcess() {
  return (
    <section
      id="arch-process"
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "#f9f6f0" }}
    >
      {/* Header */}
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

      {/* Alternating Steps */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className={`bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col ${
              step.flip ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-2/5">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-56 md:h-full object-cover"
                onError={handleImgError}
              />
            </div>

            {/* Content Side */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: "#C9A84C", fontFamily: "DM Sans" }}
              >
                {step.number}
              </p>

              <h3
                className="text-xl font-black mb-4"
                style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#6b7280", fontFamily: "DM Sans" }}
              >
                {step.description}
              </p>

              <div className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2.5"
                  className="flex-shrink-0 mt-0.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#2E7D32", fontFamily: "DM Sans" }}
                >
                  {step.detail}
                </span>
              </div>

              <div
                className="h-0.5 w-10 rounded-full mt-6"
                style={{
                  backgroundColor: index % 2 === 0 ? "#2E7D32" : "#C9A84C",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Summary Bar */}
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
                  backgroundColor:
                    index % 2 === 0 ? "#2E7D32" : "#C9A84C",
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
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "DM Sans",
                }}
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
