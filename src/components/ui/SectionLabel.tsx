// Small uppercase label displayed above section headings to provide context
interface SectionLabelProps {
  children: React.ReactNode;
  color?: 'forest' | 'amber';
}

export function SectionLabel({ children, color = 'forest' }: SectionLabelProps) {
  const colors = {
    forest: 'text-forest',
    amber: 'text-amber',
  };

  return (
    <p className={`font-mono text-xs uppercase tracking-[0.2em] font-medium mb-3 ${colors[color]}`}>
      {children}
    </p>
  );
}
