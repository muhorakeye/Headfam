// Pure formatting utilities — no React, no side effects

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-US').format(n);
}

export function formatPercent(n: number): string {
  return `${n}%`;
}

export function formatYear(year: number): string {
  return year.toString();
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}
