// HeadFam Africa team members — dummy data
// TODO: [Phase 2] wire to FastAPI /api/team endpoint

import type { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 'amara-nkunda',
    name: 'Amara Nkunda',
    role: 'Founder & Lead Architect',
    bio: 'Amara founded HeadFam Africa after 15 years in sustainable architecture across East and West Africa. His vision of construction as community development drives every project we undertake.',
    imageUrl: 'https://picsum.photos/seed/amara-nkunda/400/400',
  },
  {
    id: 'grace-uwimana',
    name: 'Grace Uwimana',
    role: 'Head of Community Programs',
    bio: 'Grace oversees all community employment and training initiatives. Her background in social work and community development ensures that our projects create lasting economic opportunities.',
    imageUrl: 'https://picsum.photos/seed/grace-uwimana/400/400',
  },
  {
    id: 'eric-habimana',
    name: 'Eric Habimana',
    role: 'Senior Eco-Construction Engineer',
    bio: 'Eric specializes in bamboo and compressed earth block construction. He leads field teams on all major builds and develops the material science behind our sustainable building techniques.',
    imageUrl: 'https://picsum.photos/seed/eric-habimana/400/400',
  },
  {
    id: 'diane-mukamana',
    name: 'Diane Mukamana',
    role: 'Landscape & Ecology Director',
    bio: 'Diane brings a deep knowledge of Rwandan ecosystems to every project. She designs the living landscapes around our structures, ensuring they regenerate rather than displace local biodiversity.',
    imageUrl: 'https://picsum.photos/seed/diane-mukamana/400/400',
  },
];
