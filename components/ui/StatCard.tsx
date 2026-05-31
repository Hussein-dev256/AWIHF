"use client";

import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  endValue: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ endValue, suffix = '', label, icon, className = '' }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const count = useCountUp(endValue, 1500, isVisible);

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center text-center p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm ${className}`}>
      {icon && <div className="mb-4 text-white">{icon}</div>}
      <div className="text-[48px] font-bold text-white mb-2 leading-none" aria-live="polite">
        {count}{suffix}
      </div>
      <div className="text-[14px] text-white/80">
        {label}
      </div>
    </div>
  );
}