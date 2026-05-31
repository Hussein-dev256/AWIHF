import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'program' | 'news' | 'impact' | 'coming-soon' | 'admin-new';
  className?: string;
}

export function Badge({ children, variant = 'program', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
  
  const variants = {
    'program': "bg-green-tint text-brand-green",
    'news': "bg-orange-tint text-brand-orange",
    'impact': "bg-gold-tint text-brand-brown",
    'coming-soon': "bg-gray-200 text-gray-500",
    'admin-new': "bg-green-tint text-brand-green",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}