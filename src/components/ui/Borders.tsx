import { cn } from '@/utils/cn';
import React from 'react';

type Border = {
  children: React.ReactNode;
  className?: string;
  classNames?: string;
  isBorder?: boolean;
};

export default function Borders({
  children,
  className,
  classNames,
  isBorder = true,
}: Border) {
  return (
    <div
      className={cn(
        `relative inline-block px-4 py-2  ${className} hover:bg-emerald-600/20 transition-colors duration-200`
      )}
    >
      {children}
      <span
        className={cn(
          `absolute left-0 top-0 w-2 h-2 ${
            isBorder && 'border-l-2 border-t-2 border-emerald-600 '
          } ${classNames}`
        )}
      ></span>
      <span
        className={cn(
          `absolute right-0 top-0 w-2 h-2 ${
            isBorder && 'border-r-2 border-t-2 border-emerald-600'
          } ${classNames}`
        )}
      ></span>
      <span
        className={cn(
          `absolute left-0 bottom-0 w-2 h-2 ${
            isBorder && 'border-l-2 border-b-2 border-emerald-600'
          } ${classNames}`
        )}
      ></span>
      <span
        className={cn(
          `absolute right-0 bottom-0 w-2 h-2 ${
            isBorder && 'border-r-2 border-b-2 border-emerald-600'
          } ${classNames}`
        )}
      ></span>
    </div>
  );
}
