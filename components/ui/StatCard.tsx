import React from 'react';

interface StatCardProps {
  endValue: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ endValue, suffix = '', label, icon, className = '' }: StatCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-4 md:p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 hover:border-white/35 ${className}`}>
      {icon && <div className="mb-3 md:mb-4 text-white">{icon}</div>}
      <div className="text-[32px] md:text-[48px] font-bold text-white mb-1.5 md:mb-2 leading-none">
        {endValue}{suffix}
      </div>
      <div className="text-[12px] md:text-[14px] text-white/80 font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
}
