import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export function Spotlight() {
  return (
    <section className="section-wrapper bg-brown-tint">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="w-full max-w-[450px] mx-auto relative rounded-xl overflow-hidden shadow-lg">
            {/* Authentic photo of the Gulu/Patiko outreach program. */}
            <div className="absolute inset-0 bg-brand-brown/10 z-10 pointer-events-none" />
            <Image 
              src="/images/AWIHF-Prog.webp" 
              alt="Acholi Women in Health Foundation team and community members at the Patiko Medical Outreach program"
              width={1086}
              height={1448}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">Programme Spotlight</span>
            <h2 className="text-[30px] font-semibold text-brand-brown leading-[1.3] mb-4">Patiko Medical Outreach — July 2025</h2>
            <p className="text-[#111111] text-[18px] leading-[1.6] mb-8">
              Our largest single programme event reached over 1,000 households across four days, delivering free medical consultations, vision screenings, SRHR education, and post-abortion care referrals in the most underserved rural Acholi communities.
            </p>
            <Link href="/stories">
              <Button variant="secondary" size="medium">Read Full Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}