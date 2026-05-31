import React from 'react';
import { Card } from '../ui/Card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Before the outreach, I had no access to antenatal care. The nurses from AWIHF not only checked on my baby but also educated me on safe motherhood.",
      author: "Acayo Grace",
      role: "Community Member, Patiko",
    },
    {
      quote: "The trauma healing groups have given us a safe space to share our pain. For the first time in years, I feel like I am not alone.",
      author: "Laker Susan",
      role: "Participant, Trauma Support Group",
    },
    {
      quote: "Being trained as a peer educator empowered me to help other girls in my village stay in school by managing their reproductive health safely.",
      author: "Apiyo Florence",
      role: "SRHR Peer Educator",
    }
  ];

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Community Voices</span>
          <h2 className="text-[30px] md:text-[36px] font-semibold text-brand-brown leading-[1.3]">
            Impact Through Their Eyes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-gray-50 border-none relative pt-10">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-orange/20 rotate-180" />
              <p className="text-[#111111] text-[16px] leading-[1.6] mb-6 relative z-10 italic">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <div className="font-bold text-brand-brown">{t.author}</div>
                <div className="text-sm text-brand-green font-medium">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}