// Reusable full-bleed hero for inner pages (About, Services, Projects, etc.)
interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

export function PageHero({ title, subtitle, imageUrl }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 bg-forest-dark overflow-hidden"
      style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {/* Overlay for image variant */}
      {imageUrl && <div className="absolute inset-0 bg-forest-dark/70" />}

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-4">
          HeadFam Africa
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg text-white/70 mt-4 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
