// Site-wide navigation — always white, shadow appears after scrolling 80px
import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NAV_LINKS, COMPANY } from '../../utils/constants';

interface ServiceDropdownItem {
  label: string;
  to?: string;
  comingSoon?: true;
}

const SERVICE_DROPDOWN: ServiceDropdownItem[] = [
  { label: 'Eco-Construction Consultancy', to: '/services/consultancy' },
  { label: 'Architecture Design', to: '/services/architecture-design' },
  { label: 'Eco-Construction', to: '/services/eco-construction' },
];

const ABOUT_DROPDOWN = [
  { label: 'Who We Are', to: '/about/who-we-are' },
  { label: 'Our Team', to: '/about/our-team' },
  { label: 'Our Policy', to: '/about/our-policy' },
];

const PROJECTS_DROPDOWN = [
  { label: "Kinigi Women Village", to: '/projects/kinigi-womens-village' },
  { label: 'Masaka Sweet Apartment', to: '/projects/masaka-sweet-apartment' },
  { label: 'Noble Cheer Resort', to: '/projects/noble-cheer-resort' },
  { label: 'Bambino Super City', to: '/projects/bambino-super-city' },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Shared link classes — border-b-2 on all links keeps heights consistent
  const desktopLinkBase = 'font-body text-sm font-medium pb-px border-b-2 transition-colors duration-300 ease-in-out';

  const desktopLinkClass = (isActive: boolean) =>
    isActive
      ? `${desktopLinkBase} text-forest border-forest`
      : `${desktopLinkBase} border-transparent text-charcoal/80 hover:text-forest`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ease-in-out ${scrollY > 80 ? 'shadow-sm' : ''
        }`}
    >
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center h-16 md:h-[72px]">
        {/* Logo — fixed left */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label={COMPANY.name}
          >
            <img
              src="/logo.png"
              alt="HeadFam Africa"
              className="h-14 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Desktop nav — centered */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            // About gets a hover dropdown
            if (link.label === 'About') {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <span
                    className={`${desktopLinkBase} border-transparent text-charcoal/80 hover:text-forest cursor-pointer select-none`}
                    onClick={() => setAboutOpen((o) => !o)}
                  >
                    {link.label}
                  </span>

                  {aboutOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-md rounded-md py-2 min-w-[200px]">
                      <div className="absolute -top-3 left-0 right-0 h-3" />
                      {ABOUT_DROPDOWN.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setAboutOpen(false)}
                          className="block px-4 py-2 font-body text-sm text-charcoal hover:bg-forest-light hover:text-forest transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Services gets a hover dropdown
            if (link.label === 'Services') {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span
                    className={`${desktopLinkBase} border-transparent text-charcoal/80 hover:text-forest cursor-pointer select-none`}
                    onClick={() => setServicesOpen((o) => !o)}
                  >
                    {link.label}
                  </span>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-md rounded-md py-2 min-w-[200px]">
                      {/* Invisible bridge so hover doesn't break when moving to dropdown */}
                      <div className="absolute -top-3 left-0 right-0 h-3" />
                      {SERVICE_DROPDOWN.map((item) =>
                        item.comingSoon ? (
                          <span
                            key={item.label}
                            className="block px-4 py-2 font-body text-sm cursor-not-allowed"
                            style={{ color: '#9ca3af' }}
                          >
                            {item.label} (coming soon)
                          </span>
                        ) : (
                          <Link
                            key={item.to}
                            to={item.to!}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2 font-body text-sm text-charcoal hover:bg-forest-light hover:text-forest transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            }

            // Projects gets a hover dropdown
            if (link.label === 'Projects') {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setProjectsOpen(true)}
                  onMouseLeave={() => setProjectsOpen(false)}
                >
                  <span
                    className={`${desktopLinkBase} border-transparent text-charcoal/80 hover:text-forest cursor-pointer select-none`}
                    onClick={() => setProjectsOpen((o) => !o)}
                  >
                    {link.label}
                  </span>

                  {projectsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-md rounded-md py-2 min-w-[220px]">
                      <div className="absolute -top-3 left-0 right-0 h-3" />
                      {PROJECTS_DROPDOWN.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setProjectsOpen(false)}
                          className="block px-4 py-2 font-body text-sm text-charcoal hover:bg-forest-light hover:text-forest transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => desktopLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            );
          })}

          {/* Donate — gold standalone link */}
          <Link
            to="/donate"
            className="font-body text-sm font-bold transition-colors duration-300"
            style={{ color: location.pathname === '/donate' ? '#2E7D32' : '#C9A84C' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#2E7D32')}
            onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === '/donate' ? '#2E7D32' : '#C9A84C')}
          >
            DONATE
          </Link>
        </nav>

        {/* Book a Consultation — CTA button, fixed right */}
        <div className="hidden md:flex flex-shrink-0 ml-8">
          <Link
            to="/book-consultation"
            className="font-body text-sm font-semibold bg-forest text-white px-4 py-2 rounded-sm hover:bg-forest-dark transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 ml-auto"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none select-none text-charcoal">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile menu — fullscreen overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* Close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="/logo.png" alt="HeadFam Africa" className="h-10 w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-charcoal">
              <span className="text-2xl leading-none">✕</span>
            </button>
          </div>

          <div className="px-6 py-4 space-y-1">

            {/* HOME */}
            <Link to="/" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}>HOME</Link>

            {/* ABOUT */}
            <div>
              <span className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}>ABOUT</span>
              <Link to="/about/who-we-are" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Who We Are</Link>
              <Link to="/about/our-team" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Our Team</Link>
              <Link to="/about/our-policy" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Our Policy</Link>
            </div>

            {/* SERVICES */}
            <div>
              <span className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}>SERVICES</span>
              <Link to="/services/consultancy" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Eco-Construction Consultancy</Link>
              <Link to="/services/eco-construction" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Eco-Construction</Link>
              <Link to="/services/architecture-design" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Architecture Design</Link>
            </div>

            {/* COMMUNITY */}
            <Link to="/community" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}>COMMUNITY</Link>

            {/* PROJECTS */}
            <div>
              <span className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}>PROJECTS</span>
              <Link to="/projects/kinigi-womens-village" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Kinigi Women Village</Link>
              <Link to="/projects/masaka-sweet-apartment" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Masaka Sweet Apartment</Link>
              <Link to="/projects/noble-cheer-resort" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Noble Cheer Resort</Link>
              <Link to="/projects/bambino-super-city" onClick={() => setMenuOpen(false)} className="block py-2 pl-4 border-l-2 border-gray-100 font-body text-sm" style={{ color: '#6b7280', fontFamily: '"DM Sans", sans-serif' }}>Bambino Super City</Link>
            </div>

            {/* BOOK */}
            <Link to="/book-consultation" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}>BOOK A CONSULTATION</Link>

            {/* DONATE */}
            <Link to="/donate" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#C9A84C', fontFamily: '"DM Sans", sans-serif' }}>DONATE</Link>

            {/* CONTACT */}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-3 border-b border-gray-100 font-body text-base font-black" style={{ color: '#2E7D32', fontFamily: '"DM Sans", sans-serif' }}>CONTACT</Link>

          </div>
        </div>
      )}
    </header>
  );
}
