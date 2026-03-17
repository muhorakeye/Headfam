// Team member types — must match the FastAPI backend response shape when Phase 2 arrives
// TODO: [Phase 2] sync with FastAPI Pydantic models

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
