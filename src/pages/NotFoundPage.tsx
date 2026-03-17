// NotFoundPage — 404 error page with link back to home
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-stone flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">404</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-base text-muted mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="font-body font-semibold bg-forest text-white px-8 py-4 rounded-sm hover:bg-forest-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
