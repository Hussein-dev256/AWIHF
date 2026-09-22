"use client";

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motionTokens } from '@/lib/motion/tokens';

type RevealVariant = 'fade-up' | 'fade' | 'scale' | 'slide-left' | 'slide-right';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
};

const hiddenByVariant: Record<RevealVariant, string> = {
  'fade-up': 'opacity-0 translate-y-5',
  fade: 'opacity-0',
  scale: 'opacity-0 scale-[0.98]',
  'slide-left': 'opacity-0 -translate-x-5',
  'slide-right': 'opacity-0 translate-x-5',
};

export function Reveal({
  children,
  className = '',
  variant = 'fade-up',
  delayMs = 0,
  threshold = 0.12,
  rootMargin,
}: RevealProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    delay: delayMs,
  });

  return (
    <div
      ref={ref}
      className={`motion-reveal will-change-transform ${
        isRevealed ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hiddenByVariant[variant]
      } ${className}`}
      style={{
        transitionDuration: `${motionTokens.duration.standard}ms`,
        transitionTimingFunction: motionTokens.easing.entrance,
      }}
    >
      {children}
    </div>
  );
}
