import { Link } from 'react-router-dom';
import { COMPANY } from '../../utils/constants';

const ABOUT_LINKS = [
  { label: 'Who We Are', to: '/about' },
  { label: 'Community', to: '/community' },
  { label: 'Our Policy', to: '/about/our-policy' },
  { label: 'Contact Us', to: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'Eco-Construction', to: '/services/eco-construction' },
  { label: 'Architecture Design', to: '/services/architecture-design' },
  { label: 'Consultancy', to: '/services/consultancy' },
];

const PROJECT_LINKS = [
  { label: 'Kinigi Women Village', to: '/projects/kinigi-womens-village' },
  { label: 'Masaka Sweet Apartment', to: '/projects/masaka-sweet-apartment' },
  { label: 'Noble Cheer Resort', to: '/projects/noble-cheer-resort' },
  { label: 'Bambino Super City', to: '/projects/bambino-super-city' },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/headfamafrica',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/headfamafrica',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@headfamafrica',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/headfamafrica',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const columnHeading = 'text-white text-sm font-semibold uppercase tracking-wider mb-4';
const footerLink = 'font-body text-sm text-gray-400 hover:text-white transition-colors duration-200';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 — Brand */}
        <div>
          <img
            src="/logo.png"
            alt="HeadFam Africa"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="font-body text-sm text-gray-400 mt-3 leading-relaxed">
            {COMPANY.tagline}
          </p>

          {/* Social icon buttons */}
          <div className="flex gap-3 mt-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2E7D32' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.07)' }}
              >
                {social.svg}
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

        {/* Column 3 — Services & Projects */}
        <div>
          <p className={columnHeading}>Services</p>
          <ul className="space-y-3 mb-8">
            {SERVICE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className={columnHeading}>Projects</p>
          <ul className="space-y-3">
            {PROJECT_LINKS.map((link) => (
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
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                Kigali, Rwanda
              </p>
            </div>

            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href={`mailto:${COMPANY.email}`} className={footerLink}>
                {COMPANY.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={`tel:${COMPANY.phone}`} className={footerLink}>
                {COMPANY.phone}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <a
                href="https://wa.me/+250788326612"
                target="_blank"
                rel="noreferrer"
                className={footerLink}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-sm text-gray-500">
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-body text-sm text-gray-600">
            built by codacre
          </p>
        </div>
      </div>
    </footer>
  );
}
