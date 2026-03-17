// ProjectDetailPage — full detail view for a single project, loaded by :projectId param
// Sections to be built in next phase
import { useParams } from 'react-router-dom';
import { PageHero } from '../components/layout';

export function ProjectDetailPage() {
  // TODO: [Phase 2] wire to FastAPI /api/projects/:projectId
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <main>
      <PageHero title={`Project: ${projectId ?? ''}`} />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Project detail — content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
