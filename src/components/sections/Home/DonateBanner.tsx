// DonateBanner — flat centered donation CTA, warm cream background
import { useState } from "react";
import { Link } from "react-router-dom";

function DonateButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/donate"
      className="px-10 py-4 text-sm font-semibold text-white rounded-none transition-colors duration-300"
      style={{ backgroundColor: hovered ? "#a8873a" : "#C9A84C" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Donate Now
    </Link>
  );
}

function ImpactButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to="/about"
      className="px-10 py-4 text-sm font-semibold text-white rounded-none transition-colors duration-300"
      style={{ backgroundColor: hovered ? "#333333" : "#1a1a1a" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Learn About Our Impact
    </Link>
  );
}

export function DonateBanner() {
  return (
    <section
      id="donate-banner"
      className="py-20 px-6 text-center"
      style={{ backgroundColor: "#fdf6e3" }}
    >
      <div className="max-w-3xl mx-auto">
        <span
          className="text-xs font-bold tracking-widest mb-4 block"
          style={{ color: "#C9A84C" }}
        >
          SUPPORT OUR WORK
        </span>

        <h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          style={{ color: "#1a1a1a" }}
        >
          30% of Every Project Builds Eco-Homes for Families in Need
        </h2>

        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          Your donation helps us build eco-houses for low-income families near our construction sites across Rwanda. Every project, without exception.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <DonateButton />
          <ImpactButton />
        </div>
      </div>
    </section>
  );
}
