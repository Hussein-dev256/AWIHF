import React from 'react';
import Image from 'next/image';
import { Badge } from '../ui/Badge';
import { DonateCTA } from '../sections/DonateCTA';

interface ProgramLayoutProps {
  title: string;
  badgeLabel: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  description: React.ReactNode;
  galleryImages: string[];
}

export function ProgramLayout({ title, badgeLabel, heroImage, stats, description, galleryImages }: ProgramLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center justify-center px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-brown/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl flex flex-col items-center">
          <Badge variant="news" className="mb-4 bg-brand-orange text-white">{badgeLabel}</Badge>
          <h1 className="text-white text-3xl md:text-[36px] font-bold leading-[1.2]">{title}</h1>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full px-4 md:px-8 lg:px-16 -mt-10 relative z-20">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-brand-green p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center min-h-[140px]">
                <div className="text-white text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto text-[#111111] text-[18px] leading-[1.6]">
          {description}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <h2 className="section-heading text-center mb-10">In the Field</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group">
                <Image 
                  src={img} 
                  alt={`Gallery image ${i+1} for ${title}`} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}