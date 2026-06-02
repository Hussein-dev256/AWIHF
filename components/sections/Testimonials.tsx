import React from 'react';
import { Card } from '../ui/Card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Before the outreach, I had no access to antenatal care. The nurses from AWIHF not only checked on my baby but also educated me on safe motherhood.",
      author: "Acayo Grace",
      role: "Community Member, Patiko",
      initials: "AG"
    },
    {
      quote: "The trauma healing groups have given us a safe space to share our pain. For the first time in years, I feel like I am not alone.",
      author: "Laker Susan",
      role: "Participant, Trauma Support Group",
      initials: "LS"
    },
    {
      quote: "Being trained as a peer educator empowered me to help other girls in my village stay in school by managing their reproductive health safely.",
      author: "Apiyo Florence",
      role: "SRHR Peer Educator",
      initials: "AF"
    }
  ];

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Community Voices</span>
          <h2 className="section-heading text-center">
            Impact Through Their Eyes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-gray-50 border-none relative pt-14 pb-8 px-6 md:px-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-orange/15 rotate-180" />
              
              {/* Testimonial Quote */}
              <p className="text-[#111111] text-[16px] leading-[1.6] mb-8 relative z-10 italic flex-grow">
                "{t.quote}"
              </p>
              
              {/* Author & Initial Badge details */}
              <div className="flex items-center gap-4 border-t border-gray-200/50 pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-orange-tint text-brand-orange font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-brand-brown text-[15px] leading-tight">{t.author}</div>
                  <div className="text-[13px] text-brand-green font-semibold mt-0.5">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}