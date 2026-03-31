// Impact statistics displayed across the site
// TODO: [Phase 2] wire to FastAPI /api/stats endpoint

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: '30%',
    label: 'Revenue Donated',
    description: '30%Of every project goes directly to low-income communities near each build site',
  },
  {
    value: '500+',
    label: 'Local Jobs Created',
    description: 'Skilled workers hired from surrounding communities across Rwanda',
  },
  {
    value: '12+',
    label: 'Years of Experience',
    description: 'Pioneering eco-construction techniques across East Africa',
  },
  {
    value: '20+',
    label: 'Landmark Projects',
    description: 'Iconic structures that define sustainable development in Rwanda',
  },
];
