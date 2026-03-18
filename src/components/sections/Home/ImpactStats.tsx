// Impact stats with count-up animation — triggered once on scroll into view
import { useState, useEffect } from 'react';
import { stats } from '../../../data/stats';
import type { Stat } from '../../../data/stats';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
// TODO: [Phase 2] wire to FastAPI /api/stats endpoint

// Splits "500+" into { num: 500, suffix: "+" }, "30%" into { num: 30, suffix: "%" }
function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

interface CounterProps {
  value: string;
  started: boolean;
  delay: number;
}

function AnimatedCounter({ value, started, delay }: CounterProps) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: ReturnType<typeof setTimeout>;

    // Respect staggered delay before starting
    const startTimer = setTimeout(() => {
      const duration = 1600;
      const totalSteps = 50;
      const stepTime = duration / totalSteps;
      let step = 0;

      frame = setInterval(() => {
        step += 1;
        // Ease-out: fast at first, slows near the end
        const progress = 1 - Math.pow(1 - step / totalSteps, 3);
        setCount(Math.floor(progress * num));
        if (step >= totalSteps) {
          setCount(num);
          clearInterval(frame);
        }
      }, stepTime);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(frame);
    };
  }, [started, num, delay]);

  return <>{count}{suffix}</>;
}

interface StatCardProps {
  stat: Stat;
  index: number;
  started: boolean;
}

function StatCard({ stat, index, started }: StatCardProps) {
  return (
    <div
      className="text-center transition-all duration-700"
      style={{
        opacity: started ? 1 : 0,
        transform: started ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <p className="font-mono text-4xl md:text-5xl font-medium text-white mb-2">
        <AnimatedCounter value={stat.value} started={started} delay={index * 120} />
      </p>
      <p className="font-body text-sm font-semibold text-white/80 mb-1">
        {stat.label}
      </p>
      <p className="font-body text-xs text-white/50 leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export function ImpactStats() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-forest py-8">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} started={isVisible} />
        ))}
      </div>
    </section>
  );
}
