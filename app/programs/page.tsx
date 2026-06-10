import React from 'react';
import Image from 'next/image';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { DonateCTA } from '@/components/sections/DonateCTA';

export default function ProgramsPage() {
  return (
    <>
      <section className="relative w-full flex items-center justify-center min-h-[320px] md:min-h-[380px] px-4 md:px-8 overflow-hidden">
        <Image
          src="/images/AWIHF-Cervical Cancer.webp"
          alt="Regional Cervical Cancer Initiative programme work"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-brown/70" />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">Our Programmes</h1>
          <p className="text-white/85 text-[18px]">
            Comprehensive, community-based health interventions designed to close the gaps that peace has not yet closed in Northern Uganda.
          </p>
        </div>
      </section>
      
      <div className="py-8">
        <ProgramsGrid />
      </div>
      
      <DonateCTA />
    </>
  );
}
