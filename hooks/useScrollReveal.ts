"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  /** Delay in ms before the animation triggers (useful for staggered reveals) */
  delay?: number;
}

/**
 * Lightweight scroll-reveal hook using Intersection Observer.
 * Returns a ref to attach to the element and an `isRevealed` boolean.
 * Respects `prefers-reduced-motion` — instantly reveals when motion is reduced.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', delay = 0 } = options;
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const reveal = useCallback(() => {
    if (delay > 0) {
      setTimeout(() => setIsRevealed(true), delay);
    } else {
      setIsRevealed(true);
    }
  }, [delay]);

  useEffect(() => {
    if (isRevealed) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const timeoutId = window.setTimeout(() => setIsRevealed(true), 0);
      return () => window.clearTimeout(timeoutId);
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, reveal, isRevealed]);

  return { ref, isRevealed };
}
