import React from 'react';
import Image from 'next/image';
import { Badge } from '../ui/Badge';
import { DonateCTA } from '../sections/DonateCTA';
import { CheckCircle, Target, Users, Settings } from 'lucide-react';

interface ProgramLayoutProps {
  title: string;
  badgeLabel: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  objective: string;
  focusArea: string;
  activities: string[];
  successIndicators: string[];
  description: React.ReactNode;
  galleryImages: string[];
}

export function ProgramLayout({ 
  title, 
  badgeLabel, 
  heroImage, 
  stats, 
  objective, 
  focusArea, 
  activities, 
  successIndicators, 
  description, 
  galleryImages 
}: ProgramLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center justify-center px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-brand-brown/70" />
        </div>
        <div className="relative z-10 text-center max-w-3xl flex flex-col items-center">
          <Badge variant="news" className="mb-4 bg-brand-orange text-white">{badgeLabel}</Badge>
          <h1 className="text-white text-3xl md:text-[40px] font-bold leading-[1.2]">{title}</h1>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full px-4 md:px-8 lg:px-16 -mt-10 relative z-20">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-lg p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[140px] hover:shadow-xl transition-all duration-200">
                <div className="text-brand-green text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-brand-brown font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Objectives */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Overview */}
            <div className="lg:col-span-7 text-[#111111] text-[16px] leading-[1.6]">
              <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Program Overview</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-6">Scope of Work</h2>
              {description}
            </div>

            {/* Right: Objective Callout */}
            <div className="lg:col-span-5 bg-gold-tint border border-brand-gold/30 rounded-2xl p-6 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-brand-orange shadow-sm shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-semibold text-brand-brown mb-3">Core Objective</h3>
              <p className="text-[#111111] text-[16px] leading-relaxed italic">
                "{objective}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology, Focus, and Activities */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Focus & Beneficiaries */}
            <div className="lg:col-span-5 bg-green-tint border border-brand-green/20 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-brand-green shadow-sm shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-semibold text-brand-brown mb-3">Target & Coverage</h3>
              <p className="text-[#111111] text-[15px] leading-relaxed mb-6 flex-1">
                {focusArea}
              </p>
              <div className="border-t border-brand-green/10 pt-4 mt-auto">
                <span className="text-[12px] uppercase font-bold text-brand-green tracking-wider block">Operational District</span>
                <span className="text-[#111111] font-semibold text-sm">Gulu & Acholi Sub-Region, Northern Uganda</span>
              </div>
            </div>

            {/* Right: Activities Conducted */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-tint flex items-center justify-center text-brand-orange shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] font-semibold text-brand-brown">Core Activities & Interventions</h3>
              </div>
              <ul className="space-y-3">
                {activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                    <span className="text-[#111111] text-[15px] leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Success Indicators / Results */}
      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Our Track Record</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown">Success Indicators</h2>
          </div>
          <div className="bg-orange-tint/40 border border-brand-orange/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successIndicators.map((ind, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <p className="text-[#111111] text-[15px] leading-relaxed">{ind}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <h2 className="section-heading text-center mb-10">In the Field</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group shadow-sm border border-gray-200">
                <Image 
                  src={img} 
                  alt={`Field image ${i+1} representing ${title}`} 
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