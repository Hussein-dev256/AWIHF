import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function DonateCTA() {
  return (
    <section className="section-wrapper bg-gradient-brand">
      <div className="content-container flex flex-col items-center text-center max-w-[640px] mx-auto">
        <h2 className="text-[30px] font-semibold text-white leading-[1.3] mb-4">
          Your support reaches the women who need it most.
        </h2>
        <p className="text-white/90 text-[18px] leading-[1.6] mb-8">
          Partner with us through grants, donations, or collaborations.
        </p>
        <Link href="/donate">
          <Button size="large" className="bg-white text-brand-brown hover:bg-white hover:brightness-100 shadow-sm border-none">
            Donate Now
          </Button>
        </Link>
      </div>
    </section>
  );
}