import React from 'react';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { DonateCTA } from '@/components/sections/DonateCTA';

export default function ProgramsPage() {
  return (
    <>
      <section className="w-full bg-gradient-brand flex items-center justify-center min-h-[280px] px-4 md:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2] mb-4">Our Programmes</h1>
          <p className="text-white/80 text-[18px]">
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