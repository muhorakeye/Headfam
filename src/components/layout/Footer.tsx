// Site-wide footer — 4 columns on desktop, 2 on tablet, 1 on mobile
import { Link } from 'react-router-dom';
import { COMPANY, SOCIAL_LINKS } from '../../utils/constants';

const ABOUT_LINKS = [
  { label: 'Our Story', to: '/about' },
  { label: 'Community Impact', to: '/community' },
  { label: 'Our Team', to: '/about#team' },
  { label: 'Projects', to: '/projects' },
];

const SERVICE_LINKS = [
  { label: 'Eco-Construction', to: '/services/eco-construction' },
  { label: 'Architecture Design', to: '/services/architecture-design' },
  { label: 'Consultancy', to: '/services/consultancy' },
  { label: 'All Services', to: '/services' },
];

const SOCIALS = [
  { label: 'IG', href: SOCIAL_LINKS.instagram },
  { label: 'FB', href: SOCIAL_LINKS.facebook },
  { label: 'YT', href: SOCIAL_LINKS.youtube },
  { label: 'TW', href: SOCIAL_LINKS.twitter },
  { label: 'LI', href: SOCIAL_LINKS.linkedin },
];

const columnHeading = 'text-white text-sm font-semibold uppercase tracking-wider mb-4';
const footerLink = 'font-body text-sm text-gray-400 hover:text-white transition-colors duration-200';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1 — Brand */}
        <div>
          <p className="font-display font-bold text-xl text-forest">{COMPANY.name}</p>
          <p className="font-body text-sm text-gray-400 mt-2">{COMPANY.tagline}</p>

          {/* Social icon buttons */}
          <div className="flex gap-2 mt-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-sm bg-gray-800 hover:bg-forest flex items-center justify-center text-xs text-gray-400 hover:text-white transition-colors duration-200 font-mono"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — About */}
        <div>
          <p className={columnHeading}>About</p>
          <ul className="space-y-3">
            {ABOUT_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <p className={columnHeading}>Services</p>
          <ul className="space-y-3">
            {SERVICE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <p className={columnHeading}>Contact</p>
          <p className="font-body text-sm text-gray-400 mb-2">{COMPANY.address}</p>
          <p className="mb-2">
            <a href={`mailto:${COMPANY.email}`} className={footerLink}>
              {COMPANY.email}
            </a>
          </p>
          <p>
            <a href={`tel:${COMPANY.phone}`} className={footerLink}>
              {COMPANY.phone}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-sm text-gray-500">
            © {year} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-body text-sm text-gray-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-sm text-gray-500 hover:text-white transition-colors duration-200">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
