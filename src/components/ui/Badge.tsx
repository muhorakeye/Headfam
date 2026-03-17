// Category badge — used on service and project cards
interface BadgeProps {
  label: string;
  variant?: 'forest' | 'amber' | 'muted';
}

export function Badge({ label, variant = 'forest' }: BadgeProps) {
  const variants = {
    forest: 'bg-forest-light text-forest',
    amber: 'bg-amber-light text-amber',
    muted: 'bg-gray-100 text-muted',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-mono font-medium uppercase tracking-widest rounded-sm ${variants[variant]}`}>
      {label}
    </span>
  );
}
