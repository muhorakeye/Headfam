// Three landmark HeadFam Africa projects with dummy data
// TODO: [Phase 2] wire to FastAPI /api/projects endpoint

import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'kinigi-coffee-shop',
    title: 'Kinigi Coffee Shop',
    location: 'Kinigi, Musanze District',
    year: 2022,
    category: 'Coffee Shop',
    shortDescription: 'A community-owned coffee shop at the gateway to Volcanoes National Park, built entirely from local volcanic stone and bamboo.',
    fullDescription: 'The Kinigi Coffee Shop stands at the entrance to Volcanoes National Park, welcoming gorilla trekkers and local community members alike. Built from the area\'s characteristic dark volcanic stone with bamboo ceiling structures, the design echoes the surrounding landscape. The project employed 34 local workers over 8 months and has since created 12 permanent jobs for local youth. The cooperative ownership model means 60% of profits flow directly to the surrounding village.',
    images: [
      'https://picsum.photos/seed/kinigi-coffee-shop/800/600',
      'https://picsum.photos/seed/kinigi-coffee-shop-2/800/600',
      'https://picsum.photos/seed/kinigi-coffee-shop-3/800/600',
    ],
    serviceIds: ['eco-construction', 'architecture-design', 'coffee-shops', 'consultancy'],
    impact: {
      jobsCreated: 34,
      familiesSupported: 28,
      localMaterialsPercent: 82,
    },
  },
  {
    id: 'bamboo-renew',
    title: 'Bamboo Renew Project',
    location: 'Eastern Province, Rwanda',
    year: 2021,
    category: 'Eco-Construction',
    shortDescription: 'A pioneering demonstration project proving that bamboo can replace steel and concrete in structural construction across Rwanda.',
    fullDescription: 'The Bamboo Renew Project was HeadFam Africa\'s most ambitious research-driven construction initiative. Working with material scientists from the University of Rwanda, we developed and tested bamboo treatment processes that extend structural lifespan to 50+ years in Rwanda\'s climate. The resulting demonstration structures — a community hall, storage facility, and three residential units — have become a study destination for architects and engineers across East Africa. The project also established a bamboo nursery that now employs 15 full-time farmers.',
    images: [
      'https://picsum.photos/seed/bamboo-renew/800/600',
      'https://picsum.photos/seed/bamboo-renew-2/800/600',
      'https://picsum.photos/seed/bamboo-renew-3/800/600',
    ],
    serviceIds: ['eco-construction', 'consultancy'],
    impact: {
      jobsCreated: 47,
      familiesSupported: 40,
      localMaterialsPercent: 95,
    },
  },
  {
    id: 'minnak-coffee-design',
    title: 'Minnak Coffee Design',
    location: 'Kigali, Rwanda',
    year: 2023,
    category: 'Architecture Design',
    shortDescription: 'A flagship urban coffee shop design that brings the warmth of Rwanda\'s hill country into the heart of Kigali.',
    fullDescription: 'Minnak Coffee Design was a pure architecture and interior design commission for a Kigali entrepreneur who wanted a coffee shop that felt authentically Rwandan without being a pastiche. The result is a layered space that uses rammed earth feature walls, handwoven grass ceiling panels by local artisans, and a flowing layout that references the terraced hillsides of Rwanda\'s tea country. Since opening, the design has been featured in three East African architecture publications and has become one of Kigali\'s most photographed interior spaces.',
    images: [
      'https://picsum.photos/seed/minnak-coffee-design/800/600',
      'https://picsum.photos/seed/minnak-coffee-design-2/800/600',
      'https://picsum.photos/seed/minnak-coffee-design-3/800/600',
    ],
    serviceIds: ['architecture-design', 'coffee-shops'],
    impact: {
      jobsCreated: 18,
      familiesSupported: 12,
      localMaterialsPercent: 75,
    },
  },
];
