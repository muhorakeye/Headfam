import { motion } from "framer-motion";
import hero1 from "../../../assets/Hero/headfam1.jpeg";
import hero3 from "../../../assets/Hero/headfam3.jpeg";
import hero4 from "../../../assets/Hero/Headfam4.jpeg";

interface Reason {
  title: string;
  body: string;
  accent: string;
}

interface ArchStat {
  value: string;
  label: string;
  sub: string;
}

const reasons: Reason[] = [
  {
    title: "Rooted in Local Culture",
    body: "Every design we create reflects the cultural identity of its location. We do not import foreign aesthetics. We draw inspiration from Rwanda's heritage, local materials, and traditions.",
    accent: "#2E7D32",
  },
  {
    title: "Sustainability Is Structural",
    body: "Eco-friendly design is not a feature we add on. It is baked into every structural and material decision from day one. Energy efficiency, water conservation, and carbon reduction are baseline requirements.",
    accent: "#C9A84C",
  },
  {
    title: "Client-Centered Process",
    body: "We design with you, not for you. Our iterative process ensures your voice shapes every stage, from first concept through to final documentation.",
    accent: "#2E7D32",
  },
  {
    title: "Construction-Ready Designs",
    body: "Our architectural drawings are built to be built. We produce precise technical documentation that eliminates ambiguity on site and keeps your project on time and on budget.",
    accent: "#C9A84C",
  },
  {
    title: "End-to-End Capability",
    body: "Unlike standalone architects, HeadFam can design and construct. Your design vision carries all the way through to the finished structure, with no gaps between what was drawn and what was built.",
    accent: "#2E7D32",
  },
];

const archStats: ArchStat[] = [
  { value: "12+", label: "Years Designing in East Africa", sub: "Proven local expertise" },
  { value: "100%", label: "Eco-Certified Designs", sub: "Every project meets sustainability standards" },
  { value: "3", label: "Award-Worthy Structures", sub: "Landmark builds across Rwanda" },
];

const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.backgroundColor = "#e8f5e9";
  e.currentTarget.src = "";
};

export function ArchWhyUs() {
  return (
    <section
      id="arch-why-us"
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "#ffffff" }}
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
            WHY CHOOSE US
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
          Design That Goes Beyond the Drawing Board
        </h2>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "#6b7280", fontFamily: "DM Sans" }}
        >
          HeadFam Africa designs buildings that serve people well and fit their place.
          Here is what sets our architectural practice apart.
        </p>
      </motion.div>

      {/* Part 2 — Image mosaic + reasons */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center mb-16">
        {/* Left — image mosaic */}
        <motion.div
          className="flex-1 relative"
          style={{ minHeight: "300px" }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={hero1}
            alt="Architecture project"
            className="w-full h-80 object-cover rounded-2xl shadow-xl"
            onError={handleImgError}
          />

          {/* Floating bottom-right image */}
          <img
            src={hero4}
            alt="Architecture detail"
            className="w-44 h-32 object-cover rounded-xl shadow-lg border-4 border-white absolute -bottom-6 -right-6 z-10"
            onError={handleImgError}
          />

          {/* Floating stat card */}
          <div
            className="absolute top-6 -left-6 z-10 bg-white rounded-xl shadow-lg px-5 py-4"
            style={{ borderLeft: "4px solid #C9A84C" }}
          >
            <p
              className="text-2xl font-black"
              style={{ color: "#2E7D32", fontFamily: "Playfair Display" }}
            >
              5
            </p>
            <p
              className="text-xs"
              style={{ color: "#6b7280", fontFamily: "DM Sans" }}
            >
              Step Design Process
            </p>
            <p
              className="text-xs"
              style={{ color: "#9ca3af", fontFamily: "DM Sans" }}
            >
              From brief to build
            </p>
          </div>
        </motion.div>

        {/* Right — reasons list */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {reasons.map((reason, index) => (
            <div key={reason.title}>
              <div className="flex items-start gap-4 mb-6 last:mb-0">
                <div
                  className="w-1 rounded-full flex-shrink-0 self-stretch"
                  style={{ backgroundColor: reason.accent, minHeight: "40px" }}
                />
                <div>
                  <p
                    className="text-base font-black mb-1"
                    style={{ color: "#1a1a1a", fontFamily: "Playfair Display" }}
                  >
                    {reason.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280", fontFamily: "DM Sans" }}
                  >
                    {reason.body}
                  </p>
                </div>
              </div>
              {index < reasons.length - 1 && (
                <div className="h-px bg-gray-100 my-5" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Part 3 — Image stats strip */}
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={hero3}
          alt="HeadFam architecture"
          className="w-full h-64 object-cover"
          onError={handleImgError}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.72)" }}
        />

        {/* Stats row */}
        <div className="absolute inset-0 flex items-center justify-center px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-4xl mx-auto">
            {archStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                style={
                  index < 2
                    ? { borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: "2rem" }
                    : undefined
                }
              >
                <p
                  className="text-4xl font-black mb-1"
                  style={{ color: "#C9A84C", fontFamily: "Playfair Display" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm font-bold text-white mb-1"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans" }}
                >
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Part 4 — Testimonial strip */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="rounded-3xl px-10 md:px-16 py-12 flex flex-col md:flex-row items-center gap-10"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {/* Left — quote mark */}
          <p
            className="text-7xl font-black leading-none flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.08)", fontFamily: "Playfair Display" }}
          >
            &ldquo;
          </p>

          {/* Center — quote + attribution */}
          <div className="flex-1">
            <p
              className="text-lg md:text-xl font-black text-white leading-snug mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              The HeadFam team didn't just design our lodge. They understood
              our relationship with the land. The result is a structure that
              feels like it has always been there.
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                style={{ backgroundColor: "#C9A84C", fontFamily: "Playfair Display" }}
              >
                S
              </div>
              <div>
                <p
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "DM Sans" }}
                >
                  Sarah Ingabire
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans" }}
                >
                  Eco-Lodge Owner, Eastern Rwanda
                </p>
              </div>
            </div>
          </div>

          {/* Right — gold accent block */}
          <div className="text-center flex-shrink-0">
            <p
              className="text-4xl font-black"
              style={{ color: "#C9A84C", fontFamily: "Playfair Display" }}
            >
              5
            </p>
            <p
              className="text-xs text-white mt-1"
              style={{ fontFamily: "DM Sans" }}
            >
              Design Stages
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans" }}
            >
              Every project, every time
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
