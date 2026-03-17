// Service types — must match the FastAPI backend response shape when Phase 2 arrives
// TODO: [Phase 2] sync with FastAPI Pydantic models

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'construction' | 'consultancy' | 'design';
  imageUrl: string;
  features: string[];
  relatedProjectIds: string[];
}
