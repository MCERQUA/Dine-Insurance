import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function extractExcerpt(content: string, maxLength: number = 160): string {
  const text = content.replace(/[#*_~`]/g, '').replace(/\n/g, ' ');
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}