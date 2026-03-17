// Company-wide constants — single source of truth for contact info and social links
export const COMPANY = {
  name: 'HeadFam Africa',
  tagline: 'Eco-Construction for Community Development',
  email: 'info@headfamafrica.com',
  phone: '+250 788 000 000',
  address: 'KG 123 St, Kigali, Rwanda',
  foundedYear: 2012,
} as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/headfamafrica',
  facebook: 'https://facebook.com/headfamafrica',
  youtube: 'https://youtube.com/@headfamafrica',
  twitter: 'https://twitter.com/headfamafrica',
  linkedin: 'https://linkedin.com/company/headfamafrica',
} as const;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Community', to: '/community' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
] as const;
