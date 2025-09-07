// utils/cn.ts
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS class names conditionally and handle conflicts smartly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
