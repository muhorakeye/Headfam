// Project types — must match the FastAPI backend response shape when Phase 2 arrives
// TODO: [Phase 2] sync with FastAPI Pydantic models

export interface ProjectImpact {
  jobsCreated: number;
  familiesSupported: number;
  localMaterialsPercent: number;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  serviceIds: string[];
  impact?: ProjectImpact;
}
