// General-purpose content card used for services, projects, and team members
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClass = hover
    ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'
    : '';

  return (
    <div className={`bg-white rounded-sm shadow-sm overflow-hidden ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
