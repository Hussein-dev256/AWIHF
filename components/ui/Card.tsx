import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = '', style }: CardProps) {
  return (
    <div className={`card p-5 md:p-6 motion-reduce:transition-none ${className}`} style={style}>
      {children}
    </div>
  );
}