"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-gradient-brand flex items-center justify-center relative overflow-hidden min-h-[400px] md:min-h-[520px] px-4 md:px-8 lg:px-16 py-[96px]">
      <div 
        className={`max-w-content mx-auto text-center flex flex-col items-center z-10 transition-opacity duration-600 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-white text-4xl md:text-[48px] font-bold leading-[1.1] mb-6 max-w-4xl">
          Healthcare for Every Acholi Woman.
        </h1>
        <p className="text-white/80 text-[18px] leading-[1.6] max-w-2xl mb-8">
          Bringing community-rooted health services to the women and girls of Northern Uganda.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/donate">
            <Button size="large" variant="primary" className="w-full sm:w-auto bg-white text-brand-brown hover:bg-white hover:brightness-100">
              Donate Now
            </Button>
          </Link>
          <Link href="/programs">
            <Button size="large" variant="ghost" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white">
              Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}