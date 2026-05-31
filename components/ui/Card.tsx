import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card p-5 md:p-6 motion-reduce:transition-none ${className}`}>
      {children}
    </div>
  );
}