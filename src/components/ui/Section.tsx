import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
}

export function Section({ children, className, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'gradient-primary text-white'
  };

  return (
    <section className={cn('section', backgrounds[background], className)}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}