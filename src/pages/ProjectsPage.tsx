// ProjectsPage — gallery/grid of all projects with filter by category
// Sections to be built in next phase
import { PageHero } from '../components/layout';

export function ProjectsPage() {
  return (
    <main>
      <PageHero
        title="Our Projects"
        subtitle="Three landmark structures that define sustainable development in Rwanda."
      />
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Projects grid: content coming next phase
          </h2>
        </div>
      </section>
    </main>
  );
}
