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
  { label: 'Eco-Construction', to: '/services/eco-construction' },
  { label: 'Architecture Design', to: '/services/architecture-design' },
];

const ABOUT_DROPDOWN = [
  { label: 'Who We Are', to: '/about/who-we-are' },
  { label: 'Our Team', to: '/about/our-team' },
  { label: 'Our Policy', to: '/about/our-policy' },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Shared link classes — border-b-2 on all links keeps heights consistent
  const desktopLinkBase = 'font-body text-sm font-medium pb-px border-b-2 transition-colors duration-300 ease-in-out';

  const desktopLinkClass = (isActive: boolean) =>
    isActive
      ? `${desktopLinkBase} text-forest border-forest`
      : `${desktopLinkBase} border-transparent text-charcoal/80 hover:text-forest`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ease-in-out ${
        scrollY > 80 ? 'shadow-sm' : ''
      }`}
    >
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
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
                  <NavLink
                    to={link.to}
                    end={false}
                    className={({ isActive }) => desktopLinkClass(isActive)}
                  >
                    {link.label}
                  </NavLink>

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
                  <NavLink
                    to={link.to}
                    end={false}
                    className={({ isActive }) => desktopLinkClass(isActive)}
                  >
                    {link.label}
                  </NavLink>

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

          {/* Donate — amber CTA, not a standard nav link */}
          <Link
            to="/donate"
            className={`font-body text-sm font-semibold text-amber border-b border-transparent hover:border-amber/60 transition-colors duration-300 ${
              // Always amber regardless of scroll state — it's a CTA
              location.pathname === '/donate' ? 'border-amber/60' : ''
            }`}
          >
            Donate
          </Link>

          {/* Book CTA button */}
          <Link
            to="/booking"
            className="font-body text-sm font-semibold bg-forest text-white px-4 py-2 rounded-sm hover:bg-forest-dark transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none select-none text-charcoal">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile menu — max-height animation for smooth open/close */}
      <nav
        className={`md:hidden overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <div key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-4 px-6 font-body text-base font-medium border-b border-gray-100 transition-colors ${
                  isActive ? 'text-forest' : 'text-charcoal hover:text-forest'
                }`
              }
            >
              {link.label}
            </NavLink>

            {/* About sub-links inline on mobile */}
            {link.label === 'About' && ABOUT_DROPDOWN.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block py-3 pl-10 pr-6 font-body text-sm text-charcoal/70 hover:text-forest border-b border-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        {/* Mobile Donate */}
        <Link
          to="/donate"
          onClick={() => setMenuOpen(false)}
          className="block py-4 px-6 font-body text-base font-semibold text-amber border-b border-gray-100"
        >
          Donate
        </Link>

        {/* Mobile Book CTA */}
        <div className="px-6 py-5">
          <Link
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className="block font-body text-base font-semibold bg-forest text-white px-4 py-3 rounded-sm text-center hover:bg-forest-dark transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
