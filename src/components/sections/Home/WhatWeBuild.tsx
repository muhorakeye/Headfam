// "What We Build" services grid — Home page, below ImpactStats
// Scroll-triggered stagger animation, inline SVG icons, no external libraries
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Resorts',
    description:
      'A resort is a place designed for relaxation, recreation, and accommodation. HeadFam Africa builds eco-friendly resorts that blend with nature, prioritize water conservation, and offer guests a luxurious yet responsible experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Lodges',
    description:
      'A lodge is a small, rustic accommodation set within a natural environment. HeadFam Africa\'s eco-lodges are built to benefit local communities, educate guests about conservation, and offer an authentic connection to the surrounding landscape.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <path d="M4 22V12L12 4l8 8v10" />
        <path d="M9 22v-6h6v6" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Villas',
    description:
      'A villa is a high-end, private residence or holiday home designed for comfort and exclusivity. HeadFam Africa builds eco-friendly villas using sustainable local materials, combining luxury living with a minimal environmental footprint.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <path d="M1 22V11L12 2l11 9v11" />
        <rect x="8" y="14" width="8" height="8" />
        <line x1="12" y1="14" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Campsites',
    description:
      'A campsite is an outdoor space equipped for temporary accommodation. HeadFam Africa designs eco-campsites using renewable energy and eco-friendly materials, creating modern, sustainable camping experiences with minimal impact on nature.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <polygon points="12 2 2 19 22 19" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="9" y1="19" x2="15" y2="19" />
      </svg>
    ),
  },
  {
    title: 'Coffee Shops',
    description:
      'A coffee shop is a community gathering space rooted in culture and conversation. HeadFam Africa builds coffee shops that honor local aesthetics, use sustainable materials, and create vibrant spaces for community connection and tourism.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Apartments',
    description:
      'An apartment is a self-contained residential unit within a larger building. HeadFam Africa transforms apartments into eco-friendly living spaces, integrating energy-efficient technologies, waste reduction strategies, and sustainable materials.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
  },
  {
    title: 'Eco-Residential',
    description:
      'An eco-home is an environmentally low-impact residence designed to reduce carbon footprint and energy consumption. HeadFam Africa builds eco-homes that conserve water, reuse materials, reduce pollution, and generate clean energy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <path d="M12 22s8-5 8-12A8 8 0 0 0 4 10c0 7 8 12 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Landscape',
    description:
      'Landscape design is the art of shaping outdoor spaces to harmonize with their natural surroundings. HeadFam Africa creates breathtaking eco-conscious landscapes emphasizing native plants, water conservation, and environmentally friendly materials.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <path d="M12 22V12" />
        <path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7" />
        <path d="M3 17c0-2.76 2.24-5 5-5h8c2.76 0 5 2.24 5 5" />
        <line x1="3" y1="22" x2="21" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Culture Centers',
    description:
      'A culture center is a space that promotes and preserves the arts, heritage, and traditions of a community. HeadFam Africa designs and builds culture centers that celebrate local identity in an environmentally responsible and inclusive way.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest">
        <line x1="2" y1="20" x2="22" y2="20" />
        <rect x="6" y="14" width="4" height="6" />
        <rect x="14" y="14" width="4" height="6" />
        <rect x="4" y="9" width="16" height="5" />
        <path d="M2 9l10-7 10 7" />
      </svg>
    ),
  },
];

export function WhatWeBuild() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.08 });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="what-we-build" className="bg-white py-16 px-6 md:px-16">
      {/* Heading block — fades in first */}
      <div
        className="transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          What We Build
        </h2>
        <p className="text-base text-gray-500 text-center max-w-2xl mx-auto mb-12">
          From eco-resorts to cultural centers every structure we create honors the environment and community.
        </p>
      </div>

      {/* Cards grid — each card staggers in */}
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transition: `opacity 600ms ease ${index * 80}ms, transform 600ms ease ${index * 80}ms, box-shadow 300ms ease, translate 300ms ease`,
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-forest-light flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      {/* CTA button — links to Contact page */}
      <div className="flex justify-center mt-12">
        <Link
          to="/contact"
          className="px-10 py-4 text-base font-semibold rounded-full text-white transition-colors duration-300"
          style={{ backgroundColor: hovered ? '#C9A84C' : '#2E7D32' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Start Your Project With Us
        </Link>
      </div>
    </section>
  );
}
