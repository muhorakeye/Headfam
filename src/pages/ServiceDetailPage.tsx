// ServiceDetailPage — full detail view for a single service, loaded by :serviceId param
// Sections to be built in next phase
import { useParams } from 'react-router-dom';
import { PageHero } from '../components/layout';

export function ServiceDetailPage() {
  // TODO: [Phase 2] wire to FastAPI /api/services/:serviceId
  const { serviceId } = useParams<{ serviceId: string }>();

  return (
    <main>
      <PageHero title={`Service: ${serviceId ?? ''}`} />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Service detail — content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
